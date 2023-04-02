import styles from '../style/modules_css/Action.module.css';
import crane from '../assets/le-crane.png';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";

function Action(props) {
    const urlParams = useParams()
    return (
        <div className= {styles.action}>
            <p className={props.title === undefined ? styles.noTitle : styles.title}>"{props.title}"</p>
            <p>{props.text}</p>
            <div className= {urlParams.id.match(/m/) ? styles.craneBlock : styles.craneBlock2}>{/* */}
                <img src= {crane} alt="tête de mort" className= {styles.crane} />
                <p>fin</p>
                {urlParams.id === 'm24' ? null :
                    <Link 
                    to= {urlParams.id === "m68" ? '/story/49' : urlParams.id === "m124" ? '/story/107' : null}
                    className= {styles.checkpoint}>point de sauvegarde
                    </Link>
                }
            </div>
        </div>
    )
}

export default Action;