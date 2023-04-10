import styles from '../style/modules_css/Equipment.module.css';
/* affiche le butin dans un tableau avec icones */
function Equipment(props) {
    return (
        <div className= {styles.equipContainer}>
            <div className={styles.iconContainer}>
                <div className={styles.icon}>
                    <img src={"https://static1.millenium.org/articles/1/29/76/31/@/475043-pomme-article_m-1.jpg"} alt="pomme" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://jeu-bayrou.com/wp-content/uploads/2020/07/Comment-trouver-et-ce-quil-fait.jpg"} alt="champignon" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://image.jeuxvideo.com/medias-sm/153570/1535699607-2544-logo.png"} alt="trousse de soin" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://pbs.twimg.com/media/Dl8nXg-W0AEd2Ci.jpg"} alt="potion de bouclier" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://pm1.narvii.com/7594/3fb2982e0ec12803d1d6012efcbfdd9a9b27f8f8r1-512-512v2_00.jpg"} alt="gourde" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://www.ingame.de/bilder/2020/07/06/90007630/18750772-fortnite-ammo-epic-games-munition-3mec.jpg"} alt="munitions" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://static1.millenium.org/articles/1/37/02/71/@/1402148-grenade-puante-article_image_t-1.jpg"} alt="grenade" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://prod.assets.earlygamecdn.com/images/boogie-bombs.jpg?mtime=1658419882"} alt="grenade boogie" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://image.jeuxvideo.com/medias-sm/152837/1528374173-9081-logo.png"} alt="piège" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://global-img.gamergen.com/fortnite-patch-notes-v4-2-overview-text-v4-2-epic-legendaryburstassaultrifle-1920x1080-0dbeac0359176cfa28fa418c2f1ac8d2007a7e8f_0900894284.jpg"} alt="fusil" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://cdn1.dotesports.com/wp-content/uploads/2021/03/16114737/fortnite-pump-shotgun-1920x1080-0a2d495b051e-1024x576.jpg"} alt="fusil à pompe" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://static1.millenium.org/articles/7/28/92/87/@/323255-carab-article_image_t-2.jpg"} alt="fusil de chasse" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://cdn2.unrealengine.com/fortnite-dragons-breath-sniper-1900x600-988c4aa648fd.jpg"} alt="fusil sniper" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://www.breakflip.com/uploads/Azilliz/Armes%20%26%20Objets%20Chapitre%202/lance-roquette-legendaire.jpg"} alt="lance-missile" className={styles.iconTabContent} />
                </div>
                <div className={styles.icon}>
                    <img src={"https://image.jeuxvideo.com/medias-sm/153915/1539150745-3590-logo.png"} alt="rebondisseur" className={styles.iconTabContent} />
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
                        <th>munition</th>
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