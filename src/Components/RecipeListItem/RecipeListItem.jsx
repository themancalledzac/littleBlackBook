'use client'
import { useState } from "react";

// import styles from './List.module.scss';

export default function RecipeListItem( { title, instructions, ingredients } ) {
    const [recipeOpen, setRecipeOpen] = useState( false );

    return (
        <div onClick={() => setRecipeOpen( !recipeOpen )}>
            <div key={title}>
                <h1>{title}</h1>
                <h2>Instructions</h2>
            </div>
            {recipeOpen && (
            <div>
                <h3>{instructions}</h3>
                <h4>Ingredients</h4>
                {ingredients.map( ( ingredients ) => (
                <p>{ingredients.title}</p>
                    ))}
            </div>
        )}
        </div>
    )
}

// Todo: map instructions into list items like we did for ingredients
