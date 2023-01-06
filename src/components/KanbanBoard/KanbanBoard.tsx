import React, { useEffect, useState } from "react";
import Columns from "./Columns/Columns";
import styles from "./index.module.scss";

const KanbanBoard = () => {
  const [authorId, setAuthorId] = useState("");
  const arr = [1, 2, 3];

  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <h1>Lorem Board</h1>
        <h4>books of</h4>
        <form action="" className={styles.form}>
          <input
            type="text"
            placeholder="Enter Author Id"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>
      <div className={styles.columnsWrapper}>
        {arr.map((_, i) => (
          <Columns key={i} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
