import styled from "styled-components"

export const Container = styled.div`
    margin: 5px;
    background-color: green;
    padding: 10px;
    height: 600px;
    float: left;
`;

export const AddListButton = styled.button`
background-color: blue;
font-size: 16px;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
margin: 10px;

&:hover {
background-color: darkblue;
}
`;