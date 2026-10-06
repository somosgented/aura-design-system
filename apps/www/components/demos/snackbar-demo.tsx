import { Snackbar, SnackbarAction } from "@/components/ui/Snackbar";

export const SnackbarDemo = () => {
  return (
    <Snackbar position="inline" action={<SnackbarAction>Undo</SnackbarAction>}>
      Message archived
    </Snackbar>
  );
};