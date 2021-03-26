import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import { useAuth } from "../../../../services/security/contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

function ButtonLogOutNavigationBar(props) {
   const [error, setError] = useState("");
   const { logout } = useAuth();
   const history = useHistory();


 async function handleLogout() {
   setError("");

   try {
     console.log("tentative de deconnexion");
     await logout();
     history.push("/");
     console.log("Deconnexion ok")
   } catch {
     setError("Failed to log out");
   }
 }


  return (
        <> {error && <Alert severity="error">{error}</Alert>}
   
      <Button
      onClick={handleLogout}
      >{props.name}</Button>
    </>
  );
}

export default ButtonLogOutNavigationBar;
