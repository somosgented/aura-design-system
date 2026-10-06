import { Snackbar, SnackbarAction } from "../registry/default/components/ui/Snackbar";

export const Default = () => {
  return (
    <Snackbar position="inline" action={<SnackbarAction>Undo</SnackbarAction>}>
      Message archived
    </Snackbar>
  );
};
