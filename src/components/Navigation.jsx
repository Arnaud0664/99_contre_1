import styles from '../style/modules_css/Navigation.module.css';
import flecheG from '../assets/fleche-gauche.png';
import flecheD from '../assets/fleche-droite (2).png';
import { Link } from 'react-router-dom';


function Navigation(props) {
    return (
        <div className= {styles.navBlock}>
            <p>{props.question}</p>
            <div className= {styles.branches} >
                <div>
                    <span>{props.branche1}</span><br />
                    <Link to={`/story/${props.destination1}`}>
                        <img src={flecheG} alt="flèche gauche" className={styles.arrowL} />
                    </Link>
                </div>
                <div>
                    <span>{props.branche2}</span><br />
                    <Link to={`/story/${props.destination2}`}>
                        <img src={flecheD} alt="flèche droite" className={styles.arrowR} />
                    </Link>
                </div>      
            </div>
        </div>
    )
}

export default Navigation;