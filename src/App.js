
import './App.css';
import styled from 'styled-components';

const Header = styled.div`
  margin: 10px;
  font-family: Avenir;
  color: #FFFFFF;
  background-color: green;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <div>
        Trello (cover by Ivan)
        </div>
      </Header>
    </div>
  );
}

export default App;
