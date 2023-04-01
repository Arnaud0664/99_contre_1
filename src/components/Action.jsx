import styles from '../style/modules_css/Action.module.css';
import crane from '../assets/le-crane.png';
import { useParams } from 'react-router';

function Action(props) {
    const urlParams = useParams()
    return (
        <div className= {styles.action}>
            <p className={props.title === undefined ? styles.noTitle : styles.title}>"{props.title}"</p>
            <p>{props.text}</p>
            <div className= {urlParams.id.match(/m/) ? styles.craneBlock : styles.craneBlock2}>
                <img src= {crane} alt="tête de mort" className= {styles.crane} />
                <p>fin</p>
            </div>
        </div>
    )
}

export default Action;