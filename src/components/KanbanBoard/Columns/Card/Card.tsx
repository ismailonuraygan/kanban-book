import React, { useState } from "react";
import styles from "./index.module.scss";

const Card = ({ book }) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  /* console.log(book); */
  return (
    <div className={styles.cardWrapper}>
      <button className={styles.cardHeader} onClick={() => handleClick()}>
        <div className={open ? styles.titleOpen : styles.titleClose}>
          {book.title}
        </div>
      </button>
      <div className={open ? styles.bodyOpen : styles.body}>
        <div className={styles.content}>
          <div className={styles.cardContent}>
            <div className={styles.editions}>{book.edition_count} Editions</div>
            <p>First Published: {book.first_publish_year}</p>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.pages}>
              <p>{book.number_of_pages_median} pages</p>
            </div>
            <div className={styles.readTime}>
              <p>32 hours read time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
