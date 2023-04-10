import styles from '../style/modules_css/Place.module.css';
import { useEffect, useState } from 'react';


function Place(props) {
    const [character, setCharacter] = useState();
    
    useEffect(() => {
        if (props.skin === undefined) return;
        fetch(`https://fortnite-api.com/v2/cosmetics/br/${props.skin}`)
        .then((response) => response.json())
        .then((data) => {
            setCharacter(data)
        })
    }, [props.skin]);

    if(!character) return <p>chargement...</p>
    const skinImg = character.data.images.featured;
    
    return (
        <div className= {styles.container}>
            <div className= {styles.place}>
                <img src= {props.img} alt='jeu fortnite' className= {styles.placeImg} />
            </div>
            <div className= {styles.skin}>
                <img src= {`${skinImg}`} alt="costumes fortnite" className= {styles.skinImg} />
            </div>
        </div>
    )
}

export default Place;