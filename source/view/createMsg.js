/***********************************************
***  Methods for the use case createMsg  ******
************************************************/
publicLibrary.view.createMsg = {
  setupUserInterface: function () {
    var saveButton = document.forms['Msg'].commit;
    // load all message objects
    Msg.retrieveAll();
    // set an event handler for the submit/save button
    saveButton.addEventListener("click",
        publicLibrary.view.createMsg.handleSaveButtonClickEvent);
    // set a handler for the event when the browser window/tab is closed
    window.addEventListener("beforeunload", Msg.saveAll);
  },
  // save user input data
  handleSaveButtonClickEvent: function () {
    var formEl = document.forms['Msg'];
    var message = { isbn: formEl.isbn.value,
        userName: formEl.userName.value,
        messageInput: formEl.messageInput.value};
    Msg.add(message);
    formEl.reset();
  }
};
