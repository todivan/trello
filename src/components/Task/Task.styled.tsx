import styled from "styled-components";

export const Container = styled.div`
    margin: 5px;
    background-color: gray;
    padding: 10px;
    bodred-color: black;
    border-style: solid;
    border-radius: 2px;
    border-radius: 10px;
    max-width: 130px;
    width:130px;
`;

interface Props {
    isVisible: boolean;
  }

export const Description = styled.p<Props>`
    margin: 5px;
    font-size:10px
    display: ${p => p.isVisible ? 'block' : 'none'}
`;
