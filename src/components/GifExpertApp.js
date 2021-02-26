import { React, useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty'])

    return (
        <>
            <h2> Gif App</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map(category => {
                       return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </>

    )
}

