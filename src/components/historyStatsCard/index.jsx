import { Container,Tag } from "./style";

const HistoryStatsCard = ({
    tagColor,
    title,
    subtitle,
    amount
}) => {
    
    return (
        <Container>
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

export default HistoryStatsCard;