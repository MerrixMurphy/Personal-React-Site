import React from "react";

function Contact() {
  return (
    <div className="mainContent">
    <form>
      <label for="from">From:</label>
      <input type="text" id="from" name="from"/>
      <br/>
      <label for="message">Message:</label>
      <input type="text" id="message" name="message"/>
      <br/>
      <h4>Attachment</h4>
      <button>Send</button>
    </form>
    </div>
  );
}

export default Contact;
