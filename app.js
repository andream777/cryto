let url = 'https://api.kucoin.com/api/v1/market/allTickers';

let binance = 'https://api.binance.com/api/v3/ticker/24hr'

/*
fetch(binance)
 .then(resp => resp.json())
 .then(data => {
        
    console.log(data)

})
*/
fetch(url)
 .then(resp => resp.json())
 .then(data => console.log(data))
 
       














