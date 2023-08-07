import './styles.css';
import Button from './Button';
import ocean from './oceans.json'


const listItem = ocean.map(ocean =>
   <div key={ocean.id} className=
      {`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src={ocean.image} alt={`An image of ${ocean.name}`} className="img"></img>
      <h1>{ocean.name}</h1>
      <h2>Fun facts!</h2>
      <ol>
         <l1>{ocean.fact1}.</l1>
         <br></br>
         <l1>{ocean.fact2}.</l1>
         <br></br>
         <l1>{ocean.fact3}.</l1>
      </ol>
      <br></br>
      <Button />
   </div>
)

   ;

function Profile() {
   return (

      <ul>
         {listItem}
      </ul>


   );
}

export default Profile;