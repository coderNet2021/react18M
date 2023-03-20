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

//partie alerte
// import Alert from "./components/Alert";
// function App() {
//   return (
//     <div>
//       <Alert>
//         hello <span>work</span>
//       </Alert>
//     </div>
//   );
// }

// export default App;

//partie Button
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [visible, setVisibility] = useState(false);
  return (
    <div>
      {visible && (
        <Alert onClose={() => setVisibility(false)}>My Aldddrte</Alert>
      )}
      <Button
        color="danger"
        onClick={() => {
          console.log("test clicked");
          setVisibility(true);
        }}
      >
        My button test
      </Button>
    </div>
  );
}

export default App;
