
import './App.css';
import styled from 'styled-components';
import MenuBar from './components/MenuBar/MenuBar';
import Board from './components/Board/Board';
import { ListProvider } from './context/ListsContext';

const rootStyles = {
  backgroundColor: '#555555', 
  minHeight: '100vh', 
  padding: '20px', 
};

const Header = styled.div`
  margin: 10px;
  font-family: Avenir;
  color: #FFFFFF;
  background-color: green;
  padding: 5px
`;

function App() {
  return (
    <div className="App" style={rootStyles}>
      <Header>
        <div>
          Trello (cover by Ivan)
        </div>
      </Header>
      
        <MenuBar />
      
      <ListProvider>
        <Board />
      </ListProvider>
    </div>
  );
}

export default App;
