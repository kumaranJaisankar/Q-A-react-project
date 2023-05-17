import { useState } from "react";
const TextAns = (props) => {
  const { currentId } = props;
  const fromlocalStoreQuestions = JSON.parse(localStorage.getItem("addQuest"));
  const firstFilter = fromlocalStoreQuestions.filter(
    (each) => each.id === currentId
  );
  const baforeToState =
    firstFilter[0].answer.textAnswer !== null
      ? firstFilter[0].answer.textAnswer
      : "";
  const [textVal, setinval] = useState(baforeToState);
  const onTextVal = (e) => {
    setinval(e.target.value);
    firstFilter[0].answer.textAnswer = e.target.value;
    const unFilter = fromlocalStoreQuestions.filter(
      (each) => each.id !== currentId
    );
    const extraVal = [...firstFilter, ...unFilter];
    extraVal.sort();
    console.log(extraVal, "is order");
    localStorage.setItem("addQuest", JSON.stringify(extraVal));
  };
  return (
    <>
      <span className="ans">Ans:</span>{" "}
      <input
        value={textVal}
        type="text"
        placeholder="Enter Your Ans.."
        onChange={onTextVal}
      />
    </>
  );
};

export default TextAns;
