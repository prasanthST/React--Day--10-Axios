import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const Userform = ({ adduser, edituser }) => {
  const location = useLocation(); 
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");

 
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

 
  useEffect(() => {
    const user = location.state?.user; 
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setWebsite(user.website);
      setCompany(user.company);
      setCurrentUserId(user.id); 
      setIsEditing(true); 
    }
  }, [location.state]); 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      
      edituser({ id: currentUserId, name, email, website, company });
    } else {
     
      adduser({ name, email, website, company });
    }

    setName("");
    setEmail("");
    setWebsite("");
    setCompany("");
    setIsEditing(false);
    setCurrentUserId(null);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-4 mt-5" style={{backgroundColor:'aliceblue', padding:"30px", borderRadius:'20px'}}>
          <h3 className="d-flex justify-content-center">
            {isEditing ? "Editing Form " : "Add User Form"}
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website:</label>
              <input
                type="text"
                className="form-control"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                className="form-control"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button
                type="submit"
                className={`btn ${isEditing ? "btn-warning" : "btn-success"}`}
              >
                {isEditing ? "Save Changes" : "Add User"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Userform.propTypes = {
  adduser: PropTypes.func.isRequired,
  edituser: PropTypes.func.isRequired,
};

export default Userform;
