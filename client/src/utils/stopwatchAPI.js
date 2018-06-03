import axios from "axios";

export default {

  // Gets user records
  findUserRecords : function (id) {
    return axios.get("/api/records/" + id);
  },

  // Udates a user's record
  updateUserRecord : function (id, userData) {
    return axios.post("/api/records/" + id, userData);
  },

  // updating user to be in challenge
  updateUser : function (id, userData) {
    return axios.post("api/records/challenge/" + id, userData)
  },

  // Adding stopwatch times to user
  populateUser : function (id) {
    return axios.get("/api/stopwatchtimes/" + id);
  },

  // Deletes the record
  deleteRecord : function (id) {
    return axios.delete("/api/stopwatchtimes/" + id);
  },

  // Finding all stopwatch records for top 10
  findAllRecords : function () {
    return axios.get("/api/stopwatchtimes/")
  },
  findAllChallengeRecords : function () {
    return axios.get("/api/stopwatchtimes/challenge/records")
  }

};