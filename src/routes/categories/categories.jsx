import "./categories.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import jobs from "../../assets/jobs.svg";
import magnifyglass from "../../assets/magnify-glass.svg";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { duplicatedJobData } from "../../temp_data/data";
import rightarrow from "../../assets/rightarrow.svg";
import leftarrow from "../../assets/leftarrow.svg";
import {
  categoriesDecreasePage,
  categoriesIncreasePage,
} from "../../store/reducer";

const Categories = () => {
  return (
    <React.Fragment>
      <Navbar />
      <CategoriesUpperBody />
      <CategoriesPagination />
      <Footer />
    </React.Fragment>
  );
};

const CategoriesUpperBody = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="categories-upper-body">
      <div className="categories-upper-body-text">
        <h1>Choose your category</h1>
        <p>({categories} categories)</p>
      </div>
      <div className="categories-search">
        <div id="categories-search-input" className="categories-search-item">
          <img src={jobs} />
          <input placeholder="Search job categories.."></input>
        </div>
        <div className="categories-search-item">
          <button>
            <img src={magnifyglass} />
          </button>
        </div>
      </div>
    </div>
  );
};

const CategoriesPagination = () => {
  const totalItemCount = duplicatedJobData.length;
  const itemsPerPage = 18;
  const currentPages = Math.ceil(totalItemCount / 18);
  const currentItemsArray = Array.from(
    { length: currentPages },
    (e, i) => i + 1
  );
  const dispatch = useDispatch();
  const categoriesCurrentPage = useSelector(
    (state) => state.categoriesCurrentPage
  );
  return (
    <div>
      <div className="category-squares">
        {duplicatedJobData.map((item) => (
          <a href="#" className="category-square" key={item.id}>
            <img src={item.icon} />
            {item.name}
          </a>
        ))}
      </div>
      <div className="categories-pagination">
        <div className="categories-pagination-item">
          <a
            onClick={() => dispatch(categoriesDecreasePage())}
            id="categories-page-mover"
          >
            Prev <img src={leftarrow} />
          </a>
        </div>
        <div className="categories-pagination-item">
          {currentItemsArray.map((i) => (
            <a
              id={
                "categories-" +
                (categoriesCurrentPage === i ? "selected-index" : "index")
              }
              className="categories-pagination-index"
              key={i}
            >
              {i}
            </a>
          ))}
        </div>
        <div className="categories-pagination-item">
          <a
            onClick={() => dispatch(categoriesIncreasePage(currentPages))}
            id="categories-page-mover"
          >
            Next
            <img src={rightarrow} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
