function Msg( message) {
  this.isbn = message.isbn;
  this.userName = message.userName;
  this.messageInput = message.messageInput;
};



Msg.instances = {};

/*********************************************************
 ***  Class-level ("static") storage management methods **
 *********************************************************/
// Convert row to object
Msg.convertRow2Obj = function (msgRow) {
  var msg = new Msg( msgRow);
  return msg;
};
// Load the msg table from Local Storage
Msg.retrieveAll = function () {
  var key="", keys=[], msgsString="", msgs={}, i=0;
  try {
    if (localStorage.getItem("msgs")) {
      msgsString = localStorage.getItem("msgs");
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (msgsString) {
    msgs = JSON.parse( msgsString);
    keys = Object.keys( msgs);
    console.log( keys.length +" msgs loaded.");
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      Msg.instances[key] = Msg.convertRow2Obj( msgs[key]);
    }
  }
};
//  Save all msg objects to Local Storage
Msg.saveAll = function () {
  var msgsString="", error=false,
      nmrOfMsgs = Object.keys( Msg.instances).length;
  try {
    msgsString = JSON.stringify( Msg.instances);
    localStorage.setItem("msgs", msgsString);
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log( nmrOfmsgs + " msgs saved.");
};
//  Create a new msg row
Msg.add = function (message) {
  var msg = new Msg( message);
  // add msg to the Msg.instances collection
  Msg.instances[message.isbn] = msg;
  console.log("Msg " + message.isbn + " created!");
};
//  Update an existing msg row
Msg.update = function (message) {
  var msg = Msg.instances[message.isbn];
  var year = parseInt( message.year);
  if (msg.userName !== message.userName) msg.userName = message.userName;
  if (msg.year !== year) msg.year = year;
  console.log("Msg " + message.isbn + " modified!");
};
//  Delete a msg row from persistent storage
Msg.destroy = function (isbn) {
  if (Msg.instances[isbn]) {
    console.log("msg " + isbn + " deleted");
    delete Msg.instances[isbn];
  } else {
    console.log("There is no msg with ISBN " + isbn + " in the database!");
  }
};
/*******************************************
*** Auxiliary methods for testing **********
********************************************/
//  Create and save test data
Msg.generateTestData = function () {
  Msg.instances["006251587X"] = new Msg({isbn:"006251587X", userName:"Weaving the Web", year:2000});
  Msg.instances["0465026567"] = new Msg({isbn:"0465026567", userName:"Gödel, Escher, Bach", year:1999});
  Msg.instances["0465030793"] = new Msg({isbn:"0465030793", userName:"I Am A Strange Loop", year:2008});
  Msg.saveAll();
};
//  Clear data
Msg.clearData = function () {
  if (confirm("Do you really want to delete all msg data?")) {
    Msg.instances = {};
    localStorage.setItem("msgs", "{}");
  }
};

const openNav = ()=> {
  let openbtn = document.querySelector('.burger');
  let sidenav = document.querySelector('.sidenav');
  if(sidenav.style.display = "none" ) {
    sidenav.classList.toggle('active');
    sidenav.style.display = "block";

  } else {
    console.log("something happened")
  }
}

const closeNav = ()=> {
  let closebtn = document.querySelector('.closebtn');
  let sidenav = document.querySelector('.sidenav');
  if(sidenav.style.display = "none") {
    sidenav.classList.toggle('active');

  } else {
    console.log("active");
  }
}

//establish connection to db and apply it to the DOM
// var pGraph = document.getElementsByClassName("comment");
// pGraph.textContent = Msg.instances["1233"].messageInput;
