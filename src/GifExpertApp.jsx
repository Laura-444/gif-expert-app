import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        //console.log(newCategory);
        setCategories([newCategory, ...categories]);  //esto es lo mismo que abajo 
        //setCategories( cat => [ ...cat, "Valorant"] ); esto es lo mismo que arriba 


    }

    return (

        <>

            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={ (value) => onAddCategory(value)  }

            />

            {
                categories.map( (category) => (
                    <GifGrid
                        key={ category }
                        category={ category } />
                ))

            }

        </>
    )
}
