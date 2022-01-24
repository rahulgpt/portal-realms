import styles from '../styles/components/RoadmapCard.module.css';
import Image from 'next/image';

const RoadmapCard = ({ image, year, content }) => {
    content = content.split(':');

    // add idx for the key prop 

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image src={image} layout='fill' objectFit='contain' />
            </div>
            <h1 className={styles.year}>{year}</h1>
            {content.map(el => (
                <p key={el}>{el}</p>
            ))}
        </div>
    )
}

export default RoadmapCard;