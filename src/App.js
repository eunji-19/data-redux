import logo from "./logo.svg";
import "./App.css";
import TestMocking from "./components/TestMocking";
import Counter from "./features/counter/Counter";
import Counter2 from "./components/Counter2";
import MobxExample from "./components/MobxExample";
import TodoList from "./components/TodoList";
import { observableTodoStore } from "./app/ObservableTodoStore";
import Profile from "./components/SWRExample/Profile";
import Cache from "./components/SWRExample/Cache";

function App() {
  return (
    <div className="App">
      {/* <TestMocking />
      <Counter />
      <br />
      <br />
      <br />
      <Counter2 /> */}
      {/* <MobxExample /> */}
      {/* <TodoList store={observableTodoStore} /> */}
      {/* <Profile /> */}
      <Cache />
    </div>
  );
}

export default App;
