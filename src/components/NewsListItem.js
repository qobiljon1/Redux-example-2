import React from "react";
import {useHttp} from "../hook/useHttp"
function NewsListItem({ name, category, description,}) {
  const {request} = useHttp();
  let elementClassName;
  switch (category) {
    case "Hot News":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "Sport News":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "World News":
      elementClassName = "bg-success bg-gradient";
      break;
    default:
      elementClassName = "bg-info bg-gradient";
  }

  // const deleteItem = () => {
  //   request(`http://localhost:3001/news${key}`, "DELETE");
  // }
  return (
    <li
      className={`card flex-row shadow-lg text-white my-2 ${elementClassName}`}
    >
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 start-0 translate-middle badge border rounded-pill bg-light">
        <button type="button" className="btn-close" aria-label="Close"></button>
      </span>
      <img
        src="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHdoaXRlfA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="News Img"
        className="img-fluid w-25 d-inline"
        style={{ objectFit: "cover" }}
      />
    </li>
  );
}

export default NewsListItem;
