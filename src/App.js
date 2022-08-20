import { useState } from "react";
import trash from "./assets/icons/trash24x24.png";
function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (newItem == "") {
      alert("you gotta write an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItem) => [...oldItem, item]);
    setNewItem("");
  }
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
    console.log(id);
  }

  return (
    <div className="mb-0 mt-0 ml-auto mr-auto md:w-[500px] h-[500px] p-[20px] flex text-center flex-col text-white m-[0 auto]">
      <h1 className="mb-[20px] text-[35px] font-semibold">Todo App</h1>
      <input
        className="mb-[20px] mt-[20px] h-[40px] p-[5px] bg-[#252525]"
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        placeholder="Add some item..."
      />
      <ul className="">
        {items.map((item) => {
          return (
            <li
              className="w-[100%] h-[30px] flex juctify-center wrap-wrap items-center text-[25px]"
              key={item.id}
            >
              {item.value}
              <button className="ml-[20px]" onClick={() => deleteItem(item.id)}>
                <img src={trash} title="" alt="" />{" "}
              </button>
            </li>
          );
        })}
      </ul>
      <div
        className="w-[100%] h-[40px] bg-[#000] mt-[20px] flex justify-center items-center cursor-pointer"
        onClick={() => addItem()}
      >
        Add Todo
      </div>
    </div>
  );
}

export default App;
