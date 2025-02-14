import axios from "axios";
import usereducer from "./Components/usereducer";
import { useReducer } from "react";
import Userform from "./Components/Userform";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Userlist from "./Components/Userlist";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [users, dispatch] = useReducer(usereducer, []);

  //initial users
  useEffect (()=>{
    axios.get('/')
    .then((res)=>{
      dispatch({ type: "INIT_USERS", payload: res.data});
    })
    .catch((error)=>{
      console.log("useeffect data fetching error" , error);
    })
  }, [users])

// addUsers
  const adduser = (newUser ) => {
    axios.post('/', newUser ) 
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADD_USER", payload: res.data });
      })
      .catch((error) => {
        console.error("Error in adding data", error);
      });
  };
// deleteuser
  const deleteuser = (id)=>{
    axios.delete('/'+ id )
    .then(()=>{
      dispatch({type:"DELETE_USER", payload: id});
    })
  };

  // edituser
  const edituser = (updatedUser ) => {
       axios.put(`https://66fe29606993693089574432.mockapi.io/user-list/react-axios/${updatedUser.id}`, updatedUser )
       .then((response)=>{
        dispatch({ type: "EDIT_USER", payload: response.data });
       })
       .catch((error)=>{
            console.error("Error updating using data:", error)
       })
    }
  
  // Create Router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Userlist users={users} deleteuser={deleteuser} />, 
    },
    {
      path: '/userform',
      element: <Userform adduser={adduser} edituser={edituser} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
