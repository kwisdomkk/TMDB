import Layout from '../components/Layout'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from "react";

export default function Search() {
  const [data,setData]=useState();
  const location=useLocation()
  const search=new URLSearchParams(location.search)
  const keyword=search.get('keyword')
  // console.log(keyword)
  useEffect(()=>{
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko-KR&page=1`;
    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTg0YzhkZTg1MjBhMDgyODFjMWY4ZDVmMmZmZjUyNCIsInN1YiI6IjY1OWNhMGI5YjZjZmYxMDFhNjc0NjJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.adwdiZZp19ku5Tgm8IIn3COIs7zLnQOX8R_OYNpd9gg'
    }
  };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setData(json)
        console.log(json)
      })
      .catch(err => console.error('error:' + err));
      },[keyword])
  return (
    <Layout>
      <div className='w-full flex justify-center py-16'>
        <div className='w-[1392px] flex'>
          <h3 className='w-[256px] h-[64px] bg-sky-300 rounded-t-lg text-center text-white'>Search Results</h3>
          <div className='w-[1022px] ml-auto'>
              <div>
                {data?.results?.map((item)=>(
                  <div key={item.id} className='w-[1022px] h-[143px]  border rounded-lg flex overflow-hidden'>
                    <div className='w-[94px] h-[141px] bg-slate-50'>
                      <img className='w-full h-full object-cover'
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt='posterImage'/>
                    </div>
                    <div className='w-[926px] h-[141px]'>
                      <div className='my-4'>
                        <p>{item.title}</p>
                        <p>{item.release_date}</p>
                      </div>
                      <span className='w-[896px] h-[45px] line-clamp-2'>
                        {item.overview}
                      </span>
                    </div>
                  </div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
