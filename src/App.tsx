// import ListGroup from "./components/ListGroup";
// function App() {
//   let items = ["New York", "Barcelona", "Madrid", "Sevilla", "Beirut"];
//   let colors = ["blue", "yellow", "red", "orange", "green"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//       <ListGroup
//         items={colors}
//         heading="Colors"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

import Alert from "./components/Alert";
function App() {
  return (
    <div>
      <Alert text="hello world" />
    </div>
  );
}

export default App;
