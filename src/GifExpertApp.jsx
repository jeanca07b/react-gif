import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = ( newCategory) => {
        //setCategories( current => [...current, 'Valorant']);
        //setCategories(['Valorant',...categories]);

        if(categories.includes(newCategory)) return;


        setCategories([newCategory,...categories]);
    };

  return (
    <>
        <h1>GifExpertApp</h1>

         <AddCategory
            onNewCategory={ (value) => onAddCategory (value)} 
         
         />

        {
            categories.map( (category) => (
                <GifGrid
                    key={category}
                    category={category}
                /> 
                
                )) 
        }

    </>

  )
}
