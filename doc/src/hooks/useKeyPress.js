

import {useState, useEffect} from 'react';

const useKeyPress=(code)=>{
    
    const [pressed,setpressed]=useState(false);


    const keydownHandler=({keyCode})=>{
        if(code===keyCode){
            setpressed(true)
        }
    }
    const keyupHandler=({keyCode})=>{
        if(code===keyCode){
            setpressed(false)
        }
    }

    useEffect(()=>{
         document.addEventListener('keydown',keydownHandler);
         document.addEventListener('keyup',keyupHandler);
         return ()=>{
            document.removeEventListener('keydown',keydownHandler)
            document.removeEventListener('keyup',keyupHandler)
         }
    },[])
    return pressed
}

export default useKeyPress