import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SideBar } from './components/Sidebar';
import { Content } from './components/Content';

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = () => setSideBarOpen(!sidebarOpen);
  return (
    <div className="App">
      <Header onClick={handleViewSidebar}></Header>
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <Content isOpen={sidebarOpen} />    
    </div>
  );
}

export default App;
