import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={css.gallery}>
            {images.map(({ id, alt_description, color, urls, likes, description }) => <ImageCard
                openModal={openModal}
                key={id}
                alt_description={alt_description}
                color={color}
                urls={urls}
                likes={likes}
                description={description}
            />)}
        </ul>
    )
}

export default ImageGallery




