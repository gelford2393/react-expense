import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = ({ expenseItems }) => {
  const displayContent =
    expenseItems.length > 0 ? (
      expenseItems.map((expense, i) => {
        return (
          <li className="expenses-list__fallback" key={i}>
            <ExpenseItem
              i={i}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </li>
        );
      })
    ) : (
      <li className="expenses-list__fallback">
        <p>No Expense Found.</p>
      </li>
    );
  console.log(displayContent);
  return (
    <>
      <ul className="expenses-list">{displayContent}</ul>
    </>
  );
};

export default ExpenseList;
