
import './App.css';
import { ThemeProvider } from 'styled-components';
import { ListProvider } from './context/ListsContext';
import theme from './theme/Theme';
import SearchAppBar from './components/MenuBar/AppBar';
import MainContent from './components/Content/MainContent';

const rootStyles = {
  backgroundColor: '#555555', 
  minHeight: '100vh', 
  padding: '5px', 
};

function App() {
  return (
    <div className="App" style={rootStyles}>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        
        <ListProvider>
          <MainContent />
        </ListProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
