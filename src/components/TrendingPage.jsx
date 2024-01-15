import { useEffect,useState} from "react"
import { motion } from "framer-motion"
import {Link} from "react-router-dom";

export default function TrendingPage() {
    const [lists,setLists]=useState([])

    let tabs=[
      {id:"all",label:"All"},
      {id:"movie",label:"Movies"},
      {id:"tv",label:"TV"}
    ]

    const [activeTab,setActiveTab] =useState(tabs[0].id)

    useEffect(() => {
      const url = `https://api.themoviedb.org/3/trending/${activeTab}/day?language=en-US`;

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTg0YzhkZTg1MjBhMDgyODFjMWY4ZDVmMmZmZjUyNCIsInN1YiI6IjY1OWNhMGI5YjZjZmYxMDFhNjc0NjJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.adwdiZZp19ku5Tgm8IIn3COIs7zLnQOX8R_OYNpd9gg'
        } 
      };
      console.log(options)
      fetch(url, options)
      .then(res => res.json())
      .then(json =>{
        setLists(json?.results.slice(0, 6))
      })
      .catch(err => console.error('error:' + err));
      

    }, [activeTab])
  return (
    <div className="w-full flex justify-center">
        <div className="w-[1300px] h-[400px] pt-8 ">
            {/* 타이틀 */}
            <div className="flex">
              <h2 className="px-4 py-2 font-semibold text-[24px]">Trending</h2>
              {/* 탭바 */}
              <div className="border-2 border-gray-900 rounded-3xl">
                {tabs.map(tab=> (
                  <button 
                  key={tab.id} 
                  onClick={()=>setActiveTab(tab.id)} className={`${activeTab===tab.id? "text-white" : "text-black"} relative
                  rounded-full px-6 py-2.5 text-xl font-semibold transition`}>
                    {activeTab===tab.id && (
                      <motion.span className="absolute inset-0
                      bg-gray-900 rounded-3xl -z-10" 
                        layoutId="bubble"
                        transition={{type:"spring",
                        bounce:0.2, duration:0.6,
                      }}/>
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            {/* 리스트 */}
            <div className="w-full h-[350px] bg-main flex justify-between">
              {lists.map((item)=>(
                <Link to={`/detail/${item.id}`}><div key={item.id} className="p-[20px]">
                  <img className="rounded-xl" src={`https://image.tmdb.org/t/p/w150_and_h225_face${item.backdrop_path}`} alt=""/>
                  <div className="w-[150px] h-[60px]">
                    <p>{item.title || item.name}</p>
                    <p>{item.release_date || item.first_air_date}</p>
                  </div>
                </div></Link>
              ))}
            </div>

        </div>
    </div>
  )
}