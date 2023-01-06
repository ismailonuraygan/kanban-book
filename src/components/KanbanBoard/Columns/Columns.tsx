import React from "react";
import Card from "./Card/Card";
import styles from "./index.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Columns = () => {
  const array = [1, 2, 3];

  return (
    <div className={styles.columnsWrapper}>
      <div className={styles.columnsHeader}>
        <h1>1925</h1>
        <MoreVertIcon className={styles.icon} />
      </div>
      {array.map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default Columns;
