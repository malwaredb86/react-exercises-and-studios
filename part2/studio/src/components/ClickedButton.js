
import "./styling.css";


function ClickedButton() {
  function handleClick() {
    alert("This pin has been removed");
  }
  return (
    <button id="clickedButton">Saved</button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
