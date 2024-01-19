// import NavPage from "../components/NavPage";
import SearchPage from "./components/SearchPage"
import TrendingPage from "./components/TrendingPage"
import Layout from "./components/Layout";
import Cover from "./components/Cover";


function App() {
 
  return (
    <div>
      <Layout>

        {/* 검색 영역 */}
        <SearchPage/>
        <Cover/>
        {/* Trending */}
        <TrendingPage />
      </Layout>
      
    </div>
  );
}

export default App;
