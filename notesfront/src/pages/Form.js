import { useState,useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Form = (props) => {
const navigate = useNavigate()
const params = useParams()

const currentPost = useMemo(() => props.posts.find(post => post.id === parseInt(params.id)), [params.id, props.posts])

    const [formData, setFormData] = useState(
       props.formType === 'new' ? {
        title: '' ,
        note: '',
        
    } : {
        title: currentPost.title,
        note: currentPost.note,
        id: currentPost.id

    })
    

    const handleChange = (event) => {
        setFormData((prev) => ({...prev, [event.target.name] : event.target.value}))
    }
    
    
    
    const handleSubmission = (event) => {
       event.preventDefault()
       props.handleSubmit(formData, props.formType)
       navigate('/') 
    }





 return(
       <form onSubmit={handleSubmission}>
        <h3>Title</h3>
        <input 
        type='text'
        onChange={handleChange}
        value={formData.title}
        name='title'
        />
        <h3>Note</h3>
        <input 
        type='text'
        onChange={handleChange}
        value={formData.note}
        name='note'
        />
        <input type='submit' value={props.buttonLabel} />
       </form>

    )
}

export default Form