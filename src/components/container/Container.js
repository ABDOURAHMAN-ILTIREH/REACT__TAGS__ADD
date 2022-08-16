import React,{useContext,useEffect,useRef} from 'react'
import { Model } from '../Model/Model'
import { TaskDisplay } from './TaskDisplay';
import { GlobalContext } from '../../Context/UseContext'
import './container.css'

function Container() {

  const {Transaction} = useContext(GlobalContext)
  
  return (
    <section >
      <div className="tags__form">
            <Model />
      </div>
        <div className='TaskDisplay'>
            <h1>tags list</h1>
            <div className="containerTasks">
              {Transaction.slice().reverse().map((transaction)=>(
                  <TaskDisplay key={transaction.id} {...transaction}/>
                )
              )}
            </div>
      </div>
    </section>
  )
}

export default Container