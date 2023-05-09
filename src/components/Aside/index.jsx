import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from "react-icons/md";

import logoImg from '../../assets/Logo.svg'

import {
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItenLink
} from './style';

const Aside=()=> {

    return (
        <Container>
            <Header>
                <LogoImg src={logoImg} alt='Logo Dolar' />
                <Title>Minha carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItenLink href='/dashboard'>
                    <MdDashboard />
                    Dashboard
                </MenuItenLink>

                <MenuItenLink href='/list/entradas'>
                    <MdArrowUpward />
                    Entradas
                </MenuItenLink>

                <MenuItenLink href='/list/saidas'>
                    <MdArrowDownward />
                    Saidas
                </MenuItenLink>

                <MenuItenLink href='#'>
                    <MdExitToApp />
                    Sair
                </MenuItenLink>

            </MenuContainer>
        </Container>
    );
}
export default Aside;