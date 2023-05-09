import "./assets/css/message.css";

function Message() {
  return (
    <div>
      <div className="chatbox">
        <div className="chats"></div>
      </div>

      <div className="myContainer">
        <div className="input-group mb-3 textArea">
          <input
            type="text"
            className="form-control text-input"
            placeholder="Your Message Here"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-secondary btn-outline-secondary myBtn"
            type="button"
            id="button-addon2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
