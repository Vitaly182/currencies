import axios from 'axios';


export default class CurrencyService {
    static async getAll() {
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        console.log(response)
        let allList = []
        for (let valute in response.data.Valute) {
            allList.push(response.data.Valute[valute])        
        }
        return allList   
    }
}


