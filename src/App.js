import { gql, useQuery } from "@apollo/client";
import { Route, Router, Routes } from "react-router-dom";
import AuthorsDetail from "./components/authors/authorsDetail.js";
import BlogsDetail from "./components/blogs/blogsDetail.js";
import HomePage from "./components/home/homePage.js";

import Layout from "./components/layout";
function App() {
  const Query = gql`
    query {
      posts {
        title,
    

        
      }
    }
  `;

  const { loading, data } = useQuery(Query);
  console.log(data);
  return (
    <div className="App">
      <Layout>
      <Routes>
<Route path="/" element={   <HomePage />}/>
<Route path="/blogs/:slug" element={<BlogsDetail/>}/>
<Route path="/authors/:slug" element={<AuthorsDetail/>}/>
      </Routes>
     
      </Layout>
    </div>
  );
}

export default App;
