import React, { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTheUser, deleteTheUser, clearTheUser } from "./redux/action";
import Footer from "./components/Footer";
const TodoList = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  console.log(list);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your list</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Enter your item"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTheUser(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <i
                    className="fa fa-trash-alt add-btn"
                    title="Delete button"
                    onClick={() => dispatch(deleteTheUser(elem.id))}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="clearSection">
            <button className="cl" onClick={() => dispatch(clearTheUser())}>
              Clear All
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default TodoList;
