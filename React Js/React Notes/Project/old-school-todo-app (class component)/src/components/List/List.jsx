import styles from "./List.module.css";

const List = ({ list }) => {
  // ['A1', 'A2', 'A3'] ==> [<li>A1</li>, <li>A2</li>, <li>A3</li>]
  // Array of string  ====> Array of jsx
  const listItems = list.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className={styles.listContainer}>
      <ul>{listItems}</ul>
    </div>
  );
};

export default List;
