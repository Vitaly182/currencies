import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Modal from './UI/modal/Modal';

const CurrencyItem = (props) => {

    const [modalActive, setModalActive] = useState(false)

    useEffect(() => {
        ReactTooltip.rebuild();
    });

    return (
        <div onClick={() => !modalActive ? setModalActive(true) : setModalActive(false)} className='currency' data-tip={props.currency.Nominal + ' ' + props.currency.Name}>
            <div className='currency__code'>
                {props.currency.CharCode}
            </div>
            <div className='currency__value'>
                {props.currency.Value}
            </div>
            <div className='currency__previos_day_value'>
                {props.currency.Previous}
            </div>
            <div className='changed'>
                {Math.round((props.currency.Value - props.currency.Previous) / props.currency.Previous * 100 * Math.pow(10, 2)) / Math.pow(10, 2)}
            </div>

                <Modal active={modalActive} setActive={setModalActive}>
                    {'Дата'} {props.currency.last_1.date} {'Стоимость'} {props.currency.last_1.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_2.date} {'Стоимость'} {props.currency.last_2.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_3.date} {'Стоимость'} {props.currency.last_3.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_4.date} {'Стоимость'} {props.currency.last_4.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_5.date} {'Стоимость'} {props.currency.last_5.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_6.date} {'Стоимость'} {props.currency.last_6.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_7.date} {'Стоимость'} {props.currency.last_7.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_8.date} {'Стоимость'} {props.currency.last_8.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_9.date} {'Стоимость'} {props.currency.last_9.value}
                    <br />
                    <br />
                    {'Дата'} {props.currency.last_10.date} {'Стоимость'} {props.currency.last_10.value}
                </Modal>
        </div>
    );
};

export default CurrencyItem;















