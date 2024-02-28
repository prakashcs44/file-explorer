import {v4} from "uuid";

class Item{
  constructor(isFolder,name){
   this.id = v4();
   this.isFolder = isFolder;
   this.children = [];
   this.name = name||"Untitled";
  }
}


export const rootFolder = new Item(true,"root");




export function insertItem(id,isFolder,name,root = rootFolder){
   if(id===root.id){
     const newItem=  new Item(isFolder,name);
     root.children.push(newItem);
     return;
   }
   
   root.children.map(item=>{
     insertItem(id,isFolder,name,item);
   })
}


