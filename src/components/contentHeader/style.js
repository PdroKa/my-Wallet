import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const TitleContainer = styled.div`
    >h2{
        color: ${props => props.theme.colors.white};

            &::after{
                content: "";
                display: block;
                width: 2.5rem;
                border: solid 5px ${props=>props.lineColor} ;
            }
        }
`;

export const Controllers = styled.div`
    display: flex;
`;