import './Navbar.css'
import profile from '../../assets/pfp.svg'
import menu from '../../assets/menu.svg'
import search from '../../assets/search.svg'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Navbar(){
    const [show, setShow] = useState(false);

    const navigate=useNavigate()
    return(
        <>
<nav className='nav'> 
    <img className='menulogo' src={menu} alt='menu icon' onClick={() => setShow((s) => !s)}></img>
    <img className='searchlogo' src={search} alt='searchicon'></img>
  <img className='pfplogo' src={profile} alt='acc icon' onClick={()=>navigate('/Login')}></img>
</nav>
<div id='burgermenu' style={{ display: show ? "flex" : "none" }}>
    <ul>
        <li className='menulist'>Gallery</li>
        <li className='menulist' onClick={()=>navigate('/Todolist')}>To-do-list</li>
        <li className='menulist' onClick={()=>navigate('/Stopwatch')}>Timer</li>
        <li className='menulist'>Calculator</li>
    </ul>
</div>
</>
    );
}
export default Navbar