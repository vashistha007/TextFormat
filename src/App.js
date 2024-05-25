 import'./App.css'
//  import React from "react"; 
 import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, {useState} from 'react'
 import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message ,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },2000)
  }


  const firstcolor=()=>{
    if(mode==='dark'){
      document.body.style.backgroundColor="#1B4242"
  }}
 const secondcolor=()=>{
    if(mode==='dark'){
      document.body.style.backgroundColor="#A0153E"
  }}
  const thirdcolor=()=>{
    if(mode==='dark'){
      document.body.style.backgroundColor="#5F374B"
  }}
  const forthcolor=()=>{
    if(mode==='dark'){
      document.body.style.backgroundColor="#232D3F"
  }}




   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#3a133e"
      showAlert("Dark mode is enabled","success")
   }
   else{
    setMode('light');
    document.body.style.backgroundColor="white"
    showAlert("Light mode is enabled","success")
  }
}
  return(

    <>
    
   <Navbar mode={mode}  toggleMode={toggleMode}  firstcolor={firstcolor} secondcolor={secondcolor} thirdcolor={thirdcolor} forthcolor={forthcolor}/>
   <Alert  alert={alert}/>
   <div className="container my-3">
  

          <TextForm showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode} />
          
   </div>
  
     </>
  );
}
export default App;