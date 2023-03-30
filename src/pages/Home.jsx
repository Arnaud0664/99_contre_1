import { Link } from "react-router-dom";
import styles from "../style/modules_css/Home.module.css";
import first from '../assets/nucleair.jpg';
import datas from '../datas/Datas.json'

function Home() {
    return (
        <>
            <div className= {styles.imgBlock}>
                <img src= {first} alt="explosion nucléaire" className= {styles.imgContent} />
            </div>
            <div className= {styles.homeText}>
                <p>Nous sommes en 2113. Une catastrophe planétaire a fait disparaître 98% de la population humaine de la surface de la Terre. La plupart des villes sont détruites. Pourtant, un combat sans merci a éclaté pour le contrôle des ruines. l'enjeu : s'emparer des armes, des matières premières-et du pouvoir. Les différentes bandes sont prêtes à tout pour prendre possession des terres et réduire en esclavage les hommes. Ton nom est Bob 'Cold Blood' Cooper. Tu es le meilleur de ton clan, une véritable machine de guerre sur deux jambes, un esprit tranchant comme une lame. On t'a envoyé en mission secrète : toi, seul, contre 99 ennemis...</p>
            </div>
            <div className= {styles.homeLink}>
                <Link to={`story/${datas[0].id}`}>démarrer une partie</Link>
            </div>
            
        </>
    )  
}

export default Home