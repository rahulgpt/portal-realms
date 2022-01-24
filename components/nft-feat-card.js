import styles from '../styles/components/NFTFeatureCard.module.css';
import Image from 'next/image';

const NFTFeatCard = ({ image, title, content }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image src={image} layout='fill' objectFit='contain' />
            </div>
            <p className={styles.title}>{title}</p>
            <p className={styles.content}>{content}</p>
        </div>
    )
}

export default NFTFeatCard;