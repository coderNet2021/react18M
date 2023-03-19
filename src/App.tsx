import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Barcelona", "Madrid", "Sevilla", "Beirut"];
  let colors = ["blue", "yellow", "red", "orange", "green"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <ListGroup items={colors} heading="Colors" />
    </div>
  );
}

export default App;
