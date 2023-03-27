//import datas from '../datas/datas.json';
import styles from "../style/modules_css/Story.module.css";
import Place from "../components/Place";
import Action from "../components/Action";
import Equipment from "../components/Equipment";
import Navigation from "../components/Navigation";

function Story() {
    return (
        <>
            <Place />
            <Action />
            <div className= {styles.nav_equip_container}>
                <Navigation />
                <Equipment />
            </div>
        </>
    )
        
    
}

export default Story