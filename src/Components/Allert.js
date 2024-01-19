import React, { useEffect } from 'react'

function Allert({allert, closeAllert}) {
    useEffect(()=>{
        const  timerId = setTimeout(closeAllert,3000)
        return ()=>{clearTimeout(timerId)}
    },[allert])
  return (
    <div className='toast-container'>
    <div className='toast'>{allert}</div>
    </div>
  )
}

export default Allert