
import img2 from './img/cicekk.png';


const Content = () => {
  return (
    <div>
        <h2>React JS</h2>
        <p>React, Kullanici arabirimi tasarlamak için kullanılan bir JS kütüphanesidir.</p>
        <img src="https://cdn.pixabay.com/photo/2022/05/18/12/04/flower-7205105_960_720.jpg" alt="cicek" />
        <img src={img2} alt="img2" />
    </div>
  )
}

export default Content