import styles from '../style/modules_css/Story.module.css'
import Place from "../components/Place";
import Action from "../components/Action";
import Equipment from "../components/Equipment";
import Navigation from "../components/Navigation";
import datas from '../datas/Datas.json';
import { useParams, Navigate } from 'react-router';
import { useState } from 'react';


function Story() {
    const [apple, setApple] = useState(0);
    

    const urlParams = useParams();
    const thisPage = datas.find(({ id }) => id === urlParams.id);
	if (thisPage === undefined) return <Navigate to="/error" />

    return (
        <>
            <Place img= {thisPage.img} skin={thisPage.skin} />
            <Action text={thisPage.text} title={thisPage.title}/>
            <div className= {urlParams.id.match(/m/) || urlParams.id.match(/132/) ? styles.nav_equip_container2 : styles.nav_equip_container}>
                <Navigation 
                branche1={thisPage.branche1} 
                branche2={thisPage.branche2}
                destination1={thisPage.destination1}
                destination2={thisPage.destination2}
                question={thisPage.question}
                apple={apple}
                setApple={setApple}

                /*appleG={thisPage.appleG}
                mushG={thisPage.mushG}
                healthG={thisPage.kitG}
                gourdG={thisPage.gourdG}
                ammoG={thisPage.ammoG}
                grenadeG={thisPage.grenadeG}
                boogieG={thisPage.boogieG}
                pumpG={thisPage.pumpG}               
                huntingG={thisPage.huntingG}
                sniperG={thisPage.sniperG}
                rocketG={thisPage.rocketG}
                reboundG={thisPage.reboundG}

                apple1={thisPage.appleG}
                mush1={thisPage.mushG}
                health1={thisPage.kitG}
                ammo1={thisPage.ammoG}
                grenade1={thisPage.grenadeG}
                boogie1={thisPage.boogieG}
                AR1={thisPage.ARG}
                
                apple2={thisPage.appleG}
                mush2={thisPage.mushG}
                health2={thisPage.kitG}
                ammo2={thisPage.ammoG}
                grenade2={thisPage.grenadeG}
                boogie2={thisPage.boogieG}
                AR2={thisPage.ARG}*/
                />
                <Equipment apple={apple} />
            </div>
        </>
    )
}

export default Story