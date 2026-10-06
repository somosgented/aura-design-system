"use client";
/**
 * @description A file row with its upload state. Pair it with FileUpload.
 */
import {
  CheckIcon,
  Cross2Icon,
  ExclamationTriangleIcon,
  FileIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import { cn } from "@/utils/class-names";

type AttachmentStatus = "idle" | "uploading" | "success" | "error";

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B";
  const sizes = ["B", "KB", "MB", "GB"];
  const index = Math.min(
    sizes.length - 1,
    Math.floor(Math.log(bytes) / Math.log(1024)),
  );
  const value = bytes / 1024 ** index;
  return `${value.toFixed(index ? 1 : 0)} ${sizes[index]}`;
}

function Attachment({
  name,
  size,
  status = "idle",
  progress,
  error,
  onRemove,
  className,
}: {
  name: string;
  size?: number;
  status?: AttachmentStatus;
  progress?: number;
  error?: string;
  onRemove?: () => void;
  className?: string;
}) {
  const statusText =
    status === "error"
      ? error || "Upload failed"
      : status === "uploading"
        ? `Uploading${typeof progress === "number" ? `, ${progress}%` : ""}`
        : status === "success"
          ? "Uploaded"
          : "Ready";

  return (
    <div
      data-slot="attachment"
      className={cn(
        "grid gap-0.5 rounded-md border border-gray-6 bg-gray-2 p-1",
        className,
      )}
    >
      <div className="flex items-center gap-1">
        <span className="inline-flex size-2.5 items-center justify-center rounded-sm bg-gray-3 text-gray-12">
          {status === "uploading" ? (
            <Spinner label="Uploading" />
          ) : status === "success" ? (
            <CheckIcon className="icon" aria-hidden />
          ) : status === "error" ? (
            <ExclamationTriangleIcon className="icon" aria-hidden />
          ) : (
            <FileIcon className="icon" aria-hidden />
          )}
        </span>
        <div className="grid min-w-0 flex-1 gap-0.5">
          <p className="truncate font-medium text-gray-12">{name}</p>
          <p className="text-sm text-gray-11">
            {typeof size === "number" ? `${formatBytes(size)} · ` : null}
            {statusText}
          </p>
        </div>
        {onRemove ? (
          <Button
            type="button"
            variant="pill"
            size="icon"
            aria-label={`Remove ${name}`}
            onClick={onRemove}
          >
            <Cross2Icon className="icon" />
          </Button>
        ) : null}
      </div>
      {status === "uploading" && typeof progress === "number" ? (
        <div
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Upload progress for ${name}`}
          className="h-0.5 overflow-hidden rounded-sm bg-gray-4"
        >
          <div
            className="h-full bg-accent-9 motion-reduce:transition-none"
            style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
          />
        </div>
      ) : null}
    </div>
  );
}

export { Attachment };
export type { AttachmentStatus };
