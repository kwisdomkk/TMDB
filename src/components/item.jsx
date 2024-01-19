import CircularProgress from "./CircularProgress";
import {Link} from "react-router-dom";


export default function item({list}) {
  return (
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
              <h2 className="font-semibold">
              {(list.original_title && list.original_title.substr(0, 20)) ||
              (list.original_name && list.original_name.substr(0, 20))}
              </h2>
              <p className="text-sm">{list.release_date||list.first_air_date}</p>
              {/* 좋아요 평가 */}
               <div className="absolute -top-5 left-2">
                <CircularProgress rate={Math.floor(list.vote_average*10)}/>
                </div>
              </div>
            </div></Link>
  )
}

