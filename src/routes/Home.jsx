import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <section className="heading">
        <h1>Welcome to Ticket system</h1>
        <p>Please choose from an option below</p>
      </section>
      <div className="header-items">
        <Link to="/new-ticket" className="btn btn-reverse btn-block">
          <FaQuestionCircle /> Create New Query
        </Link>

        <Link to="/tickets" className="btn btn-block">
          <FaTicketAlt /> View My Query
        </Link>
      </div>
    </div>
  );
}

export default Home;