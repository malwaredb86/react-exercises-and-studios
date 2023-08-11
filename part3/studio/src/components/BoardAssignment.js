import { useState } from 'react';

export default function BoardAssignment() {
   const boards = [
      {
         "label": "Baking",
         "value": "baking"
      },
      {
         "label": "Fruit",
         "value": "fruit"
      },
      {
         "label": "Desserts",
         "value": "desserts"
      }
   ];



   const handleChange = (event) => {
      setName(event.target.value);
   }

   const [boardName, setName] = useState("no boards yet!");

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>

         <select value={boardName} onChange={handleChange}>
            {boards.map((obj) => {
               return (
                  <option value={obj.value}>{obj.label}</option>
               )
            }
            )}
         </select>

         < p > Saved to {boardName}!</p>
      </div >
   );
}