import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
const Main = () => {
    const [movies,setMovies]=useState([]);
    const movie=movies[Math.floor(Math.random() * movies.length)]
    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[]);
    // const truncateString=(str,num)=>{
    //     if(str?.length>num){
    //         return str.slice(0,num)+"..."
    //     }
    //     else{
    //         return str;
    //     }
    // }
  return (
    <div className="w-full h-[500px] text-white md:h-[800px]">
        <div className="w-full h-full">
            <div className="absolute w-full h-[800px] bg-gradient-to-r from-black"></div>
            <img className="w-full h-full object-cover" src={`http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
            <div className="absolute w-full top-[20%] p-4 md:p-8 sm:p-12">
                <h1 className="text-3xl md:text-6xl font-bold">{movie?.title}</h1>
               <div className="my-4">
                <button className=" border rounded bg-white hover:bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
                <button className="border rounded text-white border-gray-300 hover:bg-transparent py-2 px-5 ml-4">Watch Later</button>
            </div>
            <p className="text-gray-500 text-sm">Released: {movie?.release_date}</p>
            <p className="text-gray-300 w-full md:max-w=[70%] lg:max-w-[50%] xl:max-w-[35%]">{movie?.overview}
        </p>
            </div>
        </div>
    </div>
  )
}
export default Main
