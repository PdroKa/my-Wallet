import styled from "styled-components";


export const Container = styled.div`
    grid-area:AS;
    background-color: ${(props) => props.theme.colors.secondary};
    color:${(props) => props.theme.colors.white};
    padding: 0 1.25rem;
    border-right: 1 solid ${(props) => props.theme.colors.gray}
`;

export const Header = styled.header`
    display:flex;
    align-items: center;
    height: 70px;
`;

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
    `;
export const Title = styled.h3`
margin-left: 8px;
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const MenuItenLink = styled.a`
    color: ${(props) => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    align-items: center;
  
    transition: opacity .5s;

    &:hover{
        opacity: .7;
    }
    
    >svg{
        font-size: 1.25rem;
        margin-right: .4rem;

    }
`;