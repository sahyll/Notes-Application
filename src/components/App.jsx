import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

    const [text, setText]= useState("");
    const [items, setItems]= useState([]);

    function handleChange(event){
        const newText= event.target.value;
        setText(newText);
        console.log(newText);
        console.log(text);
        
    }
    function addItem(){
      
        setItems(prevItems =>{
            console.log("the previous items were " + prevItems);
            return [...prevItems, text];
        });
        setText("");
        
    }


    function deleteItem(id){
      setItems(prev => {
        return prev.filter(
          (item, index) => {
            return index !== id;
          }
        )
      })
      
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick= {addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            { items.map((item,index) =>( 
              <ToDoItem 
              key= {index}
              id = {index}
              text= {item}
              onChecked={deleteItem}
              />
            ))} 
        </ul>
      </div>
    </div>
  );
}

export default App;
