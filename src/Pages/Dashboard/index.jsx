import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';


const DashboardPage = () => {
    const options = [
        {
            value: '2018',
            label: '2018'
        },
        {
            value: '2019',
            label: '2019'
        },
        {
            value: '2020',
            label: '2020'
        },
        {
            value: '2021',
            label: '2021'
        },
    ]

    return (
        <Container>
            <ContentHeader title={"Dashboard"} lineColor={"#F7931B"}>
                <SelectInput options={options} onChange={()=>{}}/>
            </ContentHeader>
        </Container >
    );
}
export default DashboardPage;