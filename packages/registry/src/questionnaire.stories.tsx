import { Input } from "../registry/default/components/ui/Input";
import {
  Questionnaire,
  Question,
} from "../registry/default/components/ui/Questionnaire";

export const Default = () => {
  return (
    <Questionnaire
      questions={[
        {
          value: "name",
          title: "What should we call you?",
          description: "This name shows on the care plan.",
          content: <Input aria-label="Name" placeholder="Ada Lovelace" />,
        },
        {
          value: "city",
          title: "Which city are you in?",
          content: <Input aria-label="City" placeholder="Lisbon" />,
        },
        {
          value: "confirm",
          title: "Ready to save?",
          description: "You can go back and change an answer.",
        },
      ]}
    />
  );
};

export const Shell = () => {
  return (
    <Question
      title="How are you sleeping?"
      description="Pick the answer that fits this week."
      step={1}
      total={3}
    >
      <Input aria-label="Sleep" placeholder="About 7 hours" />
    </Question>
  );
};
