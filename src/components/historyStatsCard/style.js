import styled from "styled-components";

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 5px;
    margin: 8px 0;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .6s;
    position: relative;

    &:hover{
        opacity:.7;
        transform:translateX(10px) ;
    }

    >div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 8px;
    }
   
`;

export const Tag = styled.div`
    position: absolute;
    width: 10px;
    height: 60%;
    background-color: ${props => props.color};
    left: 0;
   
`;