import React, {useEffect} from 'react';
import ReactTooltip from 'react-tooltip';

const CurrencyItem = (props) => {
    
    useEffect(() => {
        ReactTooltip.rebuild();
    });

    return (        
        <div className='currency' data-tip={props.currency.Nominal + ' ' + props.currency.Name}>
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















