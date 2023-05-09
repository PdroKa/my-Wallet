import {
    Container,
    TitleContainer,
    Controllers
} from './style';


const ContentHeader= ({title,lineColor,children})=> {

    return (
        <Container>
            <TitleContainer lineColor={lineColor}>
                <h2>{title}</h2>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}
export default ContentHeader;