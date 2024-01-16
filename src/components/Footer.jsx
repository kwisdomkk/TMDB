import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"; 

export default function Footer(){
    return (
        <div className="w-full h-[300px] bg-gray-900 flex justify-center py-16">
            {/* 1 */}
            <div className="w-[200px] flex flex-col">
                <Link to="/">
                    <img className="h-[20px] object-cover" src={Logo} alt="main logo" />
                </Link>
            </div>
            {/* 2 */}
            <div className="w-[160px] text-white flex flex-col">
                <h3 className="uppercase font-semibold">the basic</h3>
                <p>TMDB에 대해<br/> 문의하기</p>
                <p>Support Forums</p>
                <p>API</p>
                <p>System Status.</p>
            </div>
            {/* 3 */}
            <div className="w-[160px] text-white flex flex-col">
                <h3 className="uppercase font-semibold">참여하기</h3>
                <p>기여 지침서</p>
                <p>새 영화 추가</p>
                <p>새 TV 프로그램 추가</p>
            </div>
            {/* 4 */}
            <div className="w-[160px] text-white flex flex-col">
                <h3 className="uppercase font-semibold">커뮤니티</h3>
                <p>가이드라인</p>
                <p>토론 내역</p>
                <p>기여 랭킹</p>
            </div>
            {/* 5 */}
            <div className="w-[160px] text-white flex flex-col">
                <h3 className="uppercase font-semibold">법적 사항</h3>
                <p>서비스 이용약관</p>
                <p>API Terms of Use</p>
                <p>개인정보약관</p>
                <p>DMCA Policy</p>
            </div>
        </div>
    )
}