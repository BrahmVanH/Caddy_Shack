import '../assets/css/notFound.css';
import pageNotFound from '../assets/img/pagenotfound.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  return (
    <div>
      <div className="body">
        <div className="lostPara">
          <p className="notFound">
            "Oops! Looks like this page has gone out of bounds."
          </p>
        </div>

        <div id="lostdiv">
          <img id="lost" src={pageNotFound} alt="pagenotfound" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
