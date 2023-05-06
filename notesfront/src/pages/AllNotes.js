import Note from "../components/Note"
import { Link } from "react-router-dom"



const AllNotes = (props) => (
    <>
    <Link to='/new'>
        <button>Add Note</button>
    </Link>
      {props.posts.map(
    (post) => <Note post={post} key={post.id} deleteNote={props.deleteNote}/>
)} 
    </>
  
)


export default AllNotes