import logo from "./assets/img/logo.png";
import "./assets/css/message.css";

function Message() {
  return (
    <div>
      <nav className="lostNavbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img id="logo" src={logo} width="75px" alt="logo" />
          </a>
        </div>
      </nav>
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

      <footer id="lostFooter" className="text-center">
        <p className="slogan">
          Find Love that is on Par ⛳ Even if your golf game isn't!
        </p>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Message;
