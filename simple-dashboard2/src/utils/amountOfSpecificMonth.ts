import dataForSpecificMonth from "./dataofSpecificMonth";
import {Transaction} from '../utils/dataofSpecificMonth'

const calculateAmount=(monthName:string,year:number)=>{
  const result:Transaction[]= dataForSpecificMonth(monthName,year);
  let total:number=0;
  result.map((transactions)=>{
    total+=transactions.amount;
  })
return total;
}

export default calculateAmount;