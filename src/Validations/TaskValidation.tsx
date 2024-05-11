import * as yup from 'yup';

export const taskSchema = yup.object().shape({
    // id: yup.number().required('id is required'),
    // position: yup.number().required('position is required'),
    name: yup.string().max(25, 'Description can have maximal lenght of 25').required('Name is required'),
    description: yup.string().max(100, 'Description can have maximal lenght of 100').required('Description is required'),
    listId: yup.number().required('ListId is required')
});
