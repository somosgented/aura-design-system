import { Attachment } from "../registry/default/components/ui/Attachment";

export const Default = () => {
  return (
    <div className="grid w-full gap-1">
      <Attachment name="care-plan.pdf" size={248120} status="idle" />
      <Attachment
        name="labs.png"
        size={1048576}
        status="uploading"
        progress={42}
      />
      <Attachment name="note.txt" size={2048} status="success" />
      <Attachment
        name="scan.dcm"
        size={4096}
        status="error"
        error="The file is too large."
      />
    </div>
  );
};
