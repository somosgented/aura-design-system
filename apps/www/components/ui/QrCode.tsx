"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

const SIZE = 21;
const DATA_CODEWORDS = 19;
const ECC_CODEWORDS = 7;
const MAX_BYTES = 17;

function rsMultiply(x: number, y: number) {
  let z = 0;
  for (let i = 7; i >= 0; i--) {
    z = (z << 1) ^ ((z >>> 7) * 0x11d);
    z ^= ((y >>> i) & 1) * x;
  }
  return z & 0xff;
}

function rsDivisor(degree: number) {
  const result = new Array<number>(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < result.length; j++) {
      result[j] = rsMultiply(result[j], root);
      if (j + 1 < result.length) result[j] ^= result[j + 1];
    }
    root = rsMultiply(root, 0x02);
  }
  return result;
}

function rsRemainder(data: number[], divisor: number[]) {
  const result = new Array<number>(divisor.length).fill(0);
  for (const byte of data) {
    const factor = (byte ^ result[0]) & 0xff;
    result.copyWithin(0, 1);
    result[result.length - 1] = 0;
    for (let i = 0; i < result.length; i++) {
      result[i] ^= rsMultiply(divisor[i], factor);
    }
  }
  return result;
}

function pushBits(out: number[], value: number, length: number) {
  for (let i = length - 1; i >= 0; i--) out.push((value >>> i) & 1);
}

function dataCodewords(bytes: Uint8Array) {
  const bits: number[] = [];
  pushBits(bits, 0b0100, 4);
  pushBits(bits, bytes.length, 8);
  for (const byte of bytes) pushBits(bits, byte, 8);
  const capacity = DATA_CODEWORDS * 8;
  pushBits(bits, 0, Math.min(4, capacity - bits.length));
  while (bits.length % 8 !== 0) bits.push(0);
  const data: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let value = 0;
    for (let j = 0; j < 8; j++) value = (value << 1) | bits[i + j];
    data.push(value);
  }
  const pads = [0xec, 0x11];
  let pad = 0;
  while (data.length < DATA_CODEWORDS) data.push(pads[pad++ % 2]);
  return data;
}

type Matrix = { modules: boolean[][]; fn: boolean[][] };

function createMatrix(): Matrix {
  return {
    modules: Array.from({ length: SIZE }, () => Array(SIZE).fill(false)),
    fn: Array.from({ length: SIZE }, () => Array(SIZE).fill(false)),
  };
}

function setFunction(state: Matrix, x: number, y: number, dark: boolean) {
  state.modules[y][x] = dark;
  state.fn[y][x] = true;
}

function drawFinder(state: Matrix, cx: number, cy: number) {
  for (let dy = -4; dy <= 4; dy++) {
    for (let dx = -4; dx <= 4; dx++) {
      const xx = cx + dx;
      const yy = cy + dy;
      if (xx < 0 || yy < 0 || xx >= SIZE || yy >= SIZE) continue;
      const dist = Math.max(Math.abs(dx), Math.abs(dy));
      setFunction(state, xx, yy, dist !== 2 && dist !== 4);
    }
  }
}

function drawFunctions(state: Matrix) {
  for (let i = 0; i < SIZE; i++) {
    setFunction(state, 6, i, i % 2 === 0);
    setFunction(state, i, 6, i % 2 === 0);
  }
  drawFinder(state, 3, 3);
  drawFinder(state, SIZE - 4, 3);
  drawFinder(state, 3, SIZE - 4);
  const reserved: Array<[number, number]> = [];
  for (let i = 0; i <= 5; i++) reserved.push([8, i]);
  reserved.push([8, 7], [8, 8], [7, 8]);
  for (let i = 9; i < 15; i++) reserved.push([14 - i, 8]);
  for (let i = 0; i < 8; i++) reserved.push([SIZE - 1 - i, 8]);
  for (let i = 8; i < 15; i++) reserved.push([8, SIZE - 15 + i]);
  reserved.push([8, SIZE - 8]);
  for (const [x, y] of reserved) state.fn[y][x] = true;
  state.modules[SIZE - 8][8] = true;
}

function placeData(state: Matrix, bits: number[]) {
  let index = 0;
  for (let right = SIZE - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vert = 0; vert < SIZE; vert++) {
      for (let j = 0; j < 2; j++) {
        const x = right - j;
        const upward = ((right + 1) & 2) === 0;
        const y = upward ? SIZE - 1 - vert : vert;
        if (!state.fn[y][x] && index < bits.length) {
          state.modules[y][x] = bits[index] === 1;
          index += 1;
        }
      }
    }
  }
}

