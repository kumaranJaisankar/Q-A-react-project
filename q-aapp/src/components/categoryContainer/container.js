import { v4 } from "uuid";
import { AiFillMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import "./index.css";
import AnsList from "../AnsList/ansList";
import "./index.css";

const CategoryCont = (props) => {
  const { categoryDetail } = props;
  const { name, questions, subCategories } = categoryDetail;
  return (
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

              {/* <button className="close-open mr-5" type="button">
                <AiOutlinePlusCircle size={25} color="rgb(216, 150, 26)" />
              </button> */}
            </div>

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

              {/* <button className="close-open mr-5" type="button">
                <AiOutlinePlusCircle size={25} color="rgb(216, 150, 26)" />
              </button> */}
            </div>

            <ul className="ans-list">
              {subCategories.map((each) => (
                <li key={v4()}>{each.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryCont;
