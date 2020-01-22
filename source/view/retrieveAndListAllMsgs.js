/**
 * @fileOverview  Contains various view functions for the use case listBooks
 * @author Gerd Wagner
 */
 publicLibrary.view.retrieveAndListAllMsgs = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#books>tbody");
    var noDoz = document.getElementsByClassName("comment");
    var keys=[], key="", row={}, i=0;

    // load all book objects
    Msg.retrieveAll();
    keys = Object.keys( Msg.instances);
    // for each book, create a table row with a cell for each attribute
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      row = tableBodyEl.insertRow();
      // noDoz[0].textContent = Msg.instances[key].messageInput;
      row.insertCell(-1).textContent = Msg.instances[key].isbn;
      row.insertCell(-1).textContent = Msg.instances[key].userName;
      row.insertCell(-1).textContent = Msg.instances[key].messageInput;
      let pGraph = Msg.instances[key].messageInput;
      noDoz[0] = pGraph;
      console.log(noDoz);
    }
  }
};

// <script>
// function myFunction() {
//   var para = document.createElement("P");
//   para.innerHTML = "This is a paragraph.";
//   document.getElementById("myDIV").appendChild(para);
// }
// </script>
//
// for(let i = 0; i<this.length; i++){
//   var para = document.createElement("P");
//   para.innerHTML = "This is a paragraph.";
//   var noDoz = document.getElementsByClassName("comment");
//   noDoz[0].innerHTML = Msg.instances[key].messageInput;
//   console.log(noDoz.innerHTML);
// }
// var watchThis = document.querySelectorAll(".comment").querySelectorAll("p");
