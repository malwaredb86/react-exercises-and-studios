import { useState } from 'react';

export default function StatusChange() {

   const [notes, setNotes] = useState("");
   const [submittedNotes, submitNotes] = useState(null);
   const [recipeStatus, setStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      setStatus(true);
      submitNotes(notes);
   }



   return (
      <div style={{ paddingTop: "50px" }}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />

         </form>

         {submittedNotes && (<p>{submittedNotes}</p>)}
         <p>I have not tried this recipe!</p>
      </div>
   );
}