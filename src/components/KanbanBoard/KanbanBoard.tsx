import React, { useEffect, useState } from "react";
import Columns from "./Columns/Columns";
import styles from "./index.module.scss";
import { transformKanban } from "../../utils/utilities";
import { getAuthor } from "../../pages/api";
import { MoonLoader } from "react-spinners";
import EmptyStateColumn from "../EmptyStateColumn/EmptyStateColumn";

const KanbanBoard = () => {
  const [authorId, setAuthorId] = useState("123456");
  console.log(authorId);
  const [transformedBook, setTransformedBook] = useState({});
  const [isLoading, setLoading] = useState(true);

  async function getBooks() {
    const response = await getAuthor(authorId);
    const newDoc = transformKanban(response);
    /* console.log(newDoc, "newDoc") */
    /* console.log(response, "pure"); */
    /* console.log(data); */
    setTransformedBook(newDoc);
    setLoading(false);

    console.log(transformedBook, "abc");
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(!isLoading);
    getBooks();
    setLoading(!isLoading);
  }

  useEffect(() => {
    try {
      getBooks();
    } catch (err) {
      throw new Error("There is a error :" + err);
    }
  }, []);

  return (
    <>
      <div className={styles.formWrapper}>
        <h1>Lorem Board</h1>
        <h4>books of</h4>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Enter Author Id"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          />
          <button>submit</button>
          <div className={isLoading ? styles.loading : styles.notLoading}>
            <MoonLoader color="black" size={20} />
            Loading...
          </div>
        </form>
      </div>
      {Object.keys(transformedBook).length !== 0 ? (
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
      ) : (
        <EmptyStateColumn />
      )}
    </>
  );
};

export default KanbanBoard;
