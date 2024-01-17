import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTicket, ticketActions } from "../redux/ticket/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";

const { reset } = ticketActions;
function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message, ticket } = useSelector(
    (state) => state.tickets
  );

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [issue, setIssue] = useState({});
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    } else if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }
  }, [ticket]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ issue, description }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url="/" />
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name"> Name</label>
          <input type="text" className="form-control" value={name}  />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" value={email}  />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="issue">Issue</label>
            <select
              name="issue"
              id="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            >
              <option value="Task">Task</option>
              <option value="Codekata">Codekata</option>
              <option value="Webkata">Webkata</option>
              <option value="Assessment">Assessment</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the issue</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;