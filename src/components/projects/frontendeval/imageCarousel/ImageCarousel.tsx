import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./ImageCarousel.module.css";

interface ImageProps {
  imageData: {
    kind: "string";
    data: { thumbnail: string };
  }[];
}

const DisplayCarousel = ({ imageData }: ImageProps) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    let timerId: number | undefined;
    timerId = setTimeout(() => {
      imgIndex < imageData.length - 1
        ? setImgIndex((imgIndex) => imgIndex + 1)
        : setImgIndex(0);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [imgIndex]);

  return (
    // <div>
    imageData.length === 0 ? (
      <span>Loading</span>
    ) : (
      <div className={styles.carousel}>
        <div
          style={{
            backgroundImage: `url(${imageData[imgIndex].data?.thumbnail})`,
            height: "400px",
            width: "450px",
            display: "flex",
          }}
          className={styles["carousel-inner"]}
        >
          <div
            className={styles.left}
            onClick={() =>
              imgIndex === 0
                ? setImgIndex(imageData.length - 1)
                : setImgIndex((imgIndex) => imgIndex - 1)
            }
          >
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className={styles.center}></div>
          <div
            className={styles.right}
            onClick={() =>
              imgIndex === imageData.length - 1
                ? setImgIndex(0)
                : setImgIndex((imgIndex) => imgIndex + 1)
            }
          >
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>
      </div>
    )
  );
};

const ImageCarousel = () => {
  const [imageData, setImageData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://www.reddit.com/r/aww/top/.json?t=all"
    );
    console.log(data.data.children);
    setImageData(data.data.children);
  };
  useEffect(() => {
    fetchData();
  }, [imageData]);

  return (
    <div className={styles.app}>
      <h2 className={styles.title}>Image Carousel</h2>
      <DisplayCarousel imageData={imageData} />
    </div>
  );
};

export default ImageCarousel;
