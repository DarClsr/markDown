import { useState, useEffect } from "react"

import axios from 'axios'

const useUrlLoader = (url) => {
    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios.get(url).then((res) => {
            setData(res.data);
            setLoading(false)
        }).catch(err=>{
            alert('请求错误')
        })

    }, [url])
    return  [data,loading]

}

export default useUrlLoader;