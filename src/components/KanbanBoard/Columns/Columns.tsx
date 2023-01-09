import React from "react";
import Card from "./Card/Card";
import styles from "./index.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Columns = ({ transformedBook, year }) => {
  const array = [1, 2, 3];
  /* console.log(transformedBook) */
  return (
    <div className={styles.columnsWrapper}>
      <div
        className={styles.color}
        style={{ backgroundColor: `#FA${year}` }}
      ></div>
      <div className={styles.columnsHeader}>
        <h1>{year}</h1>
        <MoreVertIcon className={styles.icon} />
      </div>
      <div className={styles.cards}>
        {transformedBook.map((book, i) => (
          <Card key={i} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Columns;
