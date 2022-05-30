import "./App.css";
import TodoList from "./todo-app/TodoList";
// import ClassCmp from "./basic/ClassCmp";
// import FunCmp from "./basic/FunCmp";
// import HelloCmp from "./basic/HelloCmp";
// import PropState from "./basic/PropState";
// import EventHandling from "./basic/EventHandling";

function App() {
  return (
    <div className="App">
      {/* <HelloCmp />
      <FunCmp />
      <ClassCmp />
      <PropState name="Anil" age="28">
        This is the user details
      </PropState>
      <EventHandling /> */}
      {/* <h2>Redux</h2> */}
      <TodoList />
    </div>
  );
}

export default App;
