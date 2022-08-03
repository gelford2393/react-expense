import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [dateSelectedValue, setDateSelectedValue] = useState(2020);
  const onSelectedValue = (value) => {
    setDateSelectedValue(value);
  };

  const filterDisplay = expenses.filter((filteredExpense) => {
    return (
      filteredExpense.date.getFullYear().toString() ===
      dateSelectedValue.toString()
    );
  });
  console.log(filterDisplay);
  return (
    <Card className="expenses">
      <ExpenseChart chartsDataExpense={filterDisplay} />
      <ExpensesFilter
        selectedValue={dateSelectedValue}
        onSelectedValue={onSelectedValue}
      />
      <ExpenseList expenseItems={filterDisplay} />
    </Card>
  );
};

export default Expenses;
