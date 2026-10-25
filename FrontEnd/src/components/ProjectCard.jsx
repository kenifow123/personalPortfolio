import styles from './Card.module.css'
import {useRef, useState} from "react";
import link from "../assets/link.png"
import business from "../assets/business.png"
import zoom from "../assets/zoom-in.png"






const ProjectCard = ({title, images, projectText, url}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const dialogRef = useRef(null);

    const previousImage = () => {
        setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    }

    const nextImage = () => {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
    }

    // if (!images || images.length === 0) {
    //     return null;
    // }

    const newTab = (url) => {
        console.log(url);
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className={styles.card}>

            <div className={styles.gallery}>
                {/*previous button if images has more than 1*/}
                {images.length > 1 && (<button className={`${styles.arrow} ${styles.left}`} onClick={previousImage}>&lt;</button>)}

                <img className={styles.galleryImage} src={images[currentIndex]} alt='img'/>

                {/*next button if images has more than 1*/}
                {images.length > 1 && (<button className={`${styles.arrow} ${styles.right}`} onClick={nextImage}>&gt;</button>)}
            </div>

            <h2 className={styles.title}>{title}</h2>
            <div className={styles.textContent}>
                <p>
                    {projectText}
                </p>
            </div>

            <div className={styles.links}>
                <button onClick={ () => newTab(url) }><img className={styles.icon} src={link} alt="link"/></button>
                <button onClick={() => dialogRef.current.showModal()}><img className={styles.icon} src={zoom} alt=""/></button>
            </div>


            {/*dialog for zoomed image button*/}
            <dialog
                className={styles.galleryDialog}
                ref={dialogRef}
                onClick={(e) => {
                    if (e.target === dialogRef.current) {
                        dialogRef.current.close();
                    }
                }}>
                <div className={styles.zoomedGallery}>
                    {/*previous button if images has more than 1*/}
                    {images.length > 1 && (<button className={`${styles.arrow} ${styles.left}`} onClick={previousImage}>Prev</button>)}

                    <img className={styles.zoomedImage} src={images[currentIndex]} alt='img'/>

                    {/*next button if images has more than 1*/}
                    {images.length > 1 && (<button className={`${styles.arrow} ${styles.right}`} onClick={nextImage}>Next</button>)}
                </div>
                <button className={styles.closeButton} onClick={() => dialogRef.current.close()}>X</button>
            </dialog>
        </div>
    )
}

export default ProjectCard;