import styles from '../style/modules_css/Navigation.module.css';
import flecheG from '../assets/fleche-gauche.png'
import flecheD from '../assets/fleche-droite (2).png'

function Navigation() {
	
    return (
        <div className= {styles.navBlock}>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ?"</p>
            <div className= {styles.branches}>
                <div>
                    <span>réponse 1</span><br />
                    <img src= {flecheG} alt="flèche gauche" className= {styles.arrowL} />
                </div>
                <div>
                    <span>réponse 2</span><br />
                    <img src= {flecheD} alt="flèche droite" className= {styles.arrowR} />
                </div>
            </div>
        </div>
    )
}

export default Navigation;