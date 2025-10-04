import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/footer/Footer"
import profile from '../../assets/profile.jpeg'
import '../../pages/about/About.css'
import { useNavigate } from "react-router-dom"
function About() {
    const navigate=useNavigate()
    return (
        <>
            <Navbar />
            <div id="aboutcon">
                <h3 id="abouttext">About<span id="aboutspan" onClick={()=>navigate('/')}>&times;</span></h3>
                <div id='biocon'><img id='profile' src={profile} alt='profilepic'></img>
                    <div id='name'>“Hi, I’m Kaberi a B.Tech Computer Science student passionate about building ideas into reality. When I’m not coding, you’ll find me lost in novels, crocheting little creations, or recharging in nature with a cup of tea and a cat nearby.”</div>
                </div>
                <div id="infocon">
                   <div id="hobbies">
                <ul>
                    <li> <h2>Likes</h2></li>
                    <li>Reading fiction novels</li>
                    <li>Crocheting</li>
                    <li>Cats</li>
                     </ul></div>
               
                    <div id="edu">
                <ul>
                    <li><h2>Education</h2></li>
                    <li>Central Institute of Technology</li>
                    <li>B.TECH (Cse)</li>
                    <li>2023-2027</li>
                    </ul></div>
                </div>
                <div id='quote'>
                    <p>"Just start, even if you don't know how to do it."</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default About