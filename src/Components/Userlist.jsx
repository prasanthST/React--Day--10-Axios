import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Userlist = ({ users, deleteuser }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex justify-content-end mb-4 mt-2">
            <Link to="/userform">
              <button
                type="button"
                className="btn btn-success"
              >
                Add User
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <table className="table table-hover border border-2">
          <thead>
            <tr>
              <th className="text-body-secondary" scope="col">
                Name
              </th>
              <th className="text-body-secondary" scope="col">
                Email
              </th>
              <th className="text-body-secondary" scope="col">
                Website
              </th>
              <th className="text-body-secondary" scope="col">
                Company
              </th>
              <th className="text-body-secondary" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>{user.company}</td>
                <td>
                  <Link to="/Userform" state={{ user: user }}>
                    <button type="button" className="btn btn-warning" >Edit</button>
                  </Link>
                  <button type="button" className="btn btn-danger ms-2" onClick={() => deleteuser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

Userlist.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteuser: PropTypes.func.isRequired,
};

export default Userlist;
