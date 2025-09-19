import { useEffect, useState } from "react"
import { useParams } from "react-router"

const PostDetail = ()=>{
    const {id} = useParams()
    const [post,setPost] = useState('')

    useEffect(()=>{ // Renderiza com toda alteração
        fetch(`http://localhost:3000/posts/${id}`) // Pega os dados
        .then(res => res.json()) // Transforma de json para javascript
        .then(data => {
            setPost(data) }) // Passa os dados do objeto e passa para a variavel "data" e atribui ela a setPsts
    },[id]) // Faz com que atualize apenas quando mecher no id

return(
    <div className="p-4">
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p>Views: {post.views}</p>
        <p>{post.description}</p>

    </div>
)
}

export default PostDetail