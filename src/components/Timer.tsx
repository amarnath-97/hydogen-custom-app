import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        var stop = setInterval(()=>setTime(new Date()), 1000 )
        return function cleanup() {
            clearInterval(stop)
        }
    
    });

  return (
    <div>
        {time.getHours() % 12 < 10 ? "0" + time.getHours() % 12 : time.getHours() % 12}
        :{time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}
        {time.getHours() >= 12 ? " PM" : " AM"}
    </div>
  )
}

export default Timer;