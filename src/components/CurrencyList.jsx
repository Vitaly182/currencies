import React from 'react';
import CurrencyItem from './CurrencyItem';
import ReactTooltip from 'react-tooltip';


const CurrencyList = ({ currencies, title }) => {

    if (!currencies.length) {
        return (
            <h1 style={{ textAlign: 'center', margin: '15px' }}>
                Валюты не найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '15px' }}>
                {title}
            </h1>

            <div className='currency'>
                <div className='currency__code'>
                    Код валюты
                </div>
                <div className='currency__value'>
                    Стоимость сегодня
                </div>
                <div className='currency__previos_day_value'>
                    Стоимость вчера
                </div>
                <div className='currency__previos_day_value'>
                    % изменение
                </div>
            </div>

            {currencies.map(currency =>
                <CurrencyItem key={currency.CharCode} currency={currency} />
            )}
            <ReactTooltip place="bottom"/>
        </div>
    );
};

export default CurrencyList;