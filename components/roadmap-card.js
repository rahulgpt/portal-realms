import styles from '../styles/components/RoadmapCard.module.css';
import Image from 'next/image';

const RoadmapCard = ({ image, year, content }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image src={image} layout='fill' objectFit='contain' />
            </div>
            <p className={styles.year}>{year}</p>
            <p className={styles.content}>{content}</p>
        </div>
    )
}

export default RoadmapCard;