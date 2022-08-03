import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, setShowExpense }) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(expenseData);
    onSaveExpenseData(expenseData);
    setExpenseData({ title: "", amount: "", date: "" });
  };
  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setExpenseData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const cancelOnClick = (e) => {
    setShowExpense(false);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              name="title"
              type="text"
              value={expenseData.title}
              onChange={onHandleChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              name="amount"
              type="number"
              value={expenseData.amount}
              min="0.01"
              step="0.01"
              onChange={onHandleChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              name="date"
              type="date"
              value={expenseData.date}
              min="2019-01-01"
              max="2022-12-31"
              onChange={onHandleChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelOnClick}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
