import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";

type props = {
    onAddMilestone: (name: string) => void;
}

const MilestoneButton = ({ onAddMilestone }: props) => {
    const [open, setOpen] = useState(false);
    const [milestoneName, setMilestoneName] = useState("");
    const [error, setError] = useState("");

    const handleCreate = () => {
        const trimmed = milestoneName.trim();
        if (!trimmed) {
            setError("Milestone name cannot be empty");
            return;
        }

        if (trimmed.length < 3) {
            setError("Milestone name must be at least 3 characters");
            return;
        }

        setError("");

        onAddMilestone(trimmed);
        setMilestoneName("");

        // to fix modal aria-hidden issue, while focus is still on a button. when setopen(false), aria-hidden true is set on the root and move focus back on the last focused element, so if the modal closes, but the last clicked button is in the modal, this issue will occur. 
        // (document.activeElement as HTMLElement)?.blur();

        setOpen(false);
        
    };


    const handleClose = () => {
        // (document.activeElement as HTMLElement)?.blur();
        setOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className='bg-[#F5F5F5] text-[#1B6747] flex gap-px xl:gap-2 border-none rounded-full xl:rounded-2xl p-2 xl:py-3 lg:px-4 text-sm xl:text-base cursor-pointer font-bold! shadow-sm hover:bg-[#1B6747] hover:text-white transition-all ease-in-out' >
                < AiOutlinePlus size={20} /> Create Milestone
            </button>

            <Dialog open={open} onClose={handleClose}  disableRestoreFocus>
                <DialogTitle>New Milestone</DialogTitle>

                <DialogContent>
                    <TextField
                        fullWidth
                        value={milestoneName}
                        onChange={(e) => {
                            setMilestoneName(e.target.value)
                            if (error) setError("");
                        }}
                        label="Milestone Name"
                        error={!!error}
                        helperText={error}

                    />
                </DialogContent>

                <DialogActions>
                    <button
                        onClick={handleClose}
                        className='bg-gray-100 text-dark flex gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
                        Cancel
                    </button>
                    <button
                        onClick={handleCreate}
                        className='bg-[#F5F5F5] text-[#1B6747] flex items-center gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
                        Create
                    </button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MilestoneButton
