// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light'); 

  const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
  setAlert({
    msg:  message,
    type:  type
  })
};
const toggleMode= ()=>{
  if (mode=== 'light') {
    setMode('dark')
    document.body.style.backgroundColor= 'grey'
    document.body.style.color ='white'; 
    showAlert("Dark mode enable", "Succes");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor= 'white'
    document.body.style.color ='black'; 
    showAlert("Light mode enable", "Succes");
  }
}
setTimeout(() => {
  setAlert(null);
}, 2000);

  return (
   <>
<Navbar title="TeaxtUtils" aboutus="About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert} />
<TextForm showAlert={showAlert} heading='Enter the text to analyze' />
{/* <About /> */}
   </>
  );
}

export default App;
