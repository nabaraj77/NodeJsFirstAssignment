const axios = require('axios');
const fetchData=async()=>{
    let data = axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-01-01&to=2022-01-30&sortBy=popularity&apiKey=ea902ab629894506adf6c63bf5975c91')
    console.log(data);
}