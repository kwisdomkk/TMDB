import Layout from "../components/Layout";
import CircularProgress from "../components/CircularProgress";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";


export default function Movies() {
  const [lists,setLists]=useState()
  const [page,setPage]=useState(1)
  useEffect(()=>{
    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`;
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
    console.log(json)
    setLists(json)  
  })
  .catch(err => console.error('error:' + err));

  },[page])

  const handlePageChange=(page)=>{
    setPage(page)
  }

  return (
    <>
    <Layout>

        <div className="w-full flex flex-col items-center justify-center py-16">
          <div class="w-[1000px] flex flex-wrap gap-4 gap-y-8">
          {/* item */}
          {lists?.results?.map((list) => (
            <Link to={`/detail/${list.id}`}><div key={list.id} className="w-[180px] h-[340px] rounded-lg shadow-lg overflow-hidden">
            {/* 위:그림 */}
            <div className="w-full h-[250px] bg-blue-500">
              {list.poster_path?
              (<img className="w-full h-full object-cover" 
              src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} 
              alt="movieList" />):
              (<img className="w-full h-full object-cover"
              src={"https://images.unsplash.com/photo-1704212224803-42e34f022c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"}
              alt="re_image"/>
              )
            }
            </div>
            {/* 아래:내용 */}
            <div className=" relative w-full h-[90px] pt-6 px-2">
              <h2 className="font-semibold">{list.title.substr(1,20)}</h2>
              <p className="text-sm">{list.release_date}</p>
              {/* 좋아요 평가 */}
               <div className="absolute -top-5 left-2">
                <CircularProgress rate={Math.floor(list.vote_average*10)}/>
                </div>
              </div>
            </div></Link>
            ))}
          </div>
          {/* 페이지 네이션 */}
            <div className="pt-8">
            <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={lists?.total_pages}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            />
          </div>
        </div>
    </Layout>
    </>
  )
}