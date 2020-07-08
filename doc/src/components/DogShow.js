import { useState } from "react"
import React from 'react'

import useUrlLoader from '../hooks/useUrlLoader'


const DogShow = () => {
   //useState  设置初始状态  通过第二个变量更新数据
   const [url,setUrl]=useState('https://dog.ceo/api/breeds/image/random');
   const [data,loading] =useUrlLoader(url)
    return (
        <>
            {
                loading ? <p>正在请求中...</p> : <img src={data.message} alt='狗' />
            }
                <button onClick={()=>{setUrl(url+'?'+Math.random())}}>再来一张小狗图片</button>

           
        </>
    )
}

export default DogShow