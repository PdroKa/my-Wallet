import React, { useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContentHeader from '../../components/contentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryStatsCard from '../../components/historyStatsCard';

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'


import { useLocation, useMatch } from 'react-router-dom';

import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/listMonths';
import formatCurrency from '../../utils/formateCurrency';


import { Container, Content, Filters } from './styles';

function ListPage() {
    const [data, setData] = useState([])
    const [monthSelected, setMonthSelected] = useState(String(new Date().getMonth() + 1))
    const [yearSelected, setYearSelected] = useState(String(new Date().getFullYear()))
    const [selectedFrequency, setSelectedFrequency] = useState(["recorrente","eventual"])

    const location = useLocation();
    const type = location.pathname


    const title = useMemo(() => {
        return type === "/list/entradas" ? "Entradas" : "Saidas"
    }, [type])

    const tagColor = useMemo(() => {
        return type === "/list/entradas" ? "#4E41F0" : "#E44C4E"
    }, [type])



    const listData = useMemo(() => {
        return type === "/list/entradas" ? gains : expenses
    }, [type])

    const years = useMemo(() => {
        let uniqueYear = [];

        listData.forEach((item) => {
            let date = new Date(item.date);
            let year = date.getFullYear();

            if (!uniqueYear.includes(year)) {
                uniqueYear.push(year);
            }
        });
        return uniqueYear.map((year) => {
            return { value: year, label: year }
        })

    }, [listData])

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return { value: index + 1, label: month }
        })
    }, [])

    const handleFrequencyClick = (frequency) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

        if (alreadySelected >= 0) {
            setSelectedFrequency(selectedFrequency.filter(item => item !== frequency))
        } else setSelectedFrequency((prev) => [...prev, frequency])
    }
    useEffect(() => {
        const filteredDate = listData.filter(item => {
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
        });

        const formattedData = filteredDate.map((item) => {
            return {
                "id": uuidv4(),
                "description": item.description,
                "amount": formatCurrency(Number(item.amount)),
                "type": item.type,
                "frequency": item.frequency,
                "date": formatDate(item.date),
                "tagColor": item.frequency === "recorrente" ? '#4E41F0' : '#E44C4E',

            }
        })
        setData(formattedData)

    }, [listData, monthSelected, yearSelected, data.length, selectedFrequency]);
    return (
        <Container>
            <ContentHeader title={title} lineColor={tagColor}>
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>
            <Filters>
                <button type='button'
                    className={`tag-filter tag-filter-recurrents 
                    ${selectedFrequency.includes('recorrente') && 'tag-active'}`}
                    onClick={() => handleFrequencyClick('recorrente')}>
                    Recurrente
                </button>
                <button type='button'
                    className={`tag-filter tag-filter-eventual 
                    ${selectedFrequency.includes('eventual') && 'tag-active'}`}
                    onClick={() => handleFrequencyClick('eventual')}>
                    Eventual
                </button>
            </Filters>
            <Content>
                {
                    data.map(task =>
                        <HistoryStatsCard
                            key={task.id}

                            tagColor={task.tagColor}
                            title={task.description}
                            subtitle={task.date}
                            amount={task.amount}
                        />
                    )
                }
            </Content>
        </Container >
    );
}
export default ListPage;