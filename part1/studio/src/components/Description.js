import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://smittenkitchen.com/";
    let authorPhoto = "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2006/06/deb-perelman-headshot-2017.jpg?w=640&ssl=1";
    let authorName = "Deb Perelman";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Photo of Deb Perelman" className={styles.imageUpdates} width="150px" />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Smitten Kitchen</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Even More Perfect Apple Pie</h1>
                    <p>An update to Deb's 2006 apple pie recipe, with a few new tricks from the fantastic Bravetart Cookbook.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;

