/**
 * @fileOverview  Contains various view functions for the use case listBooks
 * @author Random Savage redux of gerd wagner code
 */
 publicLibrary.view.retrieve = {
  setupUserInterface: function () {
    var noDoz = document.getElementsByClassName("comment");
    var cofee = document.getElementsByClassName("who");
    var keys=[], key="", row={}, i=0;

    // load all book objects
    Msg.retrieveAll();
    keys = Object.keys( Msg.instances);
    // for each book, create a table row with a cell for each attribute
    for (i=0; i < keys.length; i++) {
      key = keys[i];

      // noDoz[0].textContent = Msg.instances[key].messageInput;

      noDoz[i].textContent = Msg.instances[key].messageInput;
      cofee[i].textContent = Msg.instances[key].userName;
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



//****** make the comments an array of objects
