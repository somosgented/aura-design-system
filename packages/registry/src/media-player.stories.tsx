import { useEffect, useState } from "react";
import { MediaPlayer } from "../registry/default/components/ui/MediaPlayer";

export const Default = () => {
  const [src, setSrc] = useState<string>();
  useEffect(() => {
    const sampleRate = 8000;
    const samples = 800;
    const buffer = new ArrayBuffer(44 + samples * 2);
    const view = new DataView(buffer);
    const write = (offset: number, text: string) => {
      for (let index = 0; index < text.length; index += 1) {
        view.setUint8(offset + index, text.charCodeAt(index));
      }
    };
    write(0, "RIFF");
    view.setUint32(4, 36 + samples * 2, true);
    write(8, "WAVE");
    write(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    write(36, "data");
    view.setUint32(40, samples * 2, true);
    for (let index = 0; index < samples; index += 1) {
      const sample = Math.sin((2 * Math.PI * 440 * index) / sampleRate) * 0.2;
      view.setInt16(44 + index * 2, Math.round(sample * 0x7fff), true);
    }
    const url = URL.createObjectURL(new Blob([buffer], { type: "audio/wav" }));
    setSrc(url);
    return () => URL.revokeObjectURL(url);
  }, []);
  return <MediaPlayer src={src} />;
};
