
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { ListProvider } from './context/ListsContext';
import theme from './theme/Theme';
import SearchAppBar from './components/MenuBar/AppBar';
import Content from './components/Content/Content';

const rootStyles = {
  backgroundColor: '#555555', 
  minHeight: '100vh', 
  padding: '5px', 
};

const Header = styled.div`
  font-family: Avenir;
  color: #FFFFFF;
  background-color: #0000007d;
`;

function App() {
  return (
    <div className="App" style={rootStyles}>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        
        <ListProvider>
          <Content />
        </ListProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
