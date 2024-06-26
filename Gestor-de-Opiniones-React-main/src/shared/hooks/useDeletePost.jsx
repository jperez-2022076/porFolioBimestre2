import { deletePostRequest } from "../../services/api"

export const useDeletePost = () => {
    const deletePost = async(id)=>{
        const response = await deletePostRequest(id)
        if(response.error){
            alert('Error al eliminar')
        }
        alert('Post eliminado')
    }
  return {
    deletePost
  }
}
