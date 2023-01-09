import React, { useEffect, useState } from "react";
import Columns from "./Columns/Columns";
import styles from "./index.module.scss";
import { transformKanban } from "../../utils/utilities";
import { getAuthor } from "../../pages/api";

const KanbanBoard = () => {
  const [authorId, setAuthorId] = useState("OL26320A");
  const [transformedBook, setTransformedBook] = useState({});

  async function getBooks() {
    const response = await getAuthor(authorId);
    const newDoc = transformKanban(response);
    /* console.log(newDoc, "newDoc") */
    console.log(response, "pure");
    /* console.log(data); */
    setTransformedBook(newDoc);

    /* console.log(transformedBook, "abc"); */
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
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
      <div className={styles.wrapper}>
        <div className={styles.columnsWrapper}>
          {transformedBook &&
            Object.keys(transformedBook).map((year, i) => (
              <Columns
                key={i}
                year={year}
                transformedBook={Object.values(transformedBook)[i]}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default KanbanBoard;
