import * as yup from 'yup';

export const taskSchema = yup.object().shape({
    name: yup.string().max(25, 'Description can have maximal lenght of 25').required('Name is required'),
    description: yup.string().max(100, 'Description can have maximal lenght of 100')
});
