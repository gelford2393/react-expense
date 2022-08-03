import React from "react";

const AddExpense = ({ setShowExpense, showExpense }) => {
  const handleOnClick = () => {
    setShowExpense(!showExpense);
  };

  return (
    <div className="new-expense">
      <button onClick={handleOnClick}>Add New Expense</button>
    </div>
  );
};

export default AddExpense;
