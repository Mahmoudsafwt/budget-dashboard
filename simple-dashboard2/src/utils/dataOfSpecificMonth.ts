import transactions from '../static data/transactions.json'
export interface Transaction {
    date: string;
    amount: number;
    payee: string;
    category: string;
  }
  const dataForSpecificMonth = (monthName: string, year: number): Transaction[] => {
  const filteredData=transactions.filter((transaction:Transaction)=>{
     const transactionDate = new Date(transaction.date);
               const month = transactionDate.toLocaleString('default', { month: 'long' });
               const fullYear = transactionDate.getFullYear();
               return monthName===month&&year===fullYear;
  })
  return filteredData;
  };
  
  export default dataForSpecificMonth;