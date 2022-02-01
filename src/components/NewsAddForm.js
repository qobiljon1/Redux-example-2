import { useState } from "react";
import { useHttp } from "../hook/useHttp";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { newsCreated } from "./NewsList/news_slice";

function NewsAddForm() {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const form = { id: v4(), name, description, category };

    request("http://localhost:3001/news", "POST", JSON.stringify(form))
      .then(dispatch(newsCreated(form)))
      .catch((err) => console.log(err));

    setName("");
    setCategory("");
    setDescription("");

    //eslint-disable-next-line
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Name for new News
        </label>
        <input
          type="text"
          required
          name="name"
          id="name"
          placeholder="What is name of news?"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Description
        </label>
        <textarea
          type="text"
          required
          name="text"
          id="text"
          placeholder="What is your news about"
          className="form-control"
          style={{ height: "120px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label fs-5">
          Choose category of news
        </label>
        <select
          required
          className="form-select"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>News about...</option>
          <option value="Hot News">Hot News</option>
          <option value="Sport News">Sport News</option>
          <option value="World News">World News</option>
        </select>
      </div>
      <button type="submit" className="btn btn-dark shadow-lg w-100">
        Create News{" "}
      </button>
    </form>
  );
}

export default NewsAddForm;
