import { useState } from "react";
import { withRouter } from "react-router-dom";
import { v4 } from "uuid";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiOutlineDown,
  AiOutlineMinus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import "./index.css";
import AnsList from "../AnsList/ansList";
import CategoryCont from "../categoryContainer/container";
import AddQuestion from "../AddQuestions/addquestion";
import { Tooltip } from "primereact/tooltip";

import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

const CategoryList = (props) => {
  const [toggler, clickTogle] = useState({
    ans: false,
    subCat: false,
    currentActive: false,
  });
  const { categoryDetail } = props;
  console.log(categoryDetail);
  const { first, name, questions, subCategories } = categoryDetail;

  const clickingBtn = () => {
    console.log(questions);
    clickTogle({ ...toggler, ans: !toggler.ans });
  };

  // let isTrue = false;
  // if (activeId === id) {
  //   const { isActive } = state;
  //   isTrue = isActive;
  // }
  // const triggerOpenClose = () => {
  //   console.log(id);
  //   btnClicked(id);
  // };
  const { history } = props;
  const isCurrent = history.location.pathname === "/default";

  const triggerOpenClose = () => {
    clickTogle({ ...toggler, currentActive: !toggler.currentActive });
  };
  const expandSubCatBtn = () => {
    clickTogle({ ...toggler, subCat: !toggler.subCat });
  };

  const addThisQuest = (quest) => {
    console.log(quest);
    questions.push(quest);
    clickTogle({ ...toggler, ans: !toggler.ans });
  };

  return (
    <li className="outer mb-2  p-3">
      <div
        className="d-flex flex-row curser justify-content-between"
        onClick={triggerOpenClose}
      >
        <h3 className="head-size">{first}</h3>
        <Tooltip target=".close-open" mouseTrackLeft={10} />
        <button
          data-pr-tooltip={!toggler.currentActive ? "open" : "close"}
          className="close-open mr-5"
          type="button"
        >
          {toggler.currentActive ? (
            <AiOutlineMinus size={25} color="#125398" />
          ) : (
            <AiOutlineDown size={25} color="#125398" />
          )}
        </button>
      </div>
      {toggler.currentActive && (
        <div>
          <hr />
          <div className="pre-class d-flex flex-row justify-content-between flex-wrap align-items-start">
            <p className="c-name">
              <span className="pre-class"> Name :</span>{" "}
              <input type="text" className="w-75" value={name} />
            </p>

            <p className="c-name">
              {" "}
              <span className="pre-class"> Int Score :</span>{" "}
              <input type="number" className="w-25" placeholder="0" />
              {/* {intScore === null ? "N/a" : intScore} */}
            </p>
            <p className="c-name lighter">
              {" "}
              <span className="pre-class"> Percent :</span>{" "}
              <input type="number" className="w-25" placeholder="0" /> %
              {/* {intScore === null ? "N/a" : intScore} */}
            </p>
          </div>
          {/* quetion session */}
          <hr />
          <div>
            {questions !== null && (
              <>
                <div className="arround">
                  <h6 className="pre-class font-weight-bold">Questions</h6>

                  {isCurrent && (
                    <>
                      <Tooltip target=".close-open" />
                      <button
                        className="close-open mr-5"
                        data-pr-tooltip={
                          !toggler.ans ? "add question" : "close"
                        }
                        data-pr-position="top"
                        type="button"
                        onClick={clickingBtn}
                      >
                        {toggler.ans ? (
                          <AiFillCloseCircle size={25} color="#125398" />
                        ) : (
                          <AiOutlinePlusCircle size={25} color="#125398" />
                        )}
                      </button>
                    </>
                  )}
                </div>
                {isCurrent && (
                  <div
                    className={`question-form mt-1 ${toggler.ans && "opening"}`}
                  >
                    {toggler.ans && <AddQuestion addThisQuest={addThisQuest} />}
                  </div>
                )}
                <ol className="ans-list">
                  {questions.map((each) => (
                    <AnsList key={v4()} questionDetails={each} />
                  ))}
                </ol>

                <h6 className="mt-3 pre-class unactive font-weight-bold">
                  Sub Categories
                </h6>
              </>
            )}
            {subCategories !== null && (
              <>
                <h6 className="mb-4 pre-class unactive font-weight-bold">
                  Questions
                </h6>
                <div className="arround">
                  <h6 className="pre-class font-weight-bold">Sub Categories</h6>

                  <button
                    className="close-open mr-5"
                    type="button"
                    onClick={expandSubCatBtn}
                  >
                    {toggler.subCat ? (
                      <AiFillMinusCircle size={25} color="rgb(216, 150, 26)" />
                    ) : (
                      <AiOutlinePlusCircle
                        size={25}
                        color="rgb(216, 150, 26)"
                      />
                    )}
                  </button>
                </div>
                {toggler.subCat && (
                  <ul className="ans-list">
                    {subCategories.map((each) => (
                      <CategoryCont key={v4()} categoryDetail={each} />
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default withRouter(CategoryList);
