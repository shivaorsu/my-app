import ExpenseItem from "./components/Expenseitem";


function App() {
  const expense =[
    {
      id:'e1',
      title:'Food',
      amount:23.4,
      date: new Date(2022,11,15),
    },
    {
      id:'e2',
      title:'petrol',
      amount:108.19,
      date: new Date(2022,11,12),
    },
    {
      id:'e3',
      title:'Movie',
      amount:200,
      date: new Date(2022,11,10),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
      
    </div>
  );
}

export default App;
