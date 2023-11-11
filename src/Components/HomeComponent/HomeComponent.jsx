import React, { useEffect } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function HomeComponent({value,setValue}) {

 const [percent,setpercent]=React.useState(value)


 useEffect(()=>{
     setpercent(Math.min(100,Math.max(value,0)))
 },[value])


  return (
    <div>
      <ProgressBar completed={percent} />
    </div>
  )
}

export default HomeComponent
