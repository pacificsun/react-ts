import ReactDom from "react-dom";
import { GuestList } from "./state/GuestList";
import { UserSearch } from "./refs/UserSearch";
const App = () => {
  return (
    <div>
      <h1>Hi There!</h1>
      <UserSearch />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
