import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses } from "./fake-data";

function App() {
  const [initialExpense, setInitialExpense] = useState(expenses);
  const [showExpense, setShowExpense] = useState(false);

  const onSaveNewExpense = (expense) => {
    setShowExpense(false);
    setInitialExpense((prevInitialExpense) => {
      return [expense, ...prevInitialExpense];
    });
  };

  return (
    <>
      {!showExpense && (
        <AddExpense showExpense={showExpense} setShowExpense={setShowExpense} />
      )}
      {showExpense && (
        <NewExpense
          onAddExpense={onSaveNewExpense}
          setShowExpense={setShowExpense}
        />
      )}
      <Expenses expenses={initialExpense} />;
    </>
  );
}

export default App;
