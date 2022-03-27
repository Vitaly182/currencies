import { useState, useEffect, useMemo } from 'react';

export const useSortedCurrencies = (currencies, sort) => {
    const sortedCurrencies = useMemo(() => {
        if (sort) {
            if (sort === 'CharCode') {
                return [...currencies].sort((a, b) => a[sort].localeCompare(b[sort]))
            }
            if (sort === 'Value_today') {
                return [...currencies].sort((a, b) => a.Value - b.Value)
            }
            if (sort === '%_changes') {
                return [...currencies].sort((a, b) => Math.round((a.Value-a.Previous)/a.Previous * 100 * Math.pow(10, 2)) / Math.pow(10, 2) - Math.round((b.Value-b.Previous)/b.Previous * 100 * Math.pow(10, 2)) / Math.pow(10, 2))
            }
        }
        return currencies;
    }, [sort, currencies])
    
    return sortedCurrencies;
}

export const useCurrencies = (currencies, sort, query) => {
    const sortedCurrencies = useSortedCurrencies(currencies, sort);

    const sortedAndSearchCurrencies = useMemo(() => {
        return sortedCurrencies.filter(currency => currency.CharCode.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedCurrencies])

    return sortedAndSearchCurrencies;
}