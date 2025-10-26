
import tkdImg  from "../assets/home/taekwondo.jpg";
import yogaImg from "../assets/home/yoga.webp";
import "@styles/home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="actividad">
        <img src="/home/funcional.jpg" alt="Funcional" />
        <h2>Funcional</h2>
      </div>

      <div className="actividad">
        <img src="/home/zumba.jpg" alt="Zumba" />
        <h2>Zumba</h2>
      </div>

      <div className="actividad">
        <img src={tkdImg} alt="Taekwondo" />
        <h2>Taekwondo</h2>
      </div>

      <div className="actividad">
        <img src={yogaImg} alt="Yoga" />
        <h2>Yoga</h2>
      </div>
    </div>
  );
};

export default Home;
