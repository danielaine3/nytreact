import axios from "axios";

const number = 10;
const authKey = "b516c8195bff4efa868563ed00e919e3";
const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";


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
