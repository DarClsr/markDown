import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Numbutton from './components/NumButton.js'
// import DogShow from './components/DogShow'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import BottomButton from './components/BottonButton';
import TabList from './components/TabList';
import MarkDown from './components/MarkDown';
import { faFileImport, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faApper } from '@fortawesome/free-brands-svg-icons';
let body = '### i am title'


let data = [
  {
    id: '1',
    title: '我的文档1',
    body: '### i am markdown'
  },
  {
    id: '2',
    title: '我的文档2',
    body: 'i am markdown22---!!!!!!'
  }
];


let data2 = [
  {
    id: '1',
    title: '我的文档1',
    body: '### i am markdown',
    isNew:false,
  },
  {
    id: '2',
    title: '我的文档2',
    body: 'i am markdown22---!!!!!!',
    isNew:false,
  },
  {
    id: '3',
    title: 'my doucment',
    body: '### i am markdown',
    isNew:false,
  },
  {
    id: '4',
    title: 'your study book',
    body: 'i am markdown22---!!!!!!',
    isNew:false,
  }
];



const App = () => {
  const [files, setFiles] = useState(data2);
  const [activeId, setActiveId] = useState('')

  const [openIds, setOpenIds] = useState([])
  const [unSaveIds, setunSaveIds] = useState([])
  const [searchFiles, setsearchFiles] = useState([])
  const [keyword, setKeyword] = useState('')



  const openFiles = openIds.map(openid => {
    return files.find(v => v.id === openid);
  })



  const fileClick = (id) => {
    //设置activeId
    setActiveId(id)
    //判断是否已经添加了这个文件
    let open = openIds.includes(id);
    let arr = [...openIds, id];
    //如果没有添加，进行添加
    if (!open) {
      setOpenIds(arr)
    }

  }


  const deleteFile = (id) => {
    console.log(id)

    if(keyword){
      const newSearchFiles = filesArr.filter(v => {
        return v.id !== id;
      })
      console.log(newSearchFiles)
      setsearchFiles(newSearchFiles)
    }
    const newFiles = files.filter(v => {
      return v.id !== id;
    })

    setFiles(newFiles)
  }
  const TabClick = (id) => {
    setActiveId(id)
  }

  const updateData = (id, value, type) => {
    const newFiles = files.map(v => {
      if (v.id == id) {
        v[type] = value;
        if(v&&v.isNew){
          v.isNew=false;
        }
      }
      return v;
    });


    setFiles(newFiles)

  }

  const tabClose = (id) => {
    const newOpenIds = openIds.filter(v => {
      return v !== id;
    })
    setOpenIds(newOpenIds)



    if (newOpenIds.length < 1) {
      setActiveId('')
    } else {
      setActiveId(newOpenIds[0])
    }
  }


  const SearchFiles = (keyword) => {
    setKeyword(keyword)
    const newFiles = files.filter(v => {
      return v.title.includes(keyword)
    })
    setsearchFiles(newFiles)
  }

  const addFile=()=>{
    
    let data={
      id:files.length+1,
      title:'mark',
      body:'### 我是新建的文件',
      isNew:true,
    }

    let arrfiles=[
      ...files,
      data
    ]
    setFiles(arrfiles)

  }
  const activeFile = files.find(v => v.id == activeId);
  const filesArr = (searchFiles.length > 0||keyword) ? searchFiles : files;
  console.log(filesArr.length,'---------',searchFiles.length)
  return (
    <div className="App container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-3  left-panel bg-light">
          <FileSearch
            title='我的雲文檔'
            onFileSearch={SearchFiles}
            clearValue={() => { setKeyword('') }}
          />
          {
            filesArr.length > 0 &&
            <FileList
              files={filesArr}
              onFileClick={fileClick}
              onFileEdit={updateData}
              onFileDelete={deleteFile}
            />
          }
          {
            !(filesArr.length > 0) &&
            <div className='start-page'>暂无文档 </div>

          }
          <div className="row no-gutters bottom-btn">
            <div className='col'>
              <BottomButton
                text='新建'
                colorClass="btn-primary"
                icon={faPlus}
                onBtnClick={addFile}
              />
            </div>
            <div className="col">
              <BottomButton
                text='导入'
                colorClass="btn-success"
                icon={faFileImport}
              />
            </div>
          </div>

        </div>
        <div className="col-9  right-panel">
          {
            !activeFile &&
            <div className='start-page'>选择或者创建一个新的 MarkDown wendang </div>
          }

          {
            activeFile &&
            <>
              <TabList
                tabs={openFiles}
                activeId={activeId}
                unSaveIds={unSaveIds}
                onTabClick={TabClick}
                onCloseTab={tabClose}
              />

              <MarkDown
                file={activeFile}
                onChangeBody={updateData}
              />
            </>
          }



        </div>


      </div>


    </div>
  );
}

export default App;
