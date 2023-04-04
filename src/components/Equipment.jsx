import styles from '../style/modules_css/Equipment.module.css';
import pomme from '../assets/pomme.jpg';
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

function Equipment({apple}) {
    
    return (
        <div className= {styles.equipContainer}>
            <div className={styles.iconContainer}>
                <div className={styles.iconTabBlock}>
                    <img src={pomme} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={mush} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={kit} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={gourd} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={ammo} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={grenade} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={boogie} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={trap} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={rafale} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={pump} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={hunt} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={sniper} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={rocket} alt="" className={styles.iconTabContent} />
                </div>
                <div className={styles.iconTabBlock}>
                    <img src={rebound} alt="" className={styles.iconTabContent} />
                </div>
            </div>
            <table>
                <tbody>
                    <tr> 
                        <th>pomme</th>
                        <td>{apple}</td>
                    </tr>
                    <tr>
                        <th>champignon</th>
                        <td>0</td>
                    </tr>
                    <tr> 
                        <th>kit de soin</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>gourde du brave</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>munitions</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>grenade</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>grenade boogie-woogie</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>piège</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>fusil d'assaut</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>fusil à pompe</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>fusil de chasse</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>fusil sniper</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>lance-roquette</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>rebondisseur</th>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Equipment;