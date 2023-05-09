import { Container } from './style';


function Content({ children }) {

    return (
        <Container>
            {children}
        </Container>
    );
}

export default Content;