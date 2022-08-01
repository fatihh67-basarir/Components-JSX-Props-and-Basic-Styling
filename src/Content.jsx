
import img2 from './img/cicekk.png';
import "./Content.css";


const Content = () => {
const imgStyle = {
    display: "block",
    width: "350px",
    margin: "1rem auto",
}    
  return (
    <div className='content'>
        <h2 style={{color:'red'}}>React JS</h2>
        <p style={{backgroundColor:"yellow"}}>React, Kullanici arabirimi tasarlamak için kullanılan bir JS kütüphanesidir.</p>
        <img style={imgStyle} 
        src="https://cdn.pixabay.com/photo/2022/05/18/12/04/flower-7205105_960_720.jpg" alt="cicek" />
        <img 
        style={imgStyle} 
        src={img2} alt="img2" />
        <p className='par-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odit atque voluptate, aspernatur nemo fugit beatae iure praesentium necessitatibus nam nulla quos corrupti ducimus molestiae doloremque? Quia harum nulla ipsum laboriosam, provident explicabo doloremque eius nisi sed enim illum eum!</p>
    </div>
  )
}

export default Content