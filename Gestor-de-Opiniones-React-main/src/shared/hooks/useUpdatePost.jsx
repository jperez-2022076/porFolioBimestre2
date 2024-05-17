import { useState } from "react"
import { updatePostRequest } from "../../services/api"

export const useUpdatePost = () => {
    const [updatedPost, setUpdatedPost] = useState(null)

    const updatePost = async(id, post)=>{
        const response = await updatePostRequest(id, post)
        if(response.error){
            //ESTO CAMIBARLO POR Toast o SweetAlert
            alert('Error al actualizar')
        }
        setUpdatedPost(response.data)
        alert('Actualizado correctamente')
    }
  return {
    updatedPost,
    isFetching: !updatedPost,
    updatePost
  }
}
