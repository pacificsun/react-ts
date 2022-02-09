import ReactDom from "react-dom";
import { GuestList } from "./state/GuestList";
import { UserSearch } from "./state/UserSearch";
const App = () => {
  return (
    <div>
      <h1>Hi There!</h1>
      <GuestList />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
