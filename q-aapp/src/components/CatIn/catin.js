import { Component } from "react";
import { withRouter } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import CategoryList from "../categoryList/category";
import "./index.css";

class CatIn extends Component {
  state = {
    measureIn: "number",
    activeId: null,
    isActive: false,
    routView: "/clintside",
  };
  componentDidMount() {
    const { history } = this.props;
    const which =
      history.location.pathname === "/default" ? "/clintside" : "/default";
    this.setState({ routView: which });
  }
  currentValue = (event) => {
    this.setState({ measureIn: event.target.value });
  };
  isClicking = (id) =>
    this.setState((prev) => ({ activeId: id, isActive: !prev.isActive }));
  render() {
    const { measureIn, activeId, routView } = this.state;
    const { jsonDatas } = this.props;
    const namePre = routView === "/clintside" ? "clint view" : "default view";
    return (
      <div className="main-containe">
        <div className="container-fluid ">
          <h1 className="faq-heading text-center">Q&As</h1>
          <a href={routView} className="preview">
            {namePre} <i class="fa-solid fa-up-right-from-square"></i>
          </a>

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

export default withRouter(CatIn);
