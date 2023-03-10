import { v4 as uuidv4 } from "uuid";
import "./App.css";
import CatIn from "./components/CatIn/catin";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const jsonDatas = {
  measureTypeList: ["NUMBER", "PERCENT"],
  measureType: "NUMBER",
  categories: [
    {
      name: "Base Line, questions only",
      hasQuestions: null,
      hasSubCategories: null,
      intScore: null,
      percentScore: null,
      questions: [
        {
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
            textAnswer: "Rohit Kumar",
            intAnswer: null,
            floatAnswer: null,
            selectedChoices: null,
            evalScore: null,
          },
          choices: null,
          questionText: "What is your name",
        },
        {
          questionTypeList: [
            "TEXT",
            "DROPDOWN",
            "RADIO",
            "MULTICHECK",
            "INTEGER",
            "NUMBER",
          ],
          isRequired: null,
          questionType: "INTEGER",
          defaultAnswer: null,
          answer: {
            textAnswer: null,
            intAnswer: 32,
            floatAnswer: null,
            selectedChoices: null,
            evalScore: null,
          },
          choices: null,
          questionText: "What is your age",
        },
        {
          questionTypeList: [
            "TEXT",
            "DROPDOWN",
            "RADIO",
            "MULTICHECK",
            "INTEGER",
            "NUMBER",
          ],
          isRequired: null,
          questionType: "MULTICHECK",
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
        },
      ],
      subCategories: null,
    },
    {
      name: "Base Line, No Questions",
      hasQuestions: null,
      hasSubCategories: null,
      intScore: null,
      percentScore: null,
      questions: null,
      subCategories: [
        {
          name: "Sub Category with only Questions",
          hasQuestions: null,
          hasSubCategories: null,
          intScore: null,
          percentScore: null,
          questions: [
            {
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
                textAnswer: "Rohit Kumar",
                intAnswer: null,
                floatAnswer: null,
                selectedChoices: null,
                evalScore: null,
              },
              choices: null,
              questionText: "What is your name",
            },
            {
              questionTypeList: [
                "TEXT",
                "DROPDOWN",
                "RADIO",
                "MULTICHECK",
                "INTEGER",
                "NUMBER",
              ],
              isRequired: null,
              questionType: "INTEGER",
              defaultAnswer: null,
              answer: {
                textAnswer: null,
                intAnswer: 32,
                floatAnswer: null,
                selectedChoices: null,
                evalScore: null,
              },
              choices: null,
              questionText: "What is your age",
            },
            {
              questionTypeList: [
                "TEXT",
                "DROPDOWN",
                "RADIO",
                "MULTICHECK",
                "INTEGER",
                "NUMBER",
              ],
              isRequired: null,
              questionType: "MULTICHECK",
              defaultAnswer: null,
              answer: {
                textAnswer: null,
                intAnswer: null,
                floatAnswer: null,
                selectedChoices: [
                  {
                    choiceTypeList: [
                      "TEXT",
                      "RADIO",
                      "CHECK",
                      "INTEGER",
                      "NUMBER",
                    ],
                    name: "Mathematics",
                    displayValue: "Mathematics",
                    choiceType: "CHECK",
                    score: 10.0,
                  },
                  {
                    choiceTypeList: [
                      "TEXT",
                      "RADIO",
                      "CHECK",
                      "INTEGER",
                      "NUMBER",
                    ],
                    name: "Science",
                    displayValue: "Science",
                    choiceType: "CHECK",
                    score: 10.0,
                  },
                  {
                    choiceTypeList: [
                      "TEXT",
                      "RADIO",
                      "CHECK",
                      "INTEGER",
                      "NUMBER",
                    ],
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
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  name: "Mathematics",
                  displayValue: "Mathematics",
                  choiceType: "CHECK",
                  score: 10.0,
                },
                {
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  name: "Science",
                  displayValue: "Science",
                  choiceType: "CHECK",
                  score: 10.0,
                },
                {
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  name: "History",
                  displayValue: "History",
                  choiceType: "CHECK",
                  score: 10.0,
                },
              ],
              questionText: "Pick your interest Topics",
            },
          ],
          subCategories: null,
        },
        {
          name: "Sub Category with Questions and Sub-Category",
          hasQuestions: null,
          hasSubCategories: null,
          intScore: null,
          percentScore: null,
          questions: [
            {
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
                textAnswer: "Rohit Kumar",
                intAnswer: null,
                floatAnswer: null,
                selectedChoices: null,
                evalScore: null,
              },
              choices: null,
              questionText: "What is your name",
            },
            {
              questionTypeList: [
                "TEXT",
                "DROPDOWN",
                "RADIO",
                "MULTICHECK",
                "INTEGER",
                "NUMBER",
              ],
              isRequired: null,
              questionType: "INTEGER",
              defaultAnswer: null,
              answer: {
                textAnswer: null,
                intAnswer: 32,
                floatAnswer: null,
                selectedChoices: null,
                evalScore: null,
              },
              choices: null,
              questionText: "What is your age",
            },
            {
              questionTypeList: [
                "TEXT",
                "DROPDOWN",
                "RADIO",
                "MULTICHECK",
                "INTEGER",
                "NUMBER",
              ],
              isRequired: null,
              questionType: "MULTICHECK",
              defaultAnswer: null,
              answer: {
                textAnswer: null,
                intAnswer: null,
                floatAnswer: null,
                selectedChoices: [
                  {
                    choiceTypeList: [
                      "TEXT",
                      "RADIO",
                      "CHECK",
                      "INTEGER",
                      "NUMBER",
                    ],
                    name: "Mathematics",
                    displayValue: "Mathematics",
                    choiceType: "CHECK",
                    score: 10.0,
                  },
                  {
                    choiceTypeList: [
                      "TEXT",
                      "RADIO",
                      "CHECK",
                      "INTEGER",
                      "NUMBER",
                    ],
                    name: "Science",
                    displayValue: "Science",
                    choiceType: "CHECK",
                    score: 10.0,
                  },
                  {
                    choiceTypeList: [
                      "TEXT",
                      "RADIO",
                      "CHECK",
                      "INTEGER",
                      "NUMBER",
                    ],
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
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  name: "Mathematics",
                  displayValue: "Mathematics",
                  choiceType: "CHECK",
                  score: 10.0,
                },
                {
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  name: "Science",
                  displayValue: "Science",
                  choiceType: "CHECK",
                  score: 10.0,
                },
                {
                  choiceTypeList: [
                    "TEXT",
                    "RADIO",
                    "CHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  name: "History",
                  displayValue: "History",
                  choiceType: "CHECK",
                  score: 10.0,
                },
              ],
              questionText: "Pick your interest Topics",
            },
          ],
          subCategories: [
            {
              name: "Sub Category with only Questions",
              hasQuestions: null,
              hasSubCategories: null,
              intScore: null,
              percentScore: null,
              questions: [
                {
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
                    textAnswer: "Rohit Kumar",
                    intAnswer: null,
                    floatAnswer: null,
                    selectedChoices: null,
                    evalScore: null,
                  },
                  choices: null,
                  questionText: "What is your name",
                },
                {
                  questionTypeList: [
                    "TEXT",
                    "DROPDOWN",
                    "RADIO",
                    "MULTICHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  isRequired: null,
                  questionType: "INTEGER",
                  defaultAnswer: null,
                  answer: {
                    textAnswer: null,
                    intAnswer: 32,
                    floatAnswer: null,
                    selectedChoices: null,
                    evalScore: null,
                  },
                  choices: null,
                  questionText: "What is your age",
                },
                {
                  questionTypeList: [
                    "TEXT",
                    "DROPDOWN",
                    "RADIO",
                    "MULTICHECK",
                    "INTEGER",
                    "NUMBER",
                  ],
                  isRequired: null,
                  questionType: "MULTICHECK",
                  defaultAnswer: null,
                  answer: {
                    textAnswer: null,
                    intAnswer: null,
                    floatAnswer: null,
                    selectedChoices: [
                      {
                        choiceTypeList: [
                          "TEXT",
                          "RADIO",
                          "CHECK",
                          "INTEGER",
                          "NUMBER",
                        ],
                        name: "Mathematics",
                        displayValue: "Mathematics",
                        choiceType: "CHECK",
                        score: 10.0,
                      },
                      {
                        choiceTypeList: [
                          "TEXT",
                          "RADIO",
                          "CHECK",
                          "INTEGER",
                          "NUMBER",
                        ],
                        name: "Science",
                        displayValue: "Science",
                        choiceType: "CHECK",
                        score: 10.0,
                      },
                      {
                        choiceTypeList: [
                          "TEXT",
                          "RADIO",
                          "CHECK",
                          "INTEGER",
                          "NUMBER",
                        ],
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
                      choiceTypeList: [
                        "TEXT",
                        "RADIO",
                        "CHECK",
                        "INTEGER",
                        "NUMBER",
                      ],
                      name: "Mathematics",
                      displayValue: "Mathematics",
                      choiceType: "CHECK",
                      score: 10.0,
                    },
                    {
                      choiceTypeList: [
                        "TEXT",
                        "RADIO",
                        "CHECK",
                        "INTEGER",
                        "NUMBER",
                      ],
                      name: "Science",
                      displayValue: "Science",
                      choiceType: "CHECK",
                      score: 10.0,
                    },
                    {
                      choiceTypeList: [
                        "TEXT",
                        "RADIO",
                        "CHECK",
                        "INTEGER",
                        "NUMBER",
                      ],
                      name: "History",
                      displayValue: "History",
                      choiceType: "CHECK",
                      score: 10.0,
                    },
                  ],
                  questionText: "Pick your interest Topics",
                },
              ],
              subCategories: null,
            },
          ],
        },
      ],
    },
  ],
};
jsonDatas.categories[0].first = "Category - 1";
jsonDatas.categories[1].first = "Category - 2";
jsonDatas.categories.map((each) => (each.id = uuidv4()));
console.log(jsonDatas.categories);
console.log(jsonDatas);
// class App extends Component {
//   state = { measureIn: "number", activeId: null, isActive: false };
//   currentValue = (event) => console.log(event.target.value);
//   isClicking = (id) =>
//     this.setState((prev) => ({ activeId: id, isActive: !prev.isActive }));
//   render() {
//     const { measureIn, activeId } = this.state;
//     return (
//       <div className="main-container">
//         <div className="container bg-white rounded-lg shadow-lg">
//           <h1 className="faq-heading text-center">Q&As</h1>
//           <pre className="text-right">
//             MEASURE TYPE :
//             <select
//               className="measure-type"
//               value={measureIn}
//               onChange={this.currentValue}
//             >
//               {jsonDatas.measureTypeList.map((each) => {
//                 return (
//                   <option
//                     key={uuidv4()}
//                     value={each === "NUMBER" ? "number" : "percent"}
//                   >
//                     {each}
//                   </option>
//                 );
//               })}
//             </select>
//           </pre>
//           <ul className="category-list">
//             {jsonDatas.categories.map((each) => (
//               <CategoryList
//                 key={each.id}
//                 categoryDetail={each}
//                 state={this.state}
//                 activeId={activeId}
//                 btnClicked={this.isClicking}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/default"
          component={() => <CatIn jsonDatas={jsonDatas} />}
        />
        <Route exact path="/clintside" component={() => <h1>clint Side</h1>} />
        <Redirect replace to="/default" />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
