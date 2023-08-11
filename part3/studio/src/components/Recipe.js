const RecipeAuthor = () => {
   let authorLink = "https://smittenkitchen.com/";
   let authorPhoto = "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2006/06/deb-perelman-headshot-2017.jpg?w=640&ssl=1";
   let authorName = "Deb Pearlman";

   return (
      <div>
         <img src={authorPhoto} alt="Photo of Deb Pearlman" id="authorphoto" />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["apples", "brown sugar", "cinnamon", "spices", "tapioca flour", "pie crust"];
   return (
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div>
         <div>
            <h1>Even More Perfect Apple Pie</h1>
            <p>This is an update to her 2006 apple pie recipe, with a few new tricks from the fantastic Bravetart cookbook.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://i0.wp.com/farm2.staticflickr.com/1931/45412523351_f5a7ffc42f_z.jpg?resize=640%2C427&ssl=1" alt="Two slices of thick apple pie on plates" className="imageUpdates" id="pie" />
   );
}

export default function RecipeDisplay() {
   return (
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}