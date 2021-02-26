import React from 'react'
import { GifGridItem } from './GifGridItem'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category);


    // const [Images, setImages] = useState([])

    // useEffect(() => {
    //     getGifs(category)
    //     .then( img => setImages( img ))
    // }, [category])


    return (
        <>  
            <h3 className="animate__animated animate__fade">{category}</h3>    
            { loading && <p className="card animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    data.map(e => <GifGridItem key={e.id} {...e} />)
                }

            </div>
        </>
    )
}
