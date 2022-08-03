import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = ({ i, id, date, title, amount }) => {
  // const [newTitle, setNewTitle] = useState(title);

  return (
    <Card key={i} className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
