import Layout from "./components/Layout"
import SearchPage from "./components/SearchPage"
import TrendingPage from "./components/TrendingPage"

function App() {
  return (
    <div>
      <Layout>
        {/* 검색 영역 */}
        <SearchPage/>
        {/* Trending */}
        <TrendingPage />
      </Layout>
      
    </div>
  );
}

export default App;
