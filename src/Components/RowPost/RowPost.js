import React, { useEffect, useState } from 'react'
import { image_URL, API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results)
            setMovies(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data)
            if (response.data.results.length = !0) {
                setUrlId(response.data.results[0])
            }
        })
    }
    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${image_URL + obj.backdrop_path}`} />
                )}
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId.key} />}
        </div>
    )
}

export default RowPost
