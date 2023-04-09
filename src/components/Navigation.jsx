import styles from '../style/modules_css/Navigation.module.css';
import flecheG from '../assets/fleche-gauche.png';
import flecheD from '../assets/fleche-droite (2).png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import datas from '../datas/Datas.json';

function Navigation(props) {
    const urlParams = useParams();
    const thisPage = datas.find(({ id }) => id === urlParams.id);

    return (
        <div className= {styles.navBlock}>
            <p>{props.question === undefined ? null : props.question}</p>
            <div className= {styles.branches} >
                <div className= {styles.branche1}>
                    <span>{props.branche1}</span><br />
                    <Link 
                        to={`/story/${props.destination1}`} 
                        onClick={(Link) => { /* destinations bloquées en fonction de l'équipement  */
                            if(thisPage.id === "27" && props.AR < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de fusil...")
                            }
                            if(thisPage.id === "33" && props.grenade < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de grenade...")
                            }
                            if(thisPage.id === "40" && props.shield < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de potion de bouclier...")
                            }
                            if(thisPage.id === "42" && props.shield < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de potion de bouclier...")
                            }
                            if(thisPage.id === "44" && props.shield < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de potion de bouclier...")
                            }
                            if(thisPage.id === "64" && props.grenade < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de grenade...")
                            }
                            if(thisPage.id === "65" && props.grenade < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de grenade...")
                            }
                            if(thisPage.id === "69" && props.gourd < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de gourde...")
                            }
                            if(thisPage.id === "70" && props.gourd < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de gourde...")
                            }
                            if(thisPage.id === "74" && props.gourd < 1) {
                                Link.preventDefault();
                                alert("tu n'as pas de gourde...")
                            }
                        }}>
                        {(thisPage.id === "27" && props.AR < 1) ||/* au clic sur une destination bloquée, le butin n'est pas ajouté */
                        (thisPage.id === "33" && props.grenade < 1) ||
                        (thisPage.id === "40" && props.shield < 1) ||
                        (thisPage.id === "42" && props.shield < 1) ||
                        (thisPage.id === "44" && props.shield < 1) ||
                        (thisPage.id === "64" && props.grenade < 1) ||
                        (thisPage.id === "65" && props.grenade < 1) ||
                        (thisPage.id === "69" && props.gourd < 1) ||
                        (thisPage.id === "70" && props.gourd < 1) ||
                        (thisPage.id === "74" && props.gourd < 1) ? 
                            <button disabled="disabled" className={styles.branche_button} >
                                <img 
                                src={flecheG} 
                                alt='' 
                                className={styles.arrowL}
                                />
                            </button> :
                            <button 
                                className={styles.branche_button} 
                                onClick={() => { /* si la destination est possible, fonctions d'ajout au butin */
                                    if(thisPage.apple1) props.addApple(props.apple + thisPage.apple1);
                                    if(thisPage.apple1L) props.addApple(props.apple - thisPage.apple1L);
                                    if(thisPage.mush1) props.addMush(props.mush + thisPage.mush1);
                                    if(thisPage.mush1L) props.addMush(props.mush - thisPage.mush1L);
                                    if(thisPage.health1) props.addHealth(props.health + thisPage.health1);
                                    if(thisPage.health1L) props.addHealth(props.health - thisPage.health1L);
                                    if(thisPage.shield1) props.addShield(props.shield + thisPage.shield1);
                                    if(thisPage.shield1L) props.addShield(props.shield - thisPage.shield1L);
                                    if(thisPage.gourd1) props.addGourd(props.gourd + thisPage.gourd1);
                                    if(thisPage.gourd1L) props.addGourd(props.gourd - thisPage.gourd1L);
                                    if(thisPage.ammo1) props.addAmmo(props.ammo + thisPage.ammo1);
                                    if(thisPage.ammo1L) props.addAmmo(props.ammo - thisPage.ammo1L);
                                    if(thisPage.grenade1) props.addGrenade(props.grenade + thisPage.grenade1);
                                    if(thisPage.grenade1L) props.addGrenade(props.grenade - thisPage.grenade1L);
                                    if(thisPage.boogie1) props.addBoogie(props.boogie + thisPage.boogie1);
                                    if(thisPage.boogie1L) props.addBoogie(props.boogie - thisPage.boogie1L);
                                    if(thisPage.trap1) props.addTrap(props.trap + thisPage.trap1);
                                    if(thisPage.trap1L) props.addTrap(props.trap - thisPage.trap1L);
                                    if(thisPage.AR1) props.addAR(props.AR + thisPage.AR1);
                                    if(thisPage.pump1) props.addPump(props.pump + thisPage.pump1);
                                    if(thisPage.hunting1) props.addHunting(props.hunting + thisPage.hunting1);
                                    if(thisPage.sniper1) props.addSniper(props.sniper + thisPage.sniper1);
                                    if(thisPage.rocket1) props.addRocket(props.rocket + thisPage.rocket1);
                                    if(thisPage.rebound1) props.addRebound(props.rebound + thisPage.rebound1);
                                    if(thisPage.rebound1L) props.addRebound(props.rebound - thisPage.rebound1L);
                                }}>
                                <img src={flecheG} alt="flèche gauche" className={styles.arrowL} />
                            </button>
                        }
                    </Link>
                </div>
                <div>{/* s'il n'y a pas de deuxième chemin, les emplacements pour le texte, le lien et l'image de celui-ci sont masqués */}
                    <span>{props.branche2 === null ? null : props.branche2}</span><br />
                    <Link 
                        to={props.branche2 === undefined ? null : `/story/${props.destination2}`} 
                        onClick={(Link) => { /* destinations bloquées/activées et ajout ou non du butin pour le deuxième chemin */
                            if(thisPage.id === "27" && props.AR > 0) {
                                Link.preventDefault();
                                alert("tu as déjà un fusil...")
                            }
                            if(thisPage.id === "33" && props.grenade > 0) {
                                Link.preventDefault();
                                alert("tu as des grenades...")
                            }
                            if(thisPage.id === "40" && props.shield  > 0) {
                                Link.preventDefault();
                                alert("tu as une potion de bouclier...")
                            }
                            if(thisPage.id === "42" && props.shield  > 0) {
                                Link.preventDefault();
                                alert("tu as une potion de bouclier...")                            
                            }
                            if(thisPage.id === "44" && props.shield  > 0) {
                                Link.preventDefault();
                                alert("tu as une potion de bouclier...")
                            }
                            if(thisPage.id === "64" && props.grenade  > 0) {
                                Link.preventDefault();
                                alert("tu as des grenades...")
                            }
                            if(thisPage.id === "65" && props.grenade  > 0) {
                                Link.preventDefault();
                                alert("tu as des grenades...")
                            }
                            if(thisPage.id === "69" && props.gourd  > 0) {
                                Link.preventDefault();
                                alert("tu as une gourde...")
                            }
                            if(thisPage.id === "70" && props.gourd  > 0) {
                                Link.preventDefault();
                                alert("tu as une gourde...")
                            }
                            if(thisPage.id === "74" && props.gourd  > 0) {
                                Link.preventDefault();
                                alert("tu as une gourde...")
                            }
                        }}>
                        {(thisPage.id === "27" && props.AR > 0) ||
                        (thisPage.id === "64" && props.grenade > 0) ||
                        (thisPage.id === "40" && props.shield > 0) ||
                        (thisPage.id === "42" && props.shield > 0) ||
                        (thisPage.id === "44" && props.shield > 0) ||
                        (thisPage.id === "64" && props.grenade > 0) ||
                        (thisPage.id === "65" && props.grenade > 0) ||
                        (thisPage.id === "69" && props.gourd > 0) ||
                        (thisPage.id === "70" && props.gourd > 0) ||
                        (thisPage.id === "74" && props.gourd > 0) ? 
                            <button disabled="disabled" className={styles.branche_button} >
                                <img 
                                src={flecheD} 
                                alt='' 
                                className={styles.arrowR}
                                />
                            </button> :
                            <button 
                                className={styles.branche_button} 
                                onClick={() => {
                                    if(thisPage.apple2) props.addApple(props.apple + thisPage.apple2);
                                    if(thisPage.apple2L) props.addApple(props.apple - thisPage.apple2L);
                                    if(thisPage.mush2) props.addMush(props.mush + thisPage.mush2);
                                    if(thisPage.mush2L) props.addMush(props.mush - thisPage.mush2L);
                                    if(thisPage.health2) props.addHealth(props.health + thisPage.health2);
                                    if(thisPage.health2L) props.addHealth(props.health - thisPage.health2L);
                                    if(thisPage.shield2) props.addShield(props.shield + thisPage.shield2);
                                    if(thisPage.shield2L) props.addShield(props.shield - thisPage.shield2L);
                                    if(thisPage.gourd2) props.addGourd(props.gourd + thisPage.gourd2);
                                    if(thisPage.gourd2L) props.addGourd(props.gourd - thisPage.gourd2L);
                                    if(thisPage.ammo2) props.addAmmo(props.ammo + thisPage.ammo2);
                                    if(thisPage.ammo2L) props.addAmmo(props.ammo - thisPage.ammo2L);
                                    if(thisPage.grenade2) props.addGrenade(props.grenade + thisPage.grenade2);
                                    if(thisPage.grenade2L) props.addGrenade(props.grenade - thisPage.grenade2L);
                                    if(thisPage.boogie2) props.addBoogie(props.boogie + thisPage.boogie2);
                                    if(thisPage.boogie2L) props.addBoogie(props.boogie - thisPage.boogie2L);
                                    if(thisPage.trap2) props.addTrap(props.trap + thisPage.trap2);
                                    if(thisPage.trap2L) props.addTrap(props.trap - thisPage.trap2L);
                                    if(thisPage.AR2) props.addAR(props.AR + thisPage.AR2);
                                    if(thisPage.pump2) props.addPump(props.pump + thisPage.pump2);
                                    if(thisPage.hunting2) props.addHunting(props.hunting + thisPage.hunting2);
                                    if(thisPage.sniper2) props.addSniper(props.sniper + thisPage.sniper2);
                                    if(thisPage.rocket2) props.addRocket(props.rocket + thisPage.rocket2);
                                    if(thisPage.rebound2) props.addRebound(props.rebound + thisPage.rebound2);
                                    if(thisPage.rebound2L) props.addRebound(props.rebound - thisPage.rebound2L);
                                }}>
                                <img 
                                src={props.branche2 === undefined ? null : flecheD} 
                                alt='' 
                                className={props.branche2 === undefined ? null : styles.arrowR}
                                />
                            </button>
                        }
                    </Link>
                </div>      
            </div>
        </div>
    )
}

export default Navigation;