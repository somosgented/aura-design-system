"use client";
/**
 * @description One question at a time: progress, autofocus, skip, and a sticky footer.
 */
import * as React from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/class-names";

type QuestionnaireLabels = {
  back: string;
  skip: string;
  next: string;
  submit: string;
  /** Supports `{current}` and `{total}`. */
  progress: string;
};

const defaultLabels: QuestionnaireLabels = {
  back: "Back",
  skip: "Skip",
  next: "Continue",
  submit: "Finish",
  progress: "Question {current} of {total}",
};

function progressLabel(
  template: string,
  current: number,
  total: number,
) {
  return template
    .replace(/\{current\}/g, String(current))
    .replace(/\{total\}/g, String(total));
}

const focusableField =
  'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled])';

function SingleQuestionShell({
  title,
  description,
  step = 1,
  total = 1,
  children,
  className,
  labels,
  onBack,
  onSkip,
  onContinue,
  skippable = false,
  isLast = false,
}: {
  title: string;
  description?: string;
  step?: number;
  total?: number;
  children?: React.ReactNode;
  className?: string;
  labels?: Partial<QuestionnaireLabels>;
  onBack?: () => void;
  onSkip?: () => void;
  onContinue?: () => void;
  skippable?: boolean;
  isLast?: boolean;
}) {
  const titleId = React.useId();
  const bodyRef = React.useRef<HTMLDivElement>(null);
  const copy = { ...defaultLabels, ...labels };
  const current = Math.min(Math.max(step, 1), Math.max(total, 1));
  const label = progressLabel(copy.progress, current, total);
  const showSkip = skippable && !isLast;

  React.useEffect(() => {
    const field = bodyRef.current?.querySelector<HTMLElement>(focusableField);
    field?.focus();
  }, [current, title]);

  return (
    <section
      aria-labelledby={titleId}
      data-slot="single-question"
      className={cn("flex min-h-0 flex-col gap-1", className)}
    >
      <div
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={label}
        className="h-0.5 w-full overflow-hidden rounded-full bg-gray-4"
      >
        <div
          className="h-full bg-accent-9 motion-safe:transition-[width] motion-safe:duration-200 motion-safe:ease"
          style={{ width: `${(current / Math.max(total, 1)) * 100}%` }}
        />
      </div>
      <p className="text-sm text-gray-11">{label}</p>
      <h2 id={titleId}>{title}</h2>
      {description ? <p className="text-gray-11">{description}</p> : null}
      <div ref={bodyRef} className="grid flex-1 gap-1">
        {children}
      </div>
      <footer className="sticky bottom-0 z-10 flex items-center gap-1 bg-gray-1 py-1">
        {current > 1 ? (
          <Button type="button" variant="pill" onClick={onBack}>
            {copy.back}
          </Button>
        ) : null}
        <div className="ms-auto flex items-center gap-1">
          {showSkip ? (
            <Button type="button" variant="pill" onClick={onSkip}>
              {copy.skip}
            </Button>
          ) : null}
          <Button
            type={isLast ? "submit" : "button"}
            onClick={isLast ? undefined : onContinue}
          >
            {isLast ? copy.submit : copy.next}
          </Button>
        </div>
      </footer>
    </section>
  );
}

type QuestionnaireQuestion = {
  value: string;
  title: string;
  description?: string;
  content?: React.ReactNode;
  skippable?: boolean;
};

function Questionnaire({
  questions,
  className,
  labels,
  onSubmit,
}: {
  questions: QuestionnaireQuestion[];
  className?: string;
  labels?: Partial<QuestionnaireLabels>;
  onSubmit?: () => void;
}) {
  const [index, setIndex] = React.useState(0);
  const question = questions[index];
  const isLast = index >= questions.length - 1;

  if (!question) return null;

  return (
    <form
      className={cn("grid w-full gap-1", className)}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
    >
      <SingleQuestionShell
        title={question.title}
        description={question.description}
        step={index + 1}
        total={questions.length}
        labels={labels}
        skippable={question.skippable}
        isLast={isLast}
        onBack={() => setIndex((current) => Math.max(0, current - 1))}
        onSkip={() =>
          setIndex((current) => Math.min(questions.length - 1, current + 1))
        }
        onContinue={() =>
          setIndex((current) => Math.min(questions.length - 1, current + 1))
        }
      >
        {question.content}
      </SingleQuestionShell>
    </form>
  );
}

export { Questionnaire, SingleQuestionShell };
export type { QuestionnaireLabels, QuestionnaireQuestion };
