"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/Button";
import { WrapperContainer } from "@/components/ui/Wrapper";

const COPY = {
  eyebrow: "Signal lost",
  srCode: "Error 404",
  title: "You drifted out of orbit",
  description:
    "The page you are looking for got lost in space, or never existed. Let us bring you back to solid ground.",
  home: "Back to home",
};

const STAR_SRC = "/brand/estrella.webp";

function usePointerParallax(ref: React.RefObject<HTMLElement | null>) {
  React.useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    let frame = 0;

    const handlePointerMove = (event: PointerEvent) => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        node.style.setProperty(
          "--nf-px",
          `${(event.clientX / window.innerWidth) * 2 - 1}`,
        );
        node.style.setProperty(
          "--nf-py",
          `${(event.clientY / window.innerHeight) * 2 - 1}`,
        );
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      node.style.removeProperty("--nf-px");
      node.style.removeProperty("--nf-py");
    };
  }, [ref]);
}

function Starfield() {
  return (
    <div className="not-found-sky pointer-events-none absolute inset-0 overflow-hidden">
      <div className="not-found-glow absolute inset-0" />
      <div className="not-found-layer not-found-layer-far absolute inset-0">
        <div className="not-found-stars not-found-stars-far" />
      </div>
      <div className="not-found-layer not-found-layer-mid absolute inset-0">
        <div className="not-found-stars not-found-stars-mid" />
      </div>
      <div className="not-found-layer not-found-layer-near absolute inset-0">
        <div className="not-found-stars not-found-stars-near" />
        <Image
          src={STAR_SRC}
          alt=""
          width={240}
          height={245}
          className="not-found-star absolute top-4 left-2 w-3 opacity-60 md:w-4"
          draggable={false}
        />
        <Image
          src={STAR_SRC}
          alt=""
          width={240}
          height={245}
          className="not-found-star not-found-star-delay absolute right-2 bottom-4 w-2 opacity-40 md:w-3"
          draggable={false}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-gray-1 to-transparent" />
    </div>
  );
}

export default function NotFound() {
  const copy = COPY;
  const sectionRef = React.useRef<HTMLElement>(null);

  usePointerParallax(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="not-found-viewport relative flex items-center overflow-hidden bg-gray-1"
    >
      <Starfield />
      <div className="pad relative w-full">
        <WrapperContainer container="smash" className="px-1">
          <div className="not-found-layer not-found-layer-content">
            <div className="not-found-enter flex flex-col items-center gap-1.5 text-center">
              <p className="not-found-in m-0 text-sm font-black tracking-widest text-accent-11 uppercase">
                {copy.eyebrow}
              </p>
              <p className="not-found-in not-found-code mx-0 my-1.5 flex justify-center text-gray-12">
                <span className="sr-only">{copy.srCode}</span>
                <span className="not-found-orbit" aria-hidden="true">
                  <span className="not-found-orbit-glyph">404</span>
                  <span className="not-found-orbit-ring">
                    <span className="not-found-orbit-spin">
                      <span className="not-found-orbit-anchor">
                        <span className="not-found-satellite" />
                      </span>
                    </span>
                  </span>
                </span>
              </p>
              <h1 className="not-found-in h2 text-balance text-gray-12">
                {copy.title}
              </h1>
              <p className="not-found-in m-0 max-w-40 text-pretty text-gray-11">
                {copy.description}
              </p>
              <div className="not-found-in mt-1 flex flex-wrap items-center justify-center gap-1">
                <Button asChild>
                  <Link href="/" className="items-center gap-0.5">
                    <ArrowLeftIcon className="icon cta-arrow-back" />
                    {copy.home}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </WrapperContainer>
      </div>
    </section>
  );
}
