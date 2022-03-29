import axios from 'axios';


export default class CurrencyService {
    static async getAll() {

        let now = new Date();
        now.setDate(now.getDate());

        let year = now.getFullYear()
        let month = twoDigits(now.getMonth() + 1)
        let day = twoDigits(now.getDate())

        let responseToday = []
        try {
            responseToday = await axios.get(`https://www.cbr-xml-daily.ru/archive/${year + '/' + month + '/' + day}/daily_json.js`)    
        } catch (err) {
            now.setDate(now.getDate() - 1);
            responseToday = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        }

        now.setDate(now.getDate() - 1);
        let allList = []
        for (let valute in responseToday.data.Valute) {
            allList.push(responseToday.data.Valute[valute])
        }

        for (let i = 0; i < 10; i++) {
            let year = now.getFullYear()
            let month = twoDigits(now.getMonth() + 1)
            let day = twoDigits(now.getDate())
            try {
                let response = await axios.get(`https://www.cbr-xml-daily.ru/archive/${year + '/' + month + '/' + day}/daily_json.js`)
                now.setDate(now.getDate() - 1);
                for (let b = 0; b < allList.length; b++) {
                    const charCode = allList[b].CharCode
                    let last = {}
                    last.date = response.data.Date.slice(0, 10) 
                    last.value = response.data.Valute[charCode].Value
                    allList[b]['last' + '_' + ( i + 1 )] = last
                }
            } catch (err) {
                now.setDate(now.getDate() - 1);
                i--
            }
        }

        function twoDigits(num) {
            return ('0' + num).slice(-2);
        }

        return allList
    }
}


