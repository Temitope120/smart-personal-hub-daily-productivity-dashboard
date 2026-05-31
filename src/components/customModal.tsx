import type { ModalProps } from "../types/modalProps";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const customModal = ({
    open,
    title,
    label,
    value,
    error,
    buttonText,
    onClose,
    onChange,
    onSubmit,

}: ModalProps) => {
    return (

        <Dialog open={open} onClose={onClose} disableRestoreFocus>
            <DialogTitle>{title}</DialogTitle>

            <DialogContent>
                <TextField
                    fullWidth
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    label={label}
                    error={!!error}
                    helperText={error}
                />
            </DialogContent>

            <DialogActions>
                <button onClick={onClose}>
                    Cancel
                </button>

                <button onClick={onSubmit}>
                    {buttonText}
                </button>
            </DialogActions>
        </Dialog>

    )
}

export default customModal


