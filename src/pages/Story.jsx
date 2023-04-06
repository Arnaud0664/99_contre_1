import styles from '../style/modules_css/Story.module.css'
import Place from "../components/Place";
import Action from "../components/Action";
import Equipment from "../components/Equipment";
import Navigation from "../components/Navigation";
import datas from '../datas/Datas.json';
import { useParams, Navigate } from 'react-router';
import { useState } from 'react';


function Story() {
    const [apple, addApple] = useState(0);
    const [mush, addMush] = useState(0);
    const [health, addHealth] = useState(0);
    const [shield, addShield] = useState(0);
    const [gourd, addGourd] = useState(0);
    const [ammo, addAmmo] = useState(0);
    const [grenade, addGrenade] = useState(0);
    const [boogie, addBoogie] = useState(0);
    const [trap, addTrap] = useState(0);
    const [AR, addAR] = useState(0);
    const [pump, addPump] = useState(0);
    const [hunting, addHunting] = useState(0);
    const [sniper, addSniper] = useState(0);
    const [rocket, addRocket] = useState(0);
    const [rebound, addRebound] = useState(0);

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
                addApple={addApple}
                mush={mush}
                addMush={addMush}
                health={health}
                addHealth={addHealth}
                shield={shield}
                addShield={addShield}
                gourd={gourd}
                addGourd={addGourd}
                ammo={ammo}
                addAmmo={addAmmo}
                grenade={grenade}
                addGrenade={addGrenade}
                boogie={boogie}
                addBoogie={addBoogie}
                trap={trap}
                addTrap={addTrap}
                AR={AR}
                addAR={addAR}
                pump={pump}
                addPump={addPump}               
                hunting={hunting}
                addHunting={addHunting}
                sniper={sniper}
                addSniper={addSniper}
                rocket={rocket}
                addRocket={addRocket}
                rebound={rebound}
                addRebound={addRebound}
                />
                <Equipment 
                apple={apple}
                mush={mush}
                health={health}
                shield={shield}
                gourd={gourd}
                ammo={ammo}
                grenade={grenade}
                boogie={boogie}
                trap={trap}
                AR={AR}
                pump={pump}
                hunting={hunting}
                sniper={sniper}
                rocket={rocket}
                rebound={rebound}
                />
            </div>
        </>
    )
}

export default Story