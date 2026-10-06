"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";
import { Button } from "@/components/ui/Button";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const whole = Math.floor(seconds);
  const minutes = Math.floor(whole / 60);
  const remain = whole % 60;
  return `${minutes}:${remain.toString().padStart(2, "0")}`;
}

function MediaPlayer({
  className,
  src,
  label = "Media player",
}: {
  className?: string;
  src?: string;
  label?: string;
}) {
  const media = React.useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [muted, setMuted] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const toggle = () => {
    const node = media.current;
    if (!node) return;
    if (node.paused) void node.play();
    else node.pause();
  };

  return (
    <div
      role="group"
      aria-label={label}
      data-slot="media-player"
      className={cn("flex w-full max-w-xl flex-col gap-0.5 rounded-sm border border-gray-6 bg-gray-1 p-1", className)}
    >
      <audio
        ref={media}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
        onDurationChange={(event) => setDuration(event.currentTarget.duration)}
        onVolumeChange={(event) => setMuted(event.currentTarget.muted)}
      />
      <div className="flex items-center gap-0.5">
        <Button type="button" size="sm" aria-label={playing ? "Pause" : "Play"} onClick={toggle}>
          {playing ? "Pause" : "Play"}
        </Button>
        <Button
          type="button"
          variant="pill"
          size="sm"
          aria-pressed={muted}
          aria-label={muted ? "Unmute" : "Mute"}
          onClick={() => {
            if (media.current) media.current.muted = !media.current.muted;
          }}
        >
          {muted ? "Unmute" : "Mute"}
        </Button>
        <span className="text-gray-11">
          {formatTime(time)} / {formatTime(duration)}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.1}
        value={Math.min(time, duration || 0)}
        aria-label="Seek"
        onChange={(event) => {
          const next = Number(event.target.value);
          if (media.current) media.current.currentTime = next;
          setTime(next);
        }}
      />
    </div>
  );
}

export { MediaPlayer };
