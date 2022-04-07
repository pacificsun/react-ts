import ReactDom from "react-dom";
import { GuestList } from "./state/GuestList";
import { UserSearch } from "./state/UserSearch";
import { EventComponent } from "./events/EventComponent";
const App = () => {
  return (
    <div>
      <h1>Hi There!</h1>
      <EventComponent />
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
