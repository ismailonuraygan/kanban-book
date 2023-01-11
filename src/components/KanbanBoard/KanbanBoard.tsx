import React, { useEffect, useState } from "react";
import Columns from "./Columns/Columns";
import styles from "./index.module.scss";
import { transformKanban } from "../../utils/utilities";
import { getAuthor } from "../../pages/api";
import { MoonLoader } from "react-spinners";
import EmptyStateColumn from "../EmptyStateColumn/EmptyStateColumn";
import { ColumnsProps  } from "../../../types/type";


const KanbanBoard = () => {
  const [authorId, setAuthorId] = useState<string>("OL23919A");
  const [transformedBook, setTransformedBook] = useState<ColumnsProps | {}>({});
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isEmptyState, setEmptyState] = useState<boolean>(false);


  async function getBooks() {
    const response = await getAuthor(authorId);
    const newDoc = transformKanban(response);
    if (Object.keys(newDoc).length === 0) {
      setEmptyState(true);
    }
    setTransformedBook(newDoc);
    setLoading(false);
  }


  function handleSubmit(e: React.MouseEvent<HTMLFormElement>) {
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
            {Object.entries(transformedBook).map(([year, books]) => (
              <Columns
                key={year}
                year={year}
                transformedBook={books}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {isEmptyState && <EmptyStateColumn />}
    </>
  );
};

export default KanbanBoard;
