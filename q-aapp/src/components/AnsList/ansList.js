// import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
// import { stringify, v4 } from "uuid";
// import { useState, useEffect } from "react";
// import "./index.css";
// const AnsList = (props) => {
//   const { questionDetails } = props;
//   const [show, setAct] = useState({
//     questType: "TEXT",
//   });

//   const filtering = questionDetails.filter(
//     (each) => each.questionType === show.questType
//   );
//   let choicess = [];
//   if (show.questType === "MULTICHECK") {
//     for (let item of filtering[0].answer.selectedChoices) {
//       choicess.push(item.name);
//     }
//   }
//   console.log(choicess);
//   const changeType = (event) => {
//     setAct({ questType: event.target.value });
//   };
//   console.log(filtering);
//   const getAnswers = (type) => {
//     switch (type) {
//       case "TEXT":
//         return filtering[0].answer.textAnswer;
//         break;
//       case "INTEGER":
//         return filtering[0].answer.intAnswer;
//         break;
//       case "MULTICHECK":
//         // const choic = filtering[0].answer.selectedChoices.map(
//         //   (each) => each.displayValue
//         // );
//         return choicess.join(",");
//         break;
//       default:
//         return "";
//         break;
//     }
//   };

//   return (
//     <div className="ans-box rounded-lg p-4 mt-3">
//       <pre>
//         Question Type :{" "}
//         <select value={show.questType} onChange={changeType}>
//           {questionDetails[0].questionTypeList.map((each) => (
//             <option key={v4()} value={each}>
//               {each}
//             </option>
//           ))}
//         </select>
//       </pre>
//       <h6>
//         <span className="ans">Q.</span>
//         {filtering[0].questionText} ?
//       </h6>
//       <span className="ans">Ans :</span>
//       <h6
//         suppressContentEditableWarning={true}
//         className="d-inline"
//         contentEditable
//       >
//         {getAnswers(show.questType)}
//       </h6>
//       {show.questType === "MULTICHECK" && (
//         <ul className="check-list">
//           {filtering[0].choices.map((each) => (
//             <li key={v4()}>
//               <input type="checkbox" value={each.name} checked />{" "}
//               {each.displayValue}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// export default AnsList;

import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { v4 } from "uuid";
import { useState } from "react";
import "./index.css";
const AnsList = (props) => {
  const { questionDetails } = props;
  const { questionText, questionType, answer, choices, questionTypeList } =
    questionDetails;
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
        break;
      case "INTEGER":
        return <input type="number" className="wid" placeholder="" />;
        break;
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
        break;
      default:
        return "";
        break;
    }
  };
  return (
    <li>
      {questionText} ?{" "}
      <button className="ans-btn" type="button" onClick={showAnsBtn}>
        {show.showAns ? (
          <BsThreeDotsVertical color="orange" />
        ) : (
          <BsThreeDots color="orange" />
        )}
      </button>
      {show.showAns && (
        <div className="ans-box rounded-lg p-4">
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
      )}
    </li>
  );
};
export default AnsList;
