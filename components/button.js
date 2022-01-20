import styles from '../styles/components/Button.module.css'


export default function Button({ label1, label2, bg, marginRight }) {
    return (
        <button className={styles.styledButton}>{label1}<br />{label2}</button>
    )
}