import axios from "axios";

//queryURL is start of AIP endpoint
const authKey = "b516c8195bff4efa868563ed00e919e3";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

//Functions go here
// let runQuery = (number, queryURL) => (

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).done(function(results) {

//     //log URL for access during troubleshooting
//     console.log("URL:" + queryURL);

//     //log NYT Data to console
//     console.log("=============================")
//     console.log(results);

//     //loop through and provide the correct number of articles
//     // let (var i = 0; i < number; i++) {

//     //   //
//     // }
//   })
// )

// //Methods
// $("#search").on("click", function(event) {
//   event.preventDefault();

//   //empty results div
//   $(".results").empty();

//   //topic from form
//   topic = $("#topic").val().trim();
//   let searchURL = queryURL + topic;

//   //start year from form
//   startYear = $("#start-year").val().trim();

//   //end year from form
//   endYear = $("#end-year").val().trim();

//   //If user provides startYear- include in queryURL
//   if (parseInt(startYear)) {
//     searchURL = queryURL + "&begin_date=" + startYear + "0101";
//   }

//   //If user provides endYear-- include in queryURL
//   if(parseInt(endYear)) {
//     searchURL = queryURL + "&end_date" + endYear + "0101";
//   }

//   //Pass final URL and number or results to runQuery function
//   // runQuery(number, searchURL);
// });

export default {
  search(query) {
    return axios.get(queryURL + query)
  },


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


//   //Returns if no match
//   // getArticles: function() {
//   //   return axios.get("*");
//   // }
};





