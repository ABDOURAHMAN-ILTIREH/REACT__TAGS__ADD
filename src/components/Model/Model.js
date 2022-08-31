import React,{useContext,useState,useEffect,useRef} from 'react'
import { GlobalContext } from '../../Context/UseContext'
import './Model.css'

export const Model = () => {
  const [Text, setText] = useState('')
  const [Description, setDescription] = useState('')

  const {AddTransactions} = useContext(GlobalContext)
  const headerRef = useRef(null)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop  > 20 ){
            headerRef.current.classList.add('tasktodo__track');
      }else{
           headerRef.current.classList.remove('tasktodo__track'); 
      }
    })
 },[])




  const Onsubmit =(e)=>{
    e.preventDefault();

    setText(e.target.value = '')
    setDescription(e.target.value = '')

    let NewTransaction = {
          id: Math.floor(Math.random()*10000),
          Text,
          Description,
        } 
        AddTransactions(NewTransaction);
    }
    

      return (
          <form ref={headerRef}>
            <h2>create new tags</h2>
            <div className="inputRow">
                <label htmlFor="title">title</label>
                <input type="text" id='title' placeholder='javascript' value={Text} onChange={(e)=> {setText(e.target.value)}}/>

                <label htmlFor="description">Description</label>
                <textarea  cols="30" id='description' rows="10" placeholder='javascript is the best programming language' value={Description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            <button id='save' onClick={Onsubmit}>enregistre</button>
        </form>
  )
}
