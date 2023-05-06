import { useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SingleNote = ({posts}) => {
    const params = useParams()
   
   const currentPost = useMemo(() => posts.find(post => post.id === parseInt(params.id)), [params.id, posts])
    
   const [open, setOpen] = useState([])
    
    return(
        <div>
        <Modal  isOpen={open} toggle={() => setOpen(false)}>
                <ModalHeader>
                     <h1>{currentPost.title}</h1>
                </ModalHeader>
            <ModalBody>
                <h2>{currentPost.note}</h2>
                <Link to={`/edit/${params.id}`} >
            <button>Edit Blog</button>
        </Link>
          <Link to={'/'}>
            <button>Go Back</button>
        </Link>
            </ModalBody>
        </Modal>
  
        
       
        
      
    </div>
    )
}

export default SingleNote