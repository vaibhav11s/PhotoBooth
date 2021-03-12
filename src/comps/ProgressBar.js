import React,{useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion'

const ProgressBar = ({file,setFile,userName}) => {
  const {url,progress} = useStorage(file,userName);
  useEffect(() => {
    if(url){
      setFile(null);
    }
  }, [url,setFile])

  return (  
    <motion.div className="progress-bar"
      initial= {{width:0}}
      animate= {{width: progress+'%' }}
    ></motion.div>
   );
}
 
export default ProgressBar;