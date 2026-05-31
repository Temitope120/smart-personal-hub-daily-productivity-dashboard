export type ModalProps = {
  open: boolean;
  title: string;
  label: string;
  value: string;
  error: string;
  buttonText: string;
  onClose: () => void;
  onChange: (value: string) => void;
  onSubmit: () => void;
};