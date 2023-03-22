import React, { useEffect, useState } from 'react'
import { API_KEY, image_URL } from '../../Constants/Constants'

import axios from '../../axios'
import './Banner.css'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 20);
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {          
            setMovie(response.data.results[randomIndex])
        })
    }, [])
    return (
        <div className='banner'
            style={{ backgroundImage: `url(${movie ? image_URL + movie.backdrop_path : ""})` }}>

            <div className='content'>
                <h1 className='title'>{movie ? movie.original_title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'> play </button>
                    <button className='button'>my list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>

                <div className='fade_bottom'></div>
            </div>
        </div>
    )
}

export default Banner
