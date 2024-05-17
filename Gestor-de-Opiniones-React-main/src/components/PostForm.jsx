import { useState } from "react"
import { useSavePost } from "../shared/hooks/useSavePost"

const img = 'https://cdn-icons-png.flaticon.com/512/6320/6320522.png'

export const PostForm = () => {
    const { isLoading, savePost } = useSavePost()
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        content: ''
    })

    const handleChange = (e)=>{
        setFormData((prevData)=> (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        savePost(formData)
    }


  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <div>
            <img src={img} style={{width: '8em', height: 'auto'}}/>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input value={formData.title} onChange={handleChange} name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input value={formData.category} onChange={handleChange} name="category" type="text" className="form-control" id="category" />
        </div>
        <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea value={formData.content} onChange={handleChange} name="content" type="password" className="form-control" id="content" />
        </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
    </div>
    </>
  )
}
