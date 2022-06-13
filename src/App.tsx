import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent/NewComponent";
import {Button} from "./components/Button/Button";
import {NewComponent1} from "./components/NewComponent1/NewComponent1";

export type FilterType = 'Dollars' | 'RUBLS' | 'All'

export type MoneyType = {
    banknots: string
    value: number
    number: string
}

function App() {
    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All');

    let currentMoney = money;

    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS');
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);
    }

    return (
        <div>
            <NewComponent1
                currentMoney={currentMoney}
                onClickFilterHandler={onClickFilterHandler}
            />
        </div>
    )
}

export default App;
