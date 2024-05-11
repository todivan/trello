import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TaskDetailsEdit from '../../../components/Task/TaskDetailsEdit';
import { ListProvider } from '../../../context/ListsContext';
import { TaskProvider } from '../../../context/TaskContext';

const mockedHandleClose = jest.fn()
const mockedsetModeHandle = jest.fn()

const MockTaskDetailsEdit = ({ isOpenParam }: { isOpenParam: boolean }) => {
    return (
        <ListProvider>
            <TaskProvider>
                <TaskDetailsEdit
                    isOpen={isOpenParam}
                    handleClose={mockedHandleClose}
                    name='testName'
                    description='testDescription'
                    listId={1}
                    taskId={2}
                    setMode={mockedsetModeHandle} />
            </TaskProvider>
        </ListProvider>
    );
};

describe('TaskDetailsEdit tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('TaskDetailsEdit exist', () => {
        const result = render(<MockTaskDetailsEdit isOpenParam={true} />);
        const element = result.getByTestId('TaskDetailsEdit');
        expect(element).toBeInTheDocument();
    });

    test('TaskDetailsEdit submit', async () => {
        const result = render(<MockTaskDetailsEdit isOpenParam={true} />);

        const button = await result.findByText('OK');
        fireEvent.click(button);

        const element = result.getByTestId('TaskDetailsEdit');
        expect(element).toBeInTheDocument();
    });
});
