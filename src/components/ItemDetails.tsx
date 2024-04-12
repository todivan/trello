import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import { TList } from '../types/CommonTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { listSchema } from '../Validations/ListValidation';
import { useLists } from '../context/ListsContext';

export interface TItemDetailsProps {
    name: string
    description: string
    handleClose: () => void
    isOpen: boolean
    list: TList
}

const ItemDetails: React.FC<TItemDetailsProps> = ({ isOpen, handleClose, name, description, list }) => {
    const [isEdit, setIsEdit] = useState(false);
    const { setCollectionOfLists } = useLists();

    const [formValues] = useState<TList>(list);

    const form = useForm<TList>({
        defaultValues: formValues,
        resolver: yupResolver(listSchema)
    });

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const onSubmit = (data: TList) => {
        setCollectionOfLists(prevObjects =>
            prevObjects.map(obj =>
                obj.id === list.id ? { ...obj, name: data.name, description: data.description } : obj
            )
        );
        handleClose();
    };

    const doClose = () => {
        handleClose();
        setIsEdit(false);
    };

    return (
        <div data-testid='ItemDetailsEdit'>
            <Dialog
                sx={{ minWidth: 500, maxHeight: 600, margin: 'auto' }}
                open={isOpen}
                onClose={doClose}
            >
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <DialogTitle sx={{ color: 'white', backgroundColor: 'black' }}>
                        Edit Details
                    </DialogTitle>

                    <DialogContent sx={{ color: 'white', backgroundColor: 'black' }}>
                        <>
                            {isEdit ? <>
                                <div style={{ width: 350 }} className='form-control'>
                                    <label htmlFor='name'>Name</label>
                                    <TextField
                                        type='text'
                                        id='name'
                                        {...register('name')}
                                        InputProps={{
                                            style: { color: 'white' }
                                        }}
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        margin="normal"
                                    />
                                    <p style={{ color: 'red' }}>{errors.name?.message}</p>
                                </div>
                                <div style={{ width: 350 }} className='form-control'>
                                    <label htmlFor='description'>Description</label>
                                    <TextField
                                        type='descriptiontext'
                                        id='description'
                                        {...register('description')}
                                        InputProps={{
                                            style: { color: 'white' }
                                        }}
                                        name="description"
                                        label="Description"
                                        fullWidth
                                        margin="normal"
                                    />
                                    <p style={{ color: 'red' }}>{errors.description?.message}</p>
                                </div>
                            </>
                                : <div>
                                    <p>
                                        <b>sss: </b>
                                        {description}
                                    </p>
                                </div>}
                        </>
                    </DialogContent>
                    <DialogActions sx={{ color: 'white', backgroundColor: 'black' }}>
                        { isEdit
                            ? <Button type="submit" color="primary">OK</Button>
                            : <IconButton
                                color="primary"
                                aria-label="edit"
                                onClick={() => { setIsEdit(true); }}
                            >
                                <EditIcon />
                            </IconButton>}
                        <Button color="primary" onClick={doClose}>Close</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default ItemDetails;
