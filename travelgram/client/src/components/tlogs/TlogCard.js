import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

function TlogCard(props) {

  return (
    <>
      <div className="card tlog__card ">
        <img   src={`http://localhost:5000/${props.Pictures}`} className="card-img-top" alt="..." />
        <div className="card-body tlog__card__body">
          <h5 className="card-title">{props.title}</h5>
         
          <Link to={`/tlogpost/${props.id}`}>
            <button className="btn btn-danger" >Show post</button>
          </Link>
        </div>
        <div className="card-footer">
          <p className="text-muted">Posted on {props.lastupdated}</p>
        </div>
      </div>
    </>
  );
}

export default TlogCard;
