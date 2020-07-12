
import React, { useState, useEffect } from 'react';
import Prototype from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown, } from '@fortawesome/free-brands-svg-icons'
import useKeyPress from '../hooks/useKeyPress'



const FileList = ({ files, onFileClick, onFileEdit, onFileDelete }) => {
    const [editStatus, setEditStatus] = useState(false);
    const [value, setValue] = useState('')
    const closeSearch = (item) => {
        setEditStatus(false)
        setValue('');
        if(item.isNew){
            onFileDelete(item.id)
        }

    }
   

    const EnterPress = useKeyPress(13);
    const EscPress = useKeyPress(27);


    useEffect(() => {
        const item = files.find(v => { return v.id === editStatus })

        if (EnterPress && editStatus) {
            onFileEdit(item.id, value, 'title')
            setEditStatus(false)
            setValue('')
        }
        if (EscPress && editStatus) {
            closeSearch(item)
        }
    })

    useEffect(() => {
        const newFile = files.find(v => v.isNew);
        if (newFile) {
            setEditStatus(newFile.id)
            setValue(newFile.title)
        }
    }, [files])


    return (

        <ul className="list-group  file-list">
            {
                files.map(v => {
                    return <li className="list-group-item bg-light d-flex align-items-center file-item"
                        key={v.id}
                    >
                        {
                            ((v.id !== editStatus) && !v.isNew) &&
                            <>
                                <span
                                    className='col-2'
                                >
                                    <FontAwesomeIcon
                                        icon={faMarkdown}
                                        size="lg"
                                    />
                                </span>
                                <span
                                    className='col-8 c-link'
                                    onClick={() => { onFileClick(v.id) }}
                                >{v.title}</span>

                                <button
                                    type="button"
                                    className="icon-button col-1 c-edit"
                                    onClick={() => { setEditStatus(v.id); setValue(v.title) }}
                                >
                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        size="lg"
                                    />

                                </button>

                                <button
                                    type="button"
                                    className="icon-button col-1 c-delete"
                                    onClick={() => { onFileDelete(v.id); }}
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        size="lg"
                                    />

                                </button>
                            </>
                        }

                        {
                            ((v.id === editStatus) || v.isNew) &&
                            <>
                                <input
                                    className="form-control col-10"
                                    value={value}
                                    onChange={(e) => { setValue(e.target.value) }}
                                    placeholder="请输入文件名称"
                                />
                                <button
                                    type='button'
                                    className="icon-button col-2"
                                    onClick={()=>{closeSearch(v)}}
                                >
                                    <FontAwesomeIcon
                                        title="关闭"
                                        icon={faTimes}
                                        size="lg"
                                    />
                                </button>

                            </>
                        }
                    </li>
                })
            }
        </ul>
    )

}

FileList.prototype = {
    files: Prototype.func,
    onFileClick: Prototype.func,
    onFileDelete: Prototype.func,
    onFileEdit: Prototype.func,
}

export default FileList;