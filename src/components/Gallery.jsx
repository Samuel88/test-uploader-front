import useGallery from "../hooks/useGallery";

import style from './Gallery.module.css';

export default function Gallery() {
    const [images] = useGallery();

    return (
        <div>
            {images.map(image => (
                <img src={image} key={image} className={style.galleryImage} />
            ))}
        </div>
    )
}