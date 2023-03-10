import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import CategoryList from "../categoryList/category";
import "./index.css";

class CatIn extends Component {
  state = { measureIn: "number", activeId: null, isActive: false };
  currentValue = (event) => {
    this.setState({ measureIn: event.target.value });
  };
  isClicking = (id) =>
    this.setState((prev) => ({ activeId: id, isActive: !prev.isActive }));
  render() {
    const { measureIn, activeId } = this.state;
    const { jsonDatas } = this.props;
    return (
      <div className="main-container">
        <div className="container-fluid bg-white rounded-lg shadow-lg">
          <h1 className="faq-heading text-center">Q&As</h1>
          <pre className="text-right">
            MEASURE TYPE :
            <select
              className="measure-type"
              value={measureIn}
              onChange={this.currentValue}
            >
              {jsonDatas.measureTypeList.map((each) => {
                return (
                  <option
                    key={uuidv4()}
                    value={each === "NUMBER" ? "number" : "percent"}
                  >
                    {each}
                  </option>
                );
              })}
            </select>
          </pre>
          <ul className="category-list">
            {jsonDatas.categories.map((each) => (
              <CategoryList
                key={each.id}
                categoryDetail={each}
                state={this.state}
                activeId={activeId}
                btnClicked={this.isClicking}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CatIn;
