import React,{useContext} from 'react'
import {FaTrash, FaUpload} from 'react-icons/fa'
import { GlobalContext } from '../../Context/UseContext'

export const TaskDisplay = ({Text, Description, id}) => {
  const {DeleteTransaction} = useContext(GlobalContext)


  return (
       <div className="Tasks">
          <h3>{Text}</h3>
          <p>{Description}</p>
          <div className="Icons">
          <button id='BtnIcons'><FaUpload /></button>
          <button id='BtnIcons' onClick={()=> DeleteTransaction(id)}><FaTrash /></button>
          </div>
       </div>
  )
}
