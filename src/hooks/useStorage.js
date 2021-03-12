import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../fireBase/config';

const useStorage = (file,userName) => {
  const [progress,setProgress] = useState(0);
  const [error,setError] = useState(null);
  const [url,setUrl] = useState(null);
  useEffect(() =>{
    //references
    if(!file){
      return
    }
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    // const imagesRef = storageRef.child()
    
    storageRef.put(file).on('state_changed',(snap) => {
      let percentage = (snap.bytesTransferred/snap.totalBytes)*100
      setProgress(percentage)
      console.log(percentage)
    },(err)=>{
      setError(err);
      console.log(err)
    },async()=>{
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt, createdBy:userName});
      setUrl(url);
      console.log(url)
    })
  },[file,userName])
  return {progress,url,error}
}
 
export default useStorage;