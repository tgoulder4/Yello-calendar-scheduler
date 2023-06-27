module.exports = {
  /*desc: send the current calendar view*/
  get: "",

  post: (req, res) => {
    switch (req) {
      case "ADD":
      //schedule the event then return the view
      /*@params: event obj to be added*/
      case "DEL":
      //remove the event from db event arr, no need to send back new view
      /*@params: event ID to be deleted*/
      case "MOV":
      //schedule the event and return the view
      /*@params: event ID, new dateTime*/
    }
  },
};
