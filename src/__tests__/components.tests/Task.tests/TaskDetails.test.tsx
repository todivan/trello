import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TaskDetails from '../../../components/Task/TaskDetails';
import { TaskProvider } from '../../../context/TaskContext';
import MockListContext from '../../../__mocks__/MockListContext';

const mockedHandleClose = jest.fn()
const mockedsetModeHandle = jest.fn()

const MockTaskDetails = ({ isOpenParam }: { isOpenParam: boolean }) => {
    return (
        <MockListContext>
            <TaskProvider>
                <TaskDetails
                    isOpen={isOpenParam}
                    handleClose={mockedHandleClose}
                    name='testName'
                    description='testDescription'
                    listId={1}
                    taskId={2}
                    setMode={mockedsetModeHandle} />
            </TaskProvider>
        </MockListContext>
    );
};

describe('TaskDetails tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('TaskDetails view', () => {
        const result = render(<MockTaskDetails isOpenParam={false} />);
        const element = result.getByTestId('TaskDetailsView');
        expect(element).toBeInTheDocument();
    });

    test('TaskDetails edit', async () => {
        const result = render(<MockTaskDetails isOpenParam={true} />);

        const buttonEdit = await result.findByLabelText('edit');

        fireEvent.click(buttonEdit)

        const element = result.getByTestId('TaskDetailsEdit');
        expect(element).toBeInTheDocument();
    });

    test('TaskDetails close', () => {
        const result = render(<MockTaskDetails isOpenParam={true} />);

        const buttonClose = result.getByText('Close');

        fireEvent.click(buttonClose)

        //expect(result.getAllByTestId('TaskDetailsEdit')).toHaveLength(0);
    });
});
