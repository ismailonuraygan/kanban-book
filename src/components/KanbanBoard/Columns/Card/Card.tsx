import React from "react";
import styles from "./index.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
const Card = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardHeader}>
        <h1>Card Header</h1>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.editions}>6 Editions</div>
        <p>First Published: 1925</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.pages}>
          <LayersOutlinedIcon style={{ width: '14px' }} />
          <p>123 pages</p>
        </div>
        <div className={styles.readTime}>
          <AccessTimeIcon style={{ width: '14px' }} />
          <p>32 hours read time</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
