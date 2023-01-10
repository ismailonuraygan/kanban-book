import React from 'react'
import { Skeleton } from "@mui/material";
import styles from './index.module.scss';

const EmptyStateColumn = () => {
  return (
    <div className={styles.emptyStateContainer}>
          <div className={styles.emptyStateCard}>
            <div className={styles.firstRow}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </div>
            <div className={styles.secondRow}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </div>
            <div className={styles.thirdRow}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </div>
          </div>
          <p>There is no board to show!</p>
        </div>
  )
}

export default EmptyStateColumn