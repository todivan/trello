import styled from "styled-components";

export const Container = styled.div`
  margin: 5px;
  background-color: green;
  padding: 10px;
`;

export const Button = styled.button<{ primary?: boolean }>`
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