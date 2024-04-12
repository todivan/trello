import React from 'react';
import { render } from '@testing-library/react';
import MockListContext from '../../__mocks__/MockListContext';
import { TaskProvider } from '../../context/TaskContext';
import ItemDetails from '../../components/ItemDetails';
import { TList } from '../../types/CommonTypes';

const mockedHandleClose = jest.fn()

const list: TList = { id: 1, description: 'desc', name: 'name', position: 2 };

const MockTaskDetails = ({ isOpenParam }: { isOpenParam: boolean }) => {
    return (
        <MockListContext>
            <TaskProvider>
                <ItemDetails
                    isOpen={isOpenParam}
                    handleClose={mockedHandleClose}
                    list={list} />
            </TaskProvider>
        </MockListContext>
    );
};

describe('ItemDetails tests', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('ItemDetails view', () => {
        const result = render(<MockTaskDetails isOpenParam={true} />);
        const element = result.getByTestId('ItemListDetails');
        expect(element).toBeInTheDocument();
    });
})