function maskFlips(mask: number, x: number, y: number) {
  switch (mask) {
    case 0:
      return (x + y) % 2 === 0;
    case 1:
      return y % 2 === 0;
    case 2:
      return x % 3 === 0;
    case 3:
      return (x + y) % 3 === 0;
    case 4:
      return (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0;
    case 5:
      return (x * y) % 2 + (x * y) % 3 === 0;
    case 6:
      return ((x * y) % 2 + (x * y) % 3) % 2 === 0;
    default:
      return ((x + y) % 2 + (x * y) % 3) % 2 === 0;
  }
}

function applyMask(state: Matrix, mask: number) {
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (!state.fn[y][x] && maskFlips(mask, x, y)) state.modules[y][x] = !state.modules[y][x];
    }
  }
}

function drawFormat(state: Matrix, mask: number) {
  const data = (1 << 3) | mask;
  let rem = data;
  for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
  const bits = ((data << 10) | (rem & 0x3ff)) ^ 0x5412;
  const bit = (index: number) => ((bits >>> index) & 1) === 1;
  for (let i = 0; i <= 5; i++) setFunction(state, 8, i, bit(i));
  setFunction(state, 8, 7, bit(6));
  setFunction(state, 8, 8, bit(7));
  setFunction(state, 7, 8, bit(8));
  for (let i = 9; i < 15; i++) setFunction(state, 14 - i, 8, bit(i));
  for (let i = 0; i < 8; i++) setFunction(state, SIZE - 1 - i, 8, bit(i));
  for (let i = 8; i < 15; i++) setFunction(state, 8, SIZE - 15 + i, bit(i));
  setFunction(state, 8, SIZE - 8, true);
}

function penalty(modules: boolean[][]) {
  let score = 0;
  const run = (read: (index: number) => boolean) => {
    let color = read(0);
    let length = 1;
    for (let i = 1; i < SIZE; i++) {
      if (read(i) === color) {
        length += 1;
        if (length === 5) score += 3;
        else if (length > 5) score += 1;
      } else {
        color = read(i);
        length = 1;
      }
    }
  };
  for (let y = 0; y < SIZE; y++) run((x) => modules[y][x]);
  for (let x = 0; x < SIZE; x++) run((y) => modules[y][x]);
  for (let y = 0; y < SIZE - 1; y++) {
    for (let x = 0; x < SIZE - 1; x++) {
      const color = modules[y][x];
      if (color === modules[y][x + 1] && color === modules[y + 1][x] && color === modules[y + 1][x + 1]) {
        score += 3;
      }
    }
  }
  let dark = 0;
  for (const row of modules) for (const cell of row) if (cell) dark += 1;
  const total = SIZE * SIZE;
  const balance = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
  score += balance * 10;
  return score;
}

function encodeQrMatrix(value: string, forcedMask?: number) {
  const bytes = new TextEncoder().encode(value);
  if (bytes.length > MAX_BYTES) return null;
  const data = dataCodewords(bytes);
  const ecc = rsRemainder(data, rsDivisor(ECC_CODEWORDS));
  const bits: number[] = [];
  for (const byte of [...data, ...ecc]) pushBits(bits, byte, 8);
  let best: boolean[][] | null = null;
  let bestScore = Number.POSITIVE_INFINITY;
  const masks = forcedMask === undefined ? [0, 1, 2, 3, 4, 5, 6, 7] : [forcedMask];
  for (const mask of masks) {
    const state = createMatrix();
    drawFunctions(state);
    placeData(state, bits);
    applyMask(state, mask);
    drawFormat(state, mask);
    const score = penalty(state.modules);
    if (score < bestScore) {
      bestScore = score;
      best = state.modules.map((row) => row.slice());
    }
  }
  return best;
}

function QrCode({
  className,
  value,
  label = "QR code",
}: {
  className?: string;
  value: string;
  label?: string;
}) {
  const modules = React.useMemo(() => encodeQrMatrix(value), [value]);
  if (!modules) {
    return (
      <p data-slot="qr-code" className={cn("m-0 text-gray-11", className)}>
        This code holds {MAX_BYTES} bytes.
      </p>
    );
  }
  const quiet = 4;
  return (
    <svg
      data-slot="qr-code"
      role="img"
      aria-label={label}
      viewBox={`${-quiet} ${-quiet} ${SIZE + quiet * 2} ${SIZE + quiet * 2}`}
      className={cn("size-16", className)}
    >
      <rect x={-quiet} y={-quiet} width={SIZE + quiet * 2} height={SIZE + quiet * 2} className="fill-gray-1" />
      {modules.flatMap((row, y) =>
        row.map((on, x) =>
          on ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" className="fill-gray-12" /> : null,
        ),
      )}
    </svg>
  );
}

export { QrCode, encodeQrMatrix };
