
import React, { useState, useEffect,useRef } from 'react';

const FileSearch = ({ title, onFileSearch }) => {
    const [inputActive, setInputActive] = useState(false);
    const [value, setValue] = useState('');
    const node=useRef(null);
    const closeSearch=(e)=>{
        e.preventDefault();
        setInputActive(false);
        setValue('')
    }
    useEffect(() => {
        const handlerInputEvent = (event) => {
            const { keyCode } = event;
            // console.log(keyCode)

            if (keyCode == 13 && inputActive) {
                onFileSearch(value);
            }else if(keyCode==27&&inputActive){
                closeSearch(event)
            }
        };
        document.addEventListener('keyup',handlerInputEvent);
        return ()=>{
            document.removeEventListener('keyup',handlerInputEvent);
        }
    })
    useEffect(()=>{
        if(inputActive){
            //點擊搜索自動聚焦文本框
            node.current.focus();
        }
    },[inputActive])
    return (
        <div className="alert alert-warning alert-dismissible">
            {
                !inputActive &&
                <div className="d-flex justify-content-between align-items-center">
                    <span>{title}</span>
                    <button
                        type='button'
                        className="btn btn-primary"
                        onClick={() => {
                            setInputActive(true)
                        }}
                    >search</button>
                </div>

            }
            {
                inputActive &&
                <div className="row">
                    <input 
                        className="form-control col-8" 
                        value={value}
                        onChange={(e) => { setValue(e.target.value) }}
                        ref={node}
                    />
                    <button
                        type='button'
                        className="btn btn-primary col-4"
                        onClick={closeSearch}
                    >close</button>
                </div>

            }
        </div>
    )

}

export default FileSearch