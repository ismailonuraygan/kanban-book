import React, { FC } from "react";
import Card from "./Card/Card";
import styles from "./index.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ColumnsProps } from "../../../../types/type";

const Columns: FC<ColumnsProps> = ({ transformedBook, year }) => {
  const columnColorCode: string = String(Math.floor(10^6 + Math.random() * 900000));
  console.log(transformedBook);
  return (
    <div className={styles.columnsWrapper}>
      <div
        className={styles.color}
        style={{ backgroundColor: `#${columnColorCode}` }}
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
