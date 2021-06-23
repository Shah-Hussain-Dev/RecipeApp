import React, { useState, useEffect } from "react";
import "../index.css";
import RecipeList from "./RecipeList";

const Recipe = () => {
  const [recipeList, updateRecipeList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //Fetching the data from EDMAM API
  const getData = async () => {
    const url = `https://api.edamam.com/search?q=${search}&app_id=adff98de&app_key=
        f5f6860f59387d1b84b8710558fb0ff9`;
    const res = await fetch(url);
    const response = await res.json();
    // console.log(response.hits);
    updateRecipeList(response.hits);
  };

  const OnInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const onSearchClick = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg shadow-lg navbar-dark justify-content-between py-2">
        <a
          className="navbar-brand font-weight-bold my-2"
          href="/"
          style={{ fontSize: "2rem" }}
        >
          Recipe
          <span>
            <img
              className="shadow-box img-nav"
              src=".././images/hamburger.png"
              alt="Food"
              style={{ height: "40px" }}
            />
          </span>
          King
        </a>

        <form className="form-inline my-2 my-lg-0">
          <div class="input-group">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              value={search}
              onChange={OnInputChange}
            />
            <div class="input-group-append">
              <button
                className="btn btn-outline-success btn-search"
                type="submit"
                onClick={onSearchClick}
              >
                <i class="fa fa-search "></i>
              </button>
            </div>
          </div>
        </form>
      </nav>
      <h2 className="text-center mt-3 px-4 mb-3">
        <span>
          <img
            src="https://image.flaticon.com/icons/png/128/1037/1037762.png"
            className="shadow-box"
            height="50px"
            alt="food"
          />
        </span>
        <span className="badge badge-pill badge-warning mx-1 my-3  shadow-box hd">
          Delicious Food
        </span>
        <span>
          <img
            src="https://image.flaticon.com/icons/png/128/2944/2944515.png"
            height="50px"
            className="shadow-box"
            alt="food"
          />
        </span>
      </h2>
      <div className="container  food-container d-flex justify-content-center flex-wrap ">
        <RecipeList data={recipeList} />
        {recipeList.length ? (
          <RecipeList data={recipeList} />
        ) : (
          <img
            src="http://24.media.tumblr.com/d006d06dd62786bccd964dfe6c72d20a/tumblr_mn3c3fOiSr1sn82swo1_500.gif"
            height="400"
            style={{ opacity: "0.5", width: "80%" }}
          />
        )}
      </div>
    </>
  );
};

export default Recipe;
