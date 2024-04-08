import { fireEvent, render } from '@testing-library/react';
import Task, { type TTaskProps } from '../../../components/Task/Task';
import type { TTask } from '../../../types/CommonTypes';
import React from 'react';
import * as ChangePositionModule from '../../../Utils/ChangePosition';
import { ListProvider } from '../../../context/ListsContext';
import { TaskProvider } from '../../../context/TaskContext';

const taskValue: TTask = { id: 1, name: 'testTask', description: 'taskDescription', listId: 2, position: 3 };
const taskCollectionValue: TTask[] = [];

const mockedSetCollectionOfTasks = jest.fn();
const mockChangePosition = jest.spyOn(ChangePositionModule, 'changePosition');

const MockTask: React.FC<TTaskProps> = ({ task, isFocusOnNew, collectionOfTasks, setCollectionOfTasks }: TTaskProps) => {
    return (
        <ListProvider>
            <TaskProvider>
                <Task
                    key={1}
                    task={task}
                    isFocusOnNew={isFocusOnNew}
                    collectionOfTasks={collectionOfTasks}
                    setCollectionOfTasks={setCollectionOfTasks}
                />
            </TaskProvider>
        </ListProvider>
    );
};

describe('Task tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Edit field exist', () => {
        const result = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={true}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const element = result.container.querySelector('#outlined-multiline-static');
        expect(element).toBeInTheDocument();
    });
    test('View field exist', () => {
        const result = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={false}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const element = result.container.querySelector('#outlined-adornment-weight');
        expect(element).toBeInTheDocument();
    });
    test('Content menu exist but not visible', () => {
        const result = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={false}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const element = result.container.querySelector('#basic-menu');
        expect(element).not.toBeInTheDocument();
    });
    test('Edit change enter', () => {
        const result = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={true}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const editElement = result.container.querySelector('#outlined-multiline-static');

        if (editElement != null) {
            fireEvent.change(editElement, { target: { value: 'yes' } });
            fireEvent.keyDown(editElement, { key: 'Enter', code: 'Enter' });
            const element = result.container.querySelector('#outlined-adornment-weight');
            expect(element).toBeInTheDocument();
        } else {
            fail('editElement not found');
        }
    });
    test('Edit change escape', () => {
        const result = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={true}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const editElement = result.container.querySelector('#outlined-multiline-static');

        if (editElement != null) {
            fireEvent.change(editElement, { target: { value: 'yes' } });
            fireEvent.keyDown(editElement, { key: 'Escape', code: 'Escape' });
            const element = result.container.querySelector('#outlined-adornment-weight');
            expect(element).toBeInTheDocument();
        } else {
            fail('editElement not found');
        }
    });
    // test('Switch to edit', () => {
    //   const source = render(<MockTask key={1} task={taskValue} isFocusOnNew={false} collectionOfTasks={taskCollectionValue} setCollectionOfTasks={mockedSetCollectionOfTasks} />)
    //   const editButton = source.getByTestId('ModeIcon')

    //   fireEvent.click(editButton);
    //   const element = source.container.querySelector('#outlined-multiline-static')
    //   expect(element).toBeInTheDocument()
    // })
    test('Open menu', () => {
        const source = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={false}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const viewElement = source.getByTestId('OutlinedInput');

        fireEvent.click(viewElement);
        const element = source.getByRole('menu');
        expect(element).toBeInTheDocument();
    });
    test('Menu up', () => {
        const source = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={false}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const viewElement = source.getByTestId('OutlinedInput');

        fireEvent.click(viewElement);
        const menuItem = source.getByTestId('ClickUp');
        fireEvent.click(menuItem);
        expect(mockChangePosition).toHaveBeenCalled();
        mockChangePosition.mockRestore();
    });
    test('Menu down', () => {
        const source = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={false}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const viewElement = source.getByTestId('OutlinedInput');

        fireEvent.click(viewElement);
        const menuItem = source.getByTestId('ClickDown');
        fireEvent.click(menuItem);
    // expect(mockChangePosition).toHaveBeenCalled();
    // mockChangePosition.mockRestore();
    });
    test('Menu OpenDetails', () => {
        const source = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={false}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const viewElement = source.getByTestId('OutlinedInput');

        fireEvent.click(viewElement);
        const menuItem = source.getByTestId('OpenDetails');
        fireEvent.click(menuItem);

        const details = source.getByRole('dialog');
        expect(details).toBeInTheDocument();
    });
    test('Menu Delete', () => {
        const source = render(<MockTask
            key={1}
            task={taskValue}
            isFocusOnNew={false}
            collectionOfTasks={taskCollectionValue}
            setCollectionOfTasks={mockedSetCollectionOfTasks}
                              />);
        const viewElement = source.getByTestId('OutlinedInput');

        fireEvent.click(viewElement);
        const menuItem = source.getByTestId('Delete');
        fireEvent.click(menuItem);

        expect(mockedSetCollectionOfTasks).toHaveBeenCalled();
    });
});
