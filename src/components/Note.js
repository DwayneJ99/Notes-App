import { Link, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


  const div = {
        textAlign: "center",
        border: "5px solid",
        margin: "10px auto",
        width: "80%",
        
    }
    const div2 = {
       color: "white"
        
    }


    const Note = ({post, deleteNote}) => {
  
        const navigate = useNavigate()

    const handleDelete = (event) => {
        event.preventDefault()
       deleteNote(post.id)
        navigate('/')
    }
    
        return(
        <div style={div}>
        <Link to={`/post/${post.id}`} >
            <h1>{post.title}</h1>
        </Link>
        <h2>{post.note}</h2>
        <form onSubmit={handleDelete}>
            <input type='submit' value = 'Delete Note' />
        </form>
    </div>
    )
}

export default Note