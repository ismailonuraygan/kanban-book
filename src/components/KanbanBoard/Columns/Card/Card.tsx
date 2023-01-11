import React, { FC, useState } from "react";
import styles from "./index.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { CardProps } from "../../../../../types/type";

const Card: FC<CardProps> = ({ book }) => {
  const [open, setOpen] = useState<boolean>(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.cardWrapper}>
      <button className={styles.cardHeader} onClick={() => handleClick()}>
        <div className={open ? styles.titleOpen : styles.titleClose}>
          {book.title}
        </div>
        <span className={open ? styles.iconOpen : styles.iconClose}>
          <ExpandMoreOutlinedIcon />
        </span>
      </button>
      <div className={open ? styles.bodyOpen : styles.body}>
        <div className={styles.content}>
          <div className={styles.cardContent}>
            <div className={styles.editions}>{book.edition_count} Editions</div>
            <p>First Published: {book.first_publish_year}</p>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.pages}>
              <LayersOutlinedIcon style={{ width: "14px" }} />
              <p>{book.number_of_pages_median} pages</p>
            </div>
            <div className={styles.readTime}>
              <AccessTimeIcon style={{ width: "14px" }} />
              <p>32 hours read time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
