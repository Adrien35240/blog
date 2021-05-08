import React from 'react'
import {Link} from "react-router-dom"
import './comments.css'
function Comments(props) {
    return (
      <div className="container-comments">
        <Link id="button-comment" to={"/comments/" + props.id}>
          Commentaires
        </Link>
      </div>
    );
}

export default Comments
