/***********************************************
***  Methods for the use case "delete Msg"  ***
************************************************/
publicLibrary.view.deleteMsg = {
  setupUserInterface: function () {
    var deleteButton = document.forms['Msg'].commit;
    var selectEl = document.forms['Msg'].selectMsg;
    var key="", keys=[], msg=null, optionEl=null, i=0;
    // load all msg objects
    Msg.retrieveAll();
    keys = Object.keys( Msg.instances);
    // populate the selection list with Msgs
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      msg = Msg.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = msg.title;
      optionEl.value = msg.isbn;
      selectEl.add( optionEl, null);
    }
    // Set an event handler for the submit/delete button
    deleteButton.addEventListener("click",
        publicLibrary.view.deleteMsg.handleDeleteButtonClickEvent);
    // Set a handler for the event when the browser window/tab is closed
    window.addEventListener("beforeunload", Msg.saveAll);
  },
  // Event handler for deleting a Msg
  handleDeleteButtonClickEvent: function () {
    var selectEl = document.forms['Msg'].selectMsg;
    var isbn = selectEl.value;
    if (isbn) {
      Msg.destroy( isbn);
      // remove deleted Msg from select options
      selectEl.remove( selectEl.selectedIndex);
    }
  }
};
