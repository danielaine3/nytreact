import axios from "axios";

//These hold the results from the user input
let topic = "";
let startYear = 0;
let endYear = 0;

//queryURL is start of AIP endpoint
const number = 10;
const authKey = "b516c8195bff4efa868563ed00e919e3";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

//Functions goes here
//===================
//Rework to ES6
let runQuery = (number, queryURL) => (

  $.ajax({
    url: queryURL
    method: "GET"
  }).done(function(NYTdata) {
    //log URL for acces during troubleshooting
    console.log("URL:" + queryURL);

    //log NYT Data to console
    console.log("=============================")
    console.log(NYTData);

    //loop through and provide the correct number of articles
    let (var i = 0; i < number; i++) {

      //
    }
  })



  )



export default {
    // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a articleto the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  //Returns if no match
  // getArticles: function() {
  //   return axios.get("*");
  // }
};
