import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Paris", "France", "Turkey"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;

/* LIST GROUP 
function App() {
  let items = ["New York", "Paris", "France", "Turkey"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
*/

/* COLOURED ALERT
function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}
*/

/* BUTTON
function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>Success</Button>
    </div>
  );
}
*/
