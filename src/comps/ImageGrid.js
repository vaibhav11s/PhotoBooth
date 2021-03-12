import React,{useState} from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({userName,setSelectedImg}) => {
  const {docs} = useFirestore('images')
  console.log(docs)
  const [onlyUser,setOnlyUser] = useState(false)
  let us = ''
  let yu = ''
  if(onlyUser){
    us = 'active'
    yu = 'not-active'
  } else {
    yu = 'active'
    us = 'not-active'
  }
  return (
    <div className = "ImgBox">
      <button className={yu} onClick={() => {setOnlyUser(false)}}>AllImages</button>
      <button className={us}  onClick={() => {setOnlyUser(true)}}>MyImages</button>
      <div className="img-grid">
        {docs && docs.filter((doc) =>{
          if(onlyUser){
            return doc.createdBy === userName
          }
          return true
        }).map(doc => ( 
          <motion.div className="img-wrap" key={doc.id}
            layout
            whileHover= {{opacity:1}}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img src={doc.url} alt = "uploaded pic"
              title = {doc.createdBy}
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:0.5}}
            />
          </motion.div>
        ))}
      </div>
    </div>
   );
}
 
export default ImageGrid;