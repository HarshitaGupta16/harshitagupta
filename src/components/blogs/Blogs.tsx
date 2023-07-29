import { blogsData } from "../../utils/blogsData";
import Accordian from "../common/Accordian";
import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className={styles.wrapper}>
      {blogsData.map((blog) => {
        const { id, title, image, description, link, date } = blog;
        return (
          <Accordian
            key={blog.id}
            id={id}
            title={title}
            description={description}
            category="blogs"
            image={image}
            link={link}
            mainCategory="blogs"
            date={date}
          />
        );
      })}
    </div>
  );
};

export default Blogs;
