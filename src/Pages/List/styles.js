import styled from "styled-components";

export const Container = styled.div`
`;
export const Content = styled.div`
`;
export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .tag-filter{
        font-size: 18px;
        font-weight: 500;
        background-color: transparent;
        color:${props => props.theme.colors.white};
        margin: 0 10px;

        transition: opacity .7s;

        opacity: .3;
        &:hover{
            opacity: .7;
        }
        
        
        
    }
    .tag-filter-recurrents:after{
            content: '';
            display: block;
            width: 70%;
            margin: 0 auto;
            border-bottom: 8px solid ${props => props.theme.colors.success};
        }
        .tag-filter-eventual:after{
            content: '';
            display: block;
            width: 70%;
            margin: 0 auto;
            border-bottom: 8px solid ${props => props.theme.colors.warning};
        }
        .tag-active{
            opacity: 1;
        }
`;
