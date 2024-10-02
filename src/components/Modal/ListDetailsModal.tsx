import React, { useEffect, useState } from 'react';
import { Button } from '@patternfly/react-core';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TList } from '../../types/CommonTypes';
import { listSchema } from '../../Validations/ListValidation';
import { useLists } from '../../context/ListsContext';
import { useGlobalModalActionsContext } from './GlobalModal';

interface ListDetailsModalProps {
    list: TList
}

export const ListDetailsModal: React.FC<ListDetailsModalProps> = ({ list }) => {
    const { hideModal } = useGlobalModalActionsContext();
    const { setCollectionOfLists } = useLists();

    const [isEdit, setIsEdit] = useState(false);

    const [formValues, setFormValues] = useState<TList>(list);

    useEffect(() => {
        setFormValues(list);
    }, [list]);

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
        hideModal();
    };

    const doClose = () => {
        hideModal();
        setIsEdit(false);
    };

    return (
        <Dialog
            sx={{ minWidth: 500, maxHeight: 600, margin: 'auto' }}
            open={list !== null}
            onClose={doClose}
        >
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
                                <p style={{ color: 'red' }}>
                                    {errors.name?.message}
                                </p>
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
                                <p style={{ color: 'red' }}>
                                    {errors.description?.message}
                                </p>
                            </div>
                        </>
                            : <div>
                                <p>
                                    <b>Name: </b>
                                    {list.name}
                                </p>
                                <p>
                                    <b>Description: </b>
                                    {list.description}
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
    );
};
