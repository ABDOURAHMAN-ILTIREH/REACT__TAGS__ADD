import React,{useContext} from 'react'
import {FaTrash, FaUpload} from 'react-icons/fa'
import { GlobalContext } from '../../Context/UseContext'

export const TaskDisplay = ({Text, Description, id,index}) => {
  const {DeleteTransaction} = useContext(GlobalContext)



  const Colors = [
    {
      primaryColor :"#5d93e1",
      secondaryColor : "#ecf3fc",
    },
    {
      primaryColor :"#f9d288",
      secondaryColor : "#fefaf1",
    },
    {
      primaryColor :"#5dc250",
      secondaryColor : "#f2faf1",
    },
    {
      primaryColor :"#f48687",
      secondaryColor : "#fdf1f1",
    },
    {
      primaryColor :"#8964f7",
      secondaryColor : "#f3f0fd",
    },
  ]

 
  return (
       <div className="Tasks"
       style={{"borderTop": "3px solid"  + Colors[index%5].primaryColor}}
       >
          <h3
          style={{"backgroundColor" : Colors[index%5].secondaryColor}}
          
          >{Text}</h3>
          <p>{Description}</p>
          <div className="Icons">
          <button id='BtnIcons'
           style={{"color":Colors[index%5].primaryColor}}
           onClick={()=> DeleteTransaction(id)}><FaTrash /></button>
          </div>
       </div>
  )
}
