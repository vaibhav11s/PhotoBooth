import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Model from './comps/Modal';
import Title from './comps/Title';
import Login from './comps/Login'
import UploadForm from './comps/UploadForm';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  const [userName,setUserName] = useState(null)
  return (
    <div className="App">
      {!userName && <Login setUserName={setUserName}/> }
      {userName && 
        <div>
          <Title userName={userName} setUserName={setUserName}/>
          <h2>Pictures</h2>
          <UploadForm userName={userName}/>
          <ImageGrid userName={userName} setSelectedImg={setSelectedImg}/>
          {selectedImg && <Model selectedImg = {selectedImg} setSelectedImg={setSelectedImg}/>}
        </div>
      }
    </div>
  );
}

export default App;