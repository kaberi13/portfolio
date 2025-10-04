
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Home.css'
import contact from '../../assets/contact.svg'
import link from '../../assets/links.svg'
import projects from '../../assets/work.svg'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Home() {
    const [show, setShow] = useState(false);

    const navigate=useNavigate()
    return (
        <>
        <Navbar/>

        <div className='bigcontainer'>
        <div id="container">
            <div className='intro'>
                <h3 id='hometext'>Home</h3>
                <h1>Your wifi is gone</h1>
                <h4>click on the options below to get your precious internet back</h4>
            </div>
            <div className='smallcontainer'>
                <div className="box" onClick={()=>navigate('/About')}> <img src={contact} alt='infoicon'></img>
                    <h3>about</h3>
                </div>
                <div id='contactbox' className="box" onClick={() => setShow((s) => !s)} > <img src={link} alt='linkicon'></img>
                    <h3>contacts</h3>
                </div>
                <div className="box">
                    <img src={projects} alt='projectsicon'></img>
                    <h3>projects</h3>
                </div>
            </div>
            <div className='suggestbox'>
                <input className='homeint' placeholder='write suggestions' type='text' ></input>
                <input className='homeint'type='submit'></input>
            </div>
        </div>

        <div id='contactcontainer' style={{ display: show ? "flex" : "none" }}>
            <h3 id='contacttext'>Contacts<span id='contactspan' onClick={() => setShow((s) => !s)}>&times;</span></h3>
             <a href='mailto:kaberimushahary645@gmail.com' target='_blank'><button class="homebutton"><ion-icon  class="icon"  name="mail"></ion-icon>Gmail</button></a>
            <a href='https://discordapp.com/users/849260971381358622' target='_blank' ><button class="homebutton"><ion-icon class="icon" name="logo-discord"></ion-icon>Discord</button></a>
            <a href='https://github.com/kaberi13' target='_blank'> <button class="homebutton" ><ion-icon  class="icon" name="logo-github"></ion-icon>Github</button></a>
        </div>
        </div>
        <Footer/>
        </>
    );
}

export default Home

