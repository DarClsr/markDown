
import React, { useState, useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faTimes } from '@fortawesome/free-solid-svg-icons'
import Prototype from 'prop-types';
import useKeyPress from '../hooks/useKeyPress'

const FileSearch = ({ title, onFileSearch,clearValue }) => {
    const [inputActive, setInputActive] = useState(false);
    const [value, setValue] = useState('');
    const node=useRef(null);
    const closeSearch=()=>{
        setInputActive(false);
        setValue('')
        onFileSearch('')
        clearValue()
    }
    const EnterPress=useKeyPress(13);
    const EscPress=useKeyPress(27);

    useEffect(() => {
        if(EnterPress&&inputActive){
            onFileSearch(value)
        }

        if(EscPress&&inputActive){
            closeSearch()
        }
        // const handlerInputEvent = (event) => {
        //     const { keyCode } = event;
        //     // console.log(keyCode)

        //     if (keyCode == 13 && inputActive) {
        //         onFileSearch(value);
        //     }else if(keyCode==27&&inputActive){
        //         closeSearch(event)
        //     }
        // };
        // document.addEventListener('keyup',handlerInputEvent);
        // return ()=>{
        //     document.removeEventListener('keyup',handlerInputEvent);
        // }
    })
    useEffect(()=>{
        if(inputActive){
            //點擊搜索自動聚焦文本框
            node.current.focus();
        }
    },[inputActive])
    return (
        <div className="alert alert-primary mb-0">
            {
                !inputActive &&
                <div className="d-flex justify-content-between align-items-center">
                    <span className="firstTitle">{title}</span>
                    <button
                        type='button'
                        className="icon-button"
                        onClick={() => {setInputActive(true)}}
                    >
                        <FontAwesomeIcon
                        title="搜索"
                        icon={faSearch}
                        size="lg"  
                        />
                    </button>
                </div>

            }
            {
                inputActive &&
                <div className="d-flex justify-content-between align-items-center">
                    <input 
                        className="form-control" 
                        value={value}
                        onChange={(e) => { setValue(e.target.value)}}
                        ref={node}
                    />
                    <button
                        type='button'
                        className="icon-button"
                        onClick={closeSearch}
                    >
                         <FontAwesomeIcon
                        title="关闭"
                        icon={faTimes}
                        size="lg"  
                        />
                    </button>
                </div>

            }
        </div>
    )

}

FileSearch.prototype={
    title:Prototype.string,
    onFileSearch:Prototype.func.isRequired,
}

FileSearch.defaultProps={
    title:'我的云文档'
}

export default FileSearch