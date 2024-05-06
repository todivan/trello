import { ThemeProvider } from 'styled-components';
import { ListProvider } from './context/ListsContext';
import theme from './theme/Theme';
import SearchAppBar from './components/MenuBar/AppBar';
import MainContent from './components/Board/MainContent';
import { type ReactNode } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const rootStyles = {
    backgroundColor: '#333333',
    width: '100vw',
    minHeight: '100vh',
    padding: '5px'
};

const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
});

function App (): ReactNode {
    return (
        <div className="App" style={rootStyles}>
            <ThemeProvider theme={theme}>
                <ApolloProvider client={client}>
                    <SearchAppBar />
                    <ListProvider>
                        <MainContent />
                    </ListProvider>
                </ApolloProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
