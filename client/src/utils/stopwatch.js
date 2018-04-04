import axios from "axios";

export default {

  // Gets user records
  findUserRecords: function (id) {
    return axios.get("/api/records/" + id);
  },

  // Udates a user's record
  updateUserRecord: function (id,userData) {
     //console.log("stopwatch.js:", userData._id);
    return axios.post("/api/records/"+ id, userData);
  },
  populateUser: function (id) {
    return axios.put("/api/records/" + id);
  },

  // Deletes the record
  deleteRecord: function (id) {
    return axios.delete("/api/records/" + id);
  }

};