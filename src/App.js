import React from "react"
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open)
  };
  return (
    <div>
      <Sidebar open={open} toggleDrawer={toggleDrawer}/>
      <Home open={open} toggleDrawer={toggleDrawer}/>
    </div>
  );
}

export default App;
