import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    TextField,
    Checkbox,
    FormControlLabel,
    MenuItem,
    Select,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box // Import Box from Material-UI
} from '@mui/material';

import Image from 'next/image'

interface MarketplaceDialogProps {
    item: {
        name: string;
        description: string;
        imageLink: string;
        type: string;
        isGov: boolean;
        isPaid: boolean;
        rating: number;
    };
    open: boolean;
    onClose: () => void;
}
const MarketplaceDialog = ({ item, open, onClose }: MarketplaceDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit {item.name}</DialogTitle>

            <DialogContent>
                <Image src={item.imageLink} alt={item.name} width='100' height='100' />

                <CardContent>
                    <Box maxWidth="800px"> {/* Set max width to control overflow */}
                        <form>
                            <div className=" w-[700px]grid gap-4">
                                <TextField
                                    label="Name"
                                    defaultValue={item.name}
                                    id="name"
                                    fullWidth
                                    variant="outlined" className='pb-4'
                                />
                                <TextField
                                    label="Description"
                                    defaultValue={item.description}
                                    id="description"
                                    fullWidth
                                    multiline
                                    variant="outlined" className='pb-4'
                                />
                                <TextField
                                    label="Image Link"
                                    defaultValue={item.imageLink}
                                    id="imageLink"
                                    fullWidth
                                    variant="outlined" className='pb-4'
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked id="isGov" />}
                                    label="Government Use"
                                />
                                <FormControlLabel
                                    control={<Checkbox defaultChecked id="isPaid" />}
                                    label="Paid Service"
                                />
                                <TextField
                                    label="Rating"
                                    defaultValue={item.rating}
                                    id="rating"
                                    fullWidth
                                    variant="outlined"
                                    type="number" className='pb-4'
                                />
                                <Select
                                    label="Type"
                                    defaultValue={item.type}
                                    id="type"
                                    fullWidth
                                    variant="outlined"
                                >
                                    <MenuItem value="web">Web</MenuItem>
                                    <MenuItem value="android">Android</MenuItem>
                                    <MenuItem value="iphone">Iphone</MenuItem>
                                </Select>
                            </div>
                        </form>
                    </Box>
                </CardContent>

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="outlined" color="primary">
                    Close
                </Button>
                <Button variant="contained">Save Changes</Button>

            </DialogActions>
        </Dialog>
    );
};

export default MarketplaceDialog;
