import styles from '../style/modules_css/Place.module.css';
import skin from '../assets/desert.jpg';
//import map from '../assets/map.jpg'


function Place(props) {
    
    
    return (
        <div className= {styles.container}>
            <div className= {styles.place}>
                <img src={`https://${props.img}`} alt='' className= {styles.placeImg} />
            </div>
            <div className= {styles.skin}>
                <img src= {skin} alt="" className= {styles.skinImg} />
            </div>
        </div>
    )
}

export default Place;