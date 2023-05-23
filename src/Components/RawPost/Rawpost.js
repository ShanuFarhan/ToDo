import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from './../../constants/constants'
import './Rawpost.css'
import Youtube from 'react-youtube'
function RowPost(props) {
    const [movie, setmovie] = useState([])
    const [url, seturl] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setmovie(response.data.results)
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleClick=(id)=>{ 
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                seturl(response.data.results[0])
            }
        })

       
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                    <img onClick={()=>handleClick(obj.id)} className={props.isSmall? 'smallPoster' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

                )}
                
            </div>
            {url && <Youtube videoId={url.key} opts={opts}/>}
        </div>
    )
}

export default RowPost