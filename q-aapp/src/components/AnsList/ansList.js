import { v4 } from "uuid";
import { useState, useId } from "react";

//core

//icons

import "./index.css";
const AnsList = (props) => {
  const { questionDetails } = props;
  const { questionText, questionType, choices, questionTypeList } =
    questionDetails;
  const uniqId = useId();
  const [show, setAct] = useState({
    showAns: false,
    choiceVal: "",
  });
  if (choices !== null) {
    console.log(choices[0].name);
  }

  const showAnsBtn = () => {
    setAct({ ...show, showAns: !show.showAns });
  };
  const typeOfQus = (type, choices) => {
    switch (type) {
      case "TEXT":
        return <input type="text" placeholder="Enter Your Ans.." />;

      case "INTEGER":
        return <input type="number" className="wid" placeholder="" />;

      case "MULTICHECK":
        const cho = choices.map((each) => {
          return (
            <>
              <input type="checkbox" value={each.name} />
              <label>{each.name}</label>
            </>
          );
        });

        return cho;

      default:
        return "";
    }
  };
  return (
    <>
      <li className="qus-list mt-1">
        {!show.showAns && (
          <>
            <label htmlFor={uniqId}>{questionText} ?</label>
            <button
              id={uniqId}
              className="ans-btn"
              type="button"
              onClick={showAnsBtn}
            >
              <i
                class="fa-solid fa-chevron-down fa-beat-fade"
                style={{ fontSize: "10px", color: "red" }}
              ></i>
            </button>
          </>
        )}

        {show.showAns && (
          <div className="ans-box rounded-lg ">
            <button type="button" className="pos" onClick={showAnsBtn}>
              <i
                className="fa-solid fa-x "
                style={{ fontSize: "15px", color: "white" }}
              ></i>
            </button>
            <div className="ml-4 mb-4">
              <pre>
                Question Type :{" "}
                <select
                  value={questionType}
                  onChange={(event) => console.log(event.target.value)}
                >
                  {questionTypeList.map((each) => (
                    <option key={v4()} value={each}>
                      {each}
                    </option>
                  ))}
                </select>
              </pre>
              <h6>
                <span className="ans">Q.</span>
                {questionText} ?
              </h6>

              {typeOfQus(questionType, choices)}
            </div>
          </div>
        )}
      </li>
    </>
  );
};
export default AnsList;
