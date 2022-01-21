import styles from '../styles/components/TeamMember.module.css';
import Image from 'next/image';

export default function TeamMember({ memTile, memSubTitle, color }) {
    color ||= '#ECD6FD';

    return (
        <div className={styles.container}>
            <div className={styles.teamMemberBG} style={{ backgroundColor: color }}>
                <div className={styles.imageWrapper}>
                    <Image src='/images/team-members/eugene.png' layout='fill' objectFit='contain' />
                </div>
            </div>

            <div className={styles.teamMemeberTitle}>Eugene Ling</div>
            <div className={styles.teamMemeberSubTitle}>Creative Director</div>
        </div>
    )
}