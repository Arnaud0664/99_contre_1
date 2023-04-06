import styles from '../style/modules_css/Equipment.module.css';
import apple from '../assets/pomme.jpg';
import boogie from '../assets/boogie-bombs.jpg';
import mush from '../assets/champi.png';
import grenade from '../assets/grenade.jpeg';
import kit from '../assets/kit.jpg';
import rocket from '../assets/lance-roquette-legendaire.jpg';
import ammo from '../assets/mun.jpg';
import rafale from '../assets/rafale.jpg';
import sniper from '../assets/sniperOr.webp';
import gourd from '../assets/gourde.jpg';
import pump from '../assets/pump.jpg';
import hunt from '../assets/chasse.webp';
import rebound from '../assets/rebound.jpg';
import trap from '../assets/piege.jpg';
import shield from '../assets/bouclier.jpg';

function Equipment(props) {
    
    return (
        <div className= {styles.equipContainer}>
            <div className={styles.iconContainer}>
                <div className={styles.icon}>
                    <img src={apple} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={mush} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={kit} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={shield} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={gourd} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={ammo} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={grenade} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={boogie} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={trap} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={rafale} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={pump} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={hunt} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={sniper} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={rocket} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={rebound} alt="" className={styles.iconTabContent} />
                </div>
            </div>
            <table>
                <tbody>
                    <tr> 
                        <th>pomme</th>
                        <td>{props.apple}</td>
                    </tr>
                    <tr>
                        <th>champignon</th>
                        <td>{props.mush}</td>
                    </tr>
                    <tr> 
                        <th>kit de soin</th>
                        <td>{props.health}</td>
                    </tr>
                    <tr> 
                        <th>potion de bouclier</th>
                        <td>{props.shield}</td>
                    </tr>
                    <tr>
                        <th>gourde du brave</th>
                        <td>{props.gourd}</td>
                    </tr>
                    <tr>
                        <th>munitions</th>
                        <td>{props.ammo}</td>
                    </tr>
                    <tr>
                        <th>grenade</th>
                        <td>{props.grenade}</td>
                    </tr>
                    <tr>
                        <th>grenade boogie-woogie</th>
                        <td>{props.boogie}</td>
                    </tr>
                    <tr>
                        <th>piège</th>
                        <td>{props.trap}</td>
                    </tr>
                    <tr>
                        <th>fusil d'assaut</th>
                        <td>{props.AR}</td>
                    </tr>
                    <tr>
                        <th>fusil à pompe</th>
                        <td>{props.pump}</td>
                    </tr>
                    <tr>
                        <th>fusil de chasse</th>
                        <td>{props.hunting}</td>
                    </tr>
                    <tr>
                        <th>fusil sniper</th>
                        <td>{props.sniper}</td>
                    </tr>
                    <tr>
                        <th>lance-roquette</th>
                        <td>{props.rocket}</td>
                    </tr>
                    <tr>
                        <th>rebondisseur</th>
                        <td>{props.rebound}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Equipment;