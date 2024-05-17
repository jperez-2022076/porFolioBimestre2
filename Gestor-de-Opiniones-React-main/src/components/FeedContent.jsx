import { Route, Routes } from "react-router-dom"
import { Post } from "./Post"
import { useGetPosts } from "../shared/hooks/useGetPosts"
import { useEffect } from "react"
import { ClockLoader } from "react-spinners"
import { PostForm } from "./PostForm"

export const FeedContent = () => {
    const { posts, getPosts, isFetching } = useGetPosts()

    useEffect(()=>{
        getPosts()
    }, [])

    if(isFetching){
        return ( 
            <div className="container d-flex align-items-center justify-content-center vh-100">
              <ClockLoader />
            </div>
        )
    }

  return (
    <div>
        <Routes>
            <Route path="newPost" element={<PostForm />} />
            <Route path="posts" element={<Post posts={posts} />} />
        </Routes>
    </div>
  )
}
