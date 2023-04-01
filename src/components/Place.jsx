import styles from '../style/modules_css/Place.module.css';
import { useEffect, useState } from 'react';


function Place(props) {
    const [image, setImage] = useState();
    
    useEffect(() => {
        if (props.skin === undefined) return;
        fetch(`https://fortnite-api.com/v2/cosmetics/br/${props.skin}`)
        .then((response) => response.json())
        .then((data) => {
            setImage(data)
        })
    }, [props.skin]);

    if(!image) return <p>chargement...</p>
    const skinImg = image.data.images.featured;
    
    return (
        <div className= {styles.container}>
            <div className= {styles.place}>
                <img src= {`https://${props.img}`} alt='' className= {styles.placeImg} />
            </div>
            <div className= {styles.skin}>
                <img src= {`${skinImg}`} alt="" className= {styles.skinImg} />
            </div>
        </div>
    )
}

export default Place;