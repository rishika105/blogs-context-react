import { createContext } from "react";
import { baseUrl } from "../baseUrl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();


//children is the app component as you can see in the index.js file now all app components can use that data

export default function AppContextProvider({children}){
      const [loading, setLoading] = useState(false);
      const [posts, setPosts] = useState([]);
      const [page, setPage] = useState(1);
      const[totalPages, setTotalPages] = useState(null);
      const navigate = useNavigate();


   //data filling
   async function fetchBlogPosts(page = 1, tag, category){
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if(tag){
        url += `&tag=${tag}`;
    }
    if(category){
        url += `&category=${category}`;
    }
    try{
     const result = await fetch(url);
     const data = await result.json();
     console.log(data);
     setPage(data.page);
     setPosts(data.posts);
     setTotalPages(data.totalPages)
    }
    catch(error){
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
   }

   function handlerPageChange(page){
    navigate({search: `page= ${page}`})
    setPage(page);
    
   }

      //we store the this state variables in a object that object contains all the required data

      const value = {
       posts,
       setPosts,
       loading,
       setLoading,
       page,
       setPage,
       totalPages,
       setTotalPages,
       fetchBlogPosts,
       handlerPageChange,
      };

    return <AppContext.Provider value={value}>
    {children}
   </AppContext.Provider>

}






