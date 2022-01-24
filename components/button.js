import styles from '../styles/components/Button.module.css'


export default function Button({ label, bg }) {
    label = label.split(':');

    return (
        <button className={`${styles.styledButton} ${bg && styles.styledButtonBG}`}>
            {label.map(el => (
                <span key={el}>{el}<br /></span>
            ))}
        </button>
    )
}