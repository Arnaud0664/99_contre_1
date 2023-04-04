import styles from '../style/modules_css/Navigation.module.css';
import flecheG from '../assets/fleche-gauche.png';
import flecheD from '../assets/fleche-droite (2).png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import datas from '../datas/Datas.json'



function Navigation(props) {

    const urlParams = useParams();
    const thisPage = datas.find(({ id }) => id === urlParams.id);
    console.log(props.apple);
    
   //equip.push(datas.ammoG, datas.pumpG, datas.healthG, datas.shieldG, datas.trapG, datas.gourdG, 
    //datas.appleG, datas.boogieG, datas.grenadeG, datas.mushG, datas.rocketG, datas.huntingG, datas.reboundG, datas.sniperG)
    
    return (
        <div className= {styles.navBlock}>
            <p>{props.question === undefined ? null : props.question}</p>
            
            <div className= {styles.branches} >
                <div className= {styles.branche1}>
                    <span>{props.branche1}</span><br />
                    <Link to={`/story/${props.destination1}`}>
                        <button className= {styles.branche_button} onClick={() => props.setApple(props.apple + thisPage.apple1)}>
                            <img src={flecheG} alt="flèche gauche" className={styles.arrowL} />
                        </button>
                    </Link>
                </div>
                <div>{/*s'il n'y a pas d'embranchement, les emplacements pour le texte, le lien et l'image de celui-ci sont masqués*/}
                    <span>{props.branche2 === null ? null : props.branche2}</span><br />
                    <Link to={props.branche2 === undefined ? null : `/story/${props.destination2}`}>
                        <img 
                        src={props.branche2 === undefined ? null : flecheD} 
                        alt='' 
                        className={props.branche2 === undefined ? null : styles.arrowR}
                        />
                    </Link>
                </div>      
            </div>
        </div>
    )
}

export default Navigation;