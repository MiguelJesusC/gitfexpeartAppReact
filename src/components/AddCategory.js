import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {
    const [InputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        if(InputValue.trim().length > 2){
            setCategories( cats => [InputValue, ...cats])
            setInputValue('')
        }

        e.preventDefault()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={InputValue}
                    onChange={ handleInputChange }
                />
            </form>
        </>

    )
}
    
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

