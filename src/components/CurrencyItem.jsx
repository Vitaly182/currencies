import React from 'react';

const CurrencyItem = (props) => {

    return (
        <div className='currency'>
            <div className='currency__code'>
                {props.currency.CharCode}
            </div>
            <div className='currency__value'>
                {props.currency.Value}
            </div>
            <div className='currency__previos_day_value'>
                {props.currency.Previous}
            </div>
            <div className='currency__previos_day_value'>
                {Math.round((props.currency.Value-props.currency.Previous)/props.currency.Previous * 100 * Math.pow(10, 2)) / Math.pow(10, 2)}
            </div>
        </div>
    );
};

export default CurrencyItem;















