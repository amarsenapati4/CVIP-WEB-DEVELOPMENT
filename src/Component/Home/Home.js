import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"


const apiKey="83065caa51f99894fac4226f0a2c5bda";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card=({img})=>{
  return(
<img src={img} className='w-[200px] cursor-pointer hover:translate-y-[-10px] hover:scale-105 transition-[0.5s] border-red-900 m-[0.3rem] ' alt="cover image"/>
  )
}

const Row = ({title,arr = []}) => {
  return(
    <div className='p-[1rem] bg-[#101010] text-2xl'>
        <h2 className='m-[0.3 rem] text-white font-bold'>{title}</h2>
        <div className='flex overflow-x-scroll scroll-card '>
        {arr.map((item, index) => (
                <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))}
       
        </div>
    </div>
  )
}

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(()=>{
    const Upcoming = async () => {
      const {
          data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
  };
  const fetchNowPlaying = async () => {
    const {
        data: { results },
    } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
    setNowPlayingMovies(results);
};
const fetchPopular = async () => {
    const {
        data: { results },
    } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
    setPopularMovies(results);
};
const fetchTopRated = async () => {
    const {
        data: { results },
    } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
    setTopRatedMovies(results);
};
const getAllGenre = async () => {
    const {
        data: { genres },
    } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
    setGenre(genres);
    console.log(genres);
};
getAllGenre();
Upcoming();
fetchNowPlaying();
        fetchPopular();
        fetchTopRated();
  },[])
  return (
    <section className="home ">
        <div className="h-[600px] bg-[#101010] banner"  style={{
                    backgroundImage: popularMovies[0]
                        ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}>
             {popularMovies[0] && <h1 className='text-white text-[3rem] w-2/5 z-10'>{popularMovies[0].original_title}</h1>}
                {popularMovies[0] && <p className='text-white text-[1.2rem] w-2/5 z-10 tracking-[2px] [word-spacing:2px]'>{popularMovies[0].overview}</p>}

                <div className='flex'>
                    <button className='p-4 w-[150px] outline-none border-none z-10 rounded-[5px] m-4 cursor-pointer text-[1.2rem] flex items-center justify-center [transition:all o.5s] hover:opacity-[0.6] bg-white text-black '><BiPlay /> Play  </button>
                    <button className='p-4 w-[150px]  outline-none border-none z-10 rounded-[5px] m-4 cursor-pointer text-[1.2rem] flex items-center justify-center [transition:all o.5s] hover:opacity-[0.6] bg-[#393939] text-[#FFFFFF]'>My List <AiOutlinePlus /> </button>
                </div>
        </div>
        <Row title={"Upcoming"} arr={upcomingMovies} />
            <Row title={"Now Playing"} arr={nowPlayingMovies} />
            <Row title={"Popular"} arr={popularMovies} />
            <Row title={"Top Rated"} arr={topRatedMovies} />

    </section>
  )
}

export default Home