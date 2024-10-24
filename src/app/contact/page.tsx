import React from "react";

const Contact = () => {
  return (
    <div className="contactpage">
      <div className="contact">
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="E-Mail"></input>
        <br />
        <textarea rows={10} cols={45} placeholder="YOur Comment"></textarea>
      </div>
      <div className="input2">
        <div>
          <input type="checkbox"></input>

          <label className="container">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
          <div className="btn">
            <br />
            <input type="button" value={"Submit"}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
