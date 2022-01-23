import styles from '../styles/components/FAQElement.module.css';
import Image from 'next/image';
import { useState, useRef } from 'react';

const FAQElement = ({ label, content }) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <>
            <div className={styles.container}
                onClick={() => {
                    handleClick(open, contentRef)
                    setOpen(!open);
                }}>
                <p>{label}</p>
                <div className={styles.moreIcon}>
                    <Image src="/icons/plus-icon.svg" layout='fill' objectFit='contain' />
                </div>
            </div>
            <div className={styles.contentContainer} ref={contentRef}>
                <p>{content}</p>
            </div>
        </>
    )
}

const handleClick = (open, contentRef) => {
    if (open)
        contentRef.current.style.height = '100%';
    else
        contentRef.current.style.height = '1px';
}

export default FAQElement;