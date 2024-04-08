import { render, screen } from '@testing-library/react';
import SearchAppBar from '../../../components/MenuBar/AppBar';
import React from 'react';

describe('AppBar tests', () => {
    test('app bar text', () => {
        render(<SearchAppBar />);
        const elementTest = 'Trello (cover by Ivan)';
        const element = screen.getByText(elementTest);
        expect(element).toBeInTheDocument();
    });
});
