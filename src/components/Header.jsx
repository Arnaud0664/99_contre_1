import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
import styles from '../style/modules_css/Header.module.css';

function Header() {
    return (
        <header>
            <div className= {styles.logoDiv}>
            <img src={logo} alt= "logo Fortnite" className= {styles.logo}/>
            </div>
            <nav className= {styles.headerNav}>
				<Link to="/">Accueil</Link>
				<Link to="/about">Point de sauvegarde</Link>
		    </nav>
        </header>
    )
}

export default Header;