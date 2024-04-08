import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import ListMoveNavigation from '../../../components/TaskList/ListMoveNavigation';
import MockListContext from '../../../__mocks__/MockListContext';
import * as ChangePositionModule from '../../../Utils/ChangePosition';

const mockChangePosition = jest.spyOn(ChangePositionModule, 'changePosition');

describe('ListMoveNavigation tests', () => {
    test('ListMoveNavigation text', () => {
        const source = render(<MockListContext>
            <ListMoveNavigation listId={11} />
        </MockListContext>);
        const element = source.getByTestId('ListMoveNavigation');
        expect(element).toBeInTheDocument();
    });
    test('ListMoveNavigation move left', () => {
        const source = render(<MockListContext>
            <ListMoveNavigation listId={11} />
        </MockListContext>);
        const element = source.getByTestId('leftIcon');
        fireEvent.click(element);
        expect(mockChangePosition).toHaveBeenCalled();
    });
    test('ListMoveNavigation move right', () => {
        const source = render(<MockListContext>
            <ListMoveNavigation listId={11} />
        </MockListContext>);
        const element = source.getByTestId('rightIcon');
        fireEvent.click(element);
        expect(mockChangePosition).toHaveBeenCalled();
    });
});
