import styles from '../style/modules_css/Story.module.css'
import Place from "../components/Place";
import Action from "../components/Action";
import Equipment from "../components/Equipment";
import Navigation from "../components/Navigation";
import datas from '../datas/Datas.json';
import { useParams, Navigate } from 'react-router';

function Story() {
    
    const urlParams = useParams();
    const thisStory = datas.find(({ id }) => id === urlParams.id);
	if (thisStory === undefined) return <Navigate to="/error" />

    return (
        <>
            <Place img= {thisStory.img} skin={thisStory.skin} />
            <Action text={thisStory.text}/>
            <div className= {urlParams.id.match(/m/) || urlParams.id.match(/132/) ? styles.nav_equip_container2 : styles.nav_equip_container}>
                <Navigation 
                branche1={thisStory.branche1} 
                branche2={thisStory.branche2}
                destination1={thisStory.destination1}
                destination2={thisStory.destination2}
                question={thisStory.question}
                />
                <Equipment />
            </div>
        </>
    )
}

export default Story