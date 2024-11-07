
import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState( "" );

    const OnInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        setInputValue("");
        onNewCategory( inputValue.trim() );
       
    };

    return (
        // <form onSubmit={ (event)  => onSubmit(event) }> esto es lo mismo que la linea 21 solo que mas bonoito pero cumple la misma funcion
        
      
        
        <form onSubmit={ onSubmit } aria-label='form'> 

            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={OnInputChange}

            
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}