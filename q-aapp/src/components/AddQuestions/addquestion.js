import "./index.css";
import { useState } from "react";
import { v4 } from "uuid";
import { Button } from "primereact/button";
const questionDetailsAdd = {
  questionTypeList: [
    "TEXT",
    "DROPDOWN",
    "RADIO",
    "MULTICHECK",
    "INTEGER",
    "NUMBER",
  ],
  isRequired: null,
  questionType: "TEXT",
  defaultAnswer: null,
  answer: {
    textAnswer: null,
    intAnswer: null,
    floatAnswer: null,
    selectedChoices: [
      {
        choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
        name: "Mathematics",
        displayValue: "Mathematics",
        choiceType: "CHECK",
        score: 10.0,
      },
      {
        choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
        name: "Science",
        displayValue: "Science",
        choiceType: "CHECK",
        score: 10.0,
      },
      {
        choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
        name: "History",
        displayValue: "History",
        choiceType: "CHECK",
        score: 10.0,
      },
    ],
    evalScore: null,
  },
  choices: [
    {
      choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
      name: "Mathematics",
      displayValue: "Mathematics",
      choiceType: "CHECK",
      score: 10.0,
    },
    {
      choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
      name: "Science",
      displayValue: "Science",
      choiceType: "CHECK",
      score: 10.0,
    },
    {
      choiceTypeList: ["TEXT", "RADIO", "CHECK", "INTEGER", "NUMBER"],
      name: "History",
      displayValue: "History",
      choiceType: "CHECK",
      score: 10.0,
    },
  ],
  questionText: "Pick your interest Topics",
};
const questionTypes = [
  "TEXT",
  "DROPDOWN",
  "RADIO",
  "MULTICHECK",
  "INTEGER",
  "NUMBER",
];
const AddQuestion = (props) => {
  const { addThisQuest } = props;
  const [typ, setTyp] = useState("TEXT");
  const [qesDetails, setQues] = useState({ ...questionDetailsAdd });
  const submitQuestion = (event) => {
    event.preventDefault();
    addThisQuest(qesDetails);
  };

  const changeType = (event) => {
    setQues({ ...qesDetails, questionType: event.target.value });
    setTyp(event.target.value);
  };

  return (
    <div className="container p-3">
      <form className="row" onSubmit={submitQuestion}>
        <pre className="col-md-5 col-lg-4">
          <label className="mr-1">
            <span className="text-danger">*</span>Question :{" "}
          </label>
          <input
            onChange={(event) =>
              setQues({ ...qesDetails, questionText: event.target.value })
            }
            type="text"
            placeholder="Enter question texts"
            className="question-input"
          />
          ?
        </pre>
        <pre className="col-md-5 col-lg-4">
          <label>
            <span className="text-danger">*</span>Question Type :{" "}
          </label>
          <select onChange={changeType} value={typ}>
            {questionTypes.map((each) => {
              return (
                <option key={v4()} value={each}>
                  {each}
                </option>
              );
            })}
          </select>
        </pre>
        <div className="col-6">
          <Button
            tooltip="add question"
            tooltipOptions={{ position: "bottom" }}
            type="submit"
            className="text-white add-button btn btn-warning h-50"
            style={{ fontSize: "10px" }}
          >
            Add Question
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
