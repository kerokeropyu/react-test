import './App.css';
import { useState, useEffect } from 'react';
import Modal from './components/Modal';


function App() {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <>
      <button onClick={setModalStatus(true)}>モーダルを開く</button>
      {modalStatus && <Modal method={()=>setModalStatus(false)} />}
    </>
  );
}

export default App;
