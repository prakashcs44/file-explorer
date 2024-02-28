import React, { useState } from 'react';
import fileplus from "../assets/fileplus.svg";
import folderplus from "../assets/folderplus.svg";
import { insertItem } from '../data/utitlity';
import File from './File';
function Folder({root}) {
  
  const [showChildren,setShowChildren] = useState(false);
  const [addingFile,setAddingFile] = useState(false);
  const [isFolder,setIsfolder] = useState();
  const [name,setName] = useState("");

 const addFolder = (ev)=>{
  ev.stopPropagation();
   setIsfolder(true);
   setAddingFile(true);
   setShowChildren(true);
   
 }

 const addFile = (ev)=>{
  ev.stopPropagation();
  setIsfolder(false);
  setAddingFile(true);
  setShowChildren(true);
  
 }
  
const setFileName = (ev)=>{
   setName(ev.target.value);
}


const saveItem = (ev)=>{
   if(ev.key === 'Enter' || ev.keyCode === 13){
   insertItem(root.id,isFolder,name);
   setAddingFile(false);
   }
  
 
}

const onBlur = (ev)=>{
 
    setAddingFile(false);
  
 
}




  const toggleChildren = (ev)=>{
    setShowChildren(prev=>!prev);
  }


  return (
    <div>
     <div className='w-full border-2 flex px-3 justify-between cursor-pointer' 
     onClick={toggleChildren}>
      <span>📁{root.name}</span>
      <div className='flex gap-2'>
       <button onClick={addFile} >
        <img src = {fileplus} className='w-6 h-6 hover:bg-slate-200'/>
       </button>
       <button onClick={addFolder} >
       <img src = {folderplus}  className='w-6 h-6 hover:bg-slate-200'/>
       </button>
      </div>
     </div>
     <div className = {` pl-2 ${!showChildren?"hidden":""}`}>
     
      {root?.children?.map(child=>{
        if(child.isFolder){
        return <Folder root = {child}/>
        }
        return <File name = {child.name}/>

      })}

       {addingFile&&(
        <input
          type='text'
          autoFocus
          onChange = {setFileName}
          onBlur={onBlur}
          onKeyDown={saveItem}
          
        />
      )}
     </div>
    </div>
  )
}

export default Folder
