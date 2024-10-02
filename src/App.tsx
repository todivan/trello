import { ThemeProvider } from 'styled-components';
import { ListProvider } from './context/ListsContext';
import theme from './theme/Theme';
import SearchAppBar from './components/MenuBar/AppBar';
import MainContent from './components/Board/MainContent';
import { type ReactNode } from 'react';
import { GlobalModal } from './components/Modal/GlobalModal';

const rootStyles = {
    backgroundColor: '#333333',
    width: '100vw',
    minHeight: '100vh',
    padding: '5px'
};

function App (): ReactNode {
    return (
        <div className="App" style={rootStyles}>
            <ThemeProvider theme={theme}>
                <SearchAppBar />
                <GlobalModal>
                    <ListProvider>

                        <MainContent />
                    </ListProvider>
                </GlobalModal>
            </ThemeProvider>
        </div>
    );
}

export default App;
