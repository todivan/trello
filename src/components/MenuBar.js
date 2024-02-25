import styled from "styled-components";

const Container = styled.div`
  margin: 5px;
  background-color: green;
  padding: 10px;
`;

const Button = styled.button`
    background-color: ${props => props.primary ? 'blue' : 'gray'};
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
    background-color: ${props => props.primary ? 'darkblue' : 'darkgray'};
    }
`;

const MenuBar = () => {
    return (
        <Container>
            <Button primary >Menu action 1</Button>
            <Button>Menu action 2</Button>
        </Container>
    );
}

export default MenuBar;