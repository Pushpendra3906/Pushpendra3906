import React from "react";
import styles from "./List.module.css";

export default function List({ list }) {
  //['A1','A2'] ==>[<li>A1</li>,<li>A2</li>]
  //array of string ==> array of jsx

  const listItems = list.map((item, index) => {
    return (
      <li key={index}>{item}</li>
      // <div className="card" key={index}>
      //   <div className="card-body">
      //     <h5 className="card-title">{item}</h5>
      //     <button  className="btn btn-primary">
      //       Edit
      //     </button>
      //   </div>
      // </div>
    );
  });
  return (
    <div className={styles.listContainer}>
      <ul>{listItems}</ul>
    </div>
  );
}
