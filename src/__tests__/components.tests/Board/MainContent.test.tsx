import { render } from '@testing-library/react';
import MainContent from '../../../components/Board/MainContent';
import { ListProvider } from '../../../context/ListsContext';

const MockMainContent: React.FC = () => {
    return (
        <ListProvider>
            <MainContent />
        </ListProvider>
    );
};

describe('MainContent tests', () => {
    test('LeftMenu exist', () => {
        const { getByTestId } = render(<MockMainContent />);
        const element = getByTestId('LeftMenu');
        expect(element).toBeInTheDocument();
    });
    test('Board exist', () => {
        const { getByTestId } = render(<MockMainContent />);
        const element = getByTestId('Board');
        expect(element).toBeInTheDocument();
    });
});
