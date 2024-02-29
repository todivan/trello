import { Container, Description } from "./Task.styled";

const Task = (props) => {
    return(
        <Container>
            <h3>{props.task.name}</h3>
            <Description>{props.task.description}</Description>
        </Container>
    );
}

export default Task;