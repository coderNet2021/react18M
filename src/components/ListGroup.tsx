import { useState } from "react";

//import { MouseEvent } from "react";
//decide the shape of the object :
//{items : [] , heading : string}
//=>we use the Interface feature
interface Props {
  items: string[];
  heading: string;
  //(item:string) = >void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //const handleClick = (event: MouseEvent) => console.log(event.target);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1> {heading} </h1>
      {items.length === 0 && <p>no items found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
