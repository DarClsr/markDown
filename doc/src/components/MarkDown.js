


import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
const MarkDown=({file,key,onChangeBody})=>{
    console.log(file)


    return (
        <SimpleMDE
        id="your-custom-id"
        key={file.id}
        value={file&&file.body}
        options={
            {
                minHeight:'790px'
            }
        }
        onChange={(value)=>{onChangeBody(file.id,value,'body')}}
        />
    )

}



export default MarkDown