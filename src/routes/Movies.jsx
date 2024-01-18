import Layout from "../components/Layout";
// import CircularProgress from "../components/CircularProgress";
// import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./Paging.css";
import Item from "../components/item";


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
            <Item list={list}/>
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