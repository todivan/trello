import { Button, Container } from "./MenuBar.styled";


const MenuBar = () => {
    return (
        <Container>
            <Button primary >Menu action 1</Button>
            <Button>Menu action 2</Button>
        </Container>
    );
}

export default MenuBar;