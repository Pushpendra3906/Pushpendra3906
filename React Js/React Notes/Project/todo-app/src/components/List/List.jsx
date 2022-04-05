import styles from "./List.module.css";

const List = ({ list }) => {
  const listItems = list.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className={styles.listContainer}>
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
