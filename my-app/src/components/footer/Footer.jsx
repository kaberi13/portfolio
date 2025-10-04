import Wave from 'react-wavify'
import '../../components/footer/Footer.css'
function Footer(){
    return(
        
        <div className='waveContainer'>
     <Wave className='wave'  fill='#cadeed'
        paused={false}
         options={{
          height: 90,
          amplitude: 20,
          speed: 0.2,
          points: 4
        }}
        />
         <Wave className='wave' fill='#91aec4'
        paused={false}
         options={{
          height: 120,
          amplitude: 25,
          speed: 0.3,
          points: 5
        }}
        />
         <Wave className='wave'fill='#194569'
        paused={false}
         options={{
          height: 150,
          amplitude: 30,
          speed: 0.13,
          points: 6
        }}
        />
   </div>
    )
}
export default Footer