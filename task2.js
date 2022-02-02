const Moment = require("moment");

//Fetches the JSON from news API
const axios = require("axios");
const fetchData = async () => {
  let response = await axios.get(
    "https://newsapi.org/v2/everything?q=tesla&from=2021-01-02&sortBy=publishedAt&apiKey=68281304a48b40129b5046008c652dec"
  );
  const data = response.data.articles;
  const sortedData = data.sort(
    (a, b) =>
      new Moment(a.publishedAt).format("YYYYMMDD") -
      new Moment(b.publishedAt).format("YYYYMMDD")
  );
  const firstWeek = [];
  const secondWeek = [];
  const thirdWeek = [];
  const fourthWeek = [];
  const fifthWeek = [];

  sortedData.forEach((element) => {
    //console.log(element.publishedAt);
    //console.log(new Moment(element.publishedAt).format('YYYY-MM-DD'));
    const day = new Moment(element.publishedAt).format("DD");
    //console.log(day);
    const dayValue = Math.ceil(Number(day / 7));
    //console.log(dayValue);
    if (dayValue === 1) {
      firstWeek.push(element);
    } else if (dayValue === 2) {
      secondWeek.push(element);
    } else if (dayValue === 3) {
      thirdWeek.push(element);
    } else if (dayValue === 4) {
      fourthWeek.push(element);
    }
  });
  console.log("First Week", firstWeek);
  console.log("Second Week", secondWeek);
  console.log("Third Week", thirdWeek);
  console.log("Fourth Week", fourthWeek);
  console.log("Fifth Week", fifthWeek);
};
fetchData();
