import React from 'react';
import MyInput from './input/MyInput'
import MySelect from './select/MySelect';

const CurrencyFilter = ({filter, setFilter}) => {
    return (
        <div className='search_sort'>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск по коду'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    { value: 'CharCode', name: 'По коду' },
                    { value: 'Value_today', name: 'По стоимости сегодня' },
                    { value: '%_changes', name: 'По % изменений' }
                ]}
            />
        </div>
    );
};

export default CurrencyFilter;