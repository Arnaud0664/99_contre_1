import styles from '../style/modules_css/Place.module.css';
import first from '../assets/nucleair.jpg';
import skin from '../assets/desert.jpg'

function Place() {
	
    return (
        <div className= {styles.container}>
            <div className= {styles.place}>
                <img src= {first} alt="explosion nucléaire" className= {styles.placeImg} />
            </div>
            <div className= {styles.skin}>
                <img src= {skin} alt="" className= {styles.skinImg} />
            </div>
        </div>
    )
}

export default Place;