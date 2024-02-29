import styled from "styled-components";

export const Container = styled.div`
    margin: 5px;
    background-color: darkBlue;
    padding: 10px 5px;
    bodred-color: black;
    border-style: solid;
    border-radius: 2px;
    border-radius: 10px;
    max-width: 160px;
    width:160px;
    display: inline-block;
    vertical-align: top;
`;

export const ListName = styled.div`
    margin: 5px 5px 0px 5px;
    background-color: green;
    padding: 5px 5px;
    bodred-color: black;
    border-style: solid;
    border-radius: 2px;
    border-radius: 10px;
    max-width: 130px;
    width:130px;
    display: inline-block;
`;

export const ListDescription = styled.div`
    margin: 0px 5px 2px 5px;
    background-color: lightgreen;
    padding: 5px 5px;
    bodred-color: black;
    border-style: solid;
    border-radius: 2px;
    border-radius: 10px;
    max-width: 130px;
    width:130px;
    font-size: 12px;
    display: inline-block;
`;

export const AddTaskButton = styled.button`
background-color: #008CBA;
color: white;
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