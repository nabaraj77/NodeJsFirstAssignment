
//To take Author Name from User.
const ps = require("prompt-sync");
const prompt = ps();
let authorName = prompt("Enter Author Name: ");
// console.log(authorName);


//Fetches the JSON from news API
const axios = require('axios');
const fetchData = async () => {
    let response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-01-01&to=2022-01-30&sortBy=popularity&apiKey=ea902ab629894506adf6c63bf5975c91')
    //console.log(response.data.articles);
    let output = response.data.articles;
    //console.log(output);
    let authorNameNews = output.forEach(element => {

        let authorName1 = element.author;
        if (authorName == authorName1) {
            // var array = new Array();
            // array.push(element);
            // console.log(array);
            let newsData = (response.data);
            const filteredData = newsData.articles.filter((hData) => hData.author === authorName);
            console.log(filteredData);
        }
        

    });
}
fetchData();