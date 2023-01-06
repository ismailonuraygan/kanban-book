import React from 'react'
import Columns from './Columns/Columns';
import styles from './index.module.scss';

const KanbanBoard = () => {
  return (
    <div className={styles.wrapper}>
      <form action=""></form>
      <Columns />
    </div>
  )
}

export default KanbanBoard