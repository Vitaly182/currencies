import { useState, useEffect, useMemo } from 'react';
import './App.css';
import CurrencyList from './components/CurrencyList';
import { useCurrencies } from './components/hooks/useCurrency';
import CurrencyFilter from './components/UI/CurrencyFilter';
import CurrencyService from './API/CurrencyService';
import Loader from './components/UI/loader/Loader';
import MyButton from './components/UI/button/MyButton'
import { useFetching } from './components/hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';
import Modal from './components/UI/modal/Modal';


function App() {

  let [currencies, setCurrencies] = useState([]);
  const [allList, setAllList] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  let [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(7);
  let [page, setPage] = useState(1);
  let [firstElementOnPage, setFirstElementOnPage] = useState(0)
  let [lastElementOnPage, setLastElementOnPage] = useState(limit * page)

  const [fetchCurrencies, isCurrenciesLoading, currencyError] = useFetching(async (limit) => {
    const allList = await CurrencyService.getAll();
    setAllList(allList)
    let totalCount = allList.length
    setTotalPages(getPageCount(totalCount, limit))
  })



  const sortedAndSearchCurrencies = useCurrencies(allList, filter.sort, filter.query);

  const changePage = (page) => {
    setPage(page)
    setFirstElementOnPage(limit * (page - 1))
    setLastElementOnPage(limit * page)
  }

  let totalPages_filter = Math.ceil(sortedAndSearchCurrencies.length / limit)
  if (totalPages_filter !== totalPages) {
    totalPages = totalPages_filter
  }

  useEffect(() => {
    changePage(1)
  }, [filter])

  useEffect(() => {
    fetchCurrencies(fetch)
  }, [])

  currencies = sortedAndSearchCurrencies.slice(firstElementOnPage, lastElementOnPage)

  return (
    <div className="App">
      <MyButton onClick={() => { fetchCurrencies(fetch) }} style={{ height: '45px', width: '20%', marginTop: '15px', border: '1px solid blue' }}>Получить валюты</MyButton>
      <CurrencyFilter
        filter={filter}
        setFilter={setFilter}
      />
      {currencyError &&
        <h1>Произошла ошибка ${currencyError}</h1>
      }
      {isCurrenciesLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}><Loader /></div>
        : <CurrencyList currencies={currencies} title='Список валют' />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
