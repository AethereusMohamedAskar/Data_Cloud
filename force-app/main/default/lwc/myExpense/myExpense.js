import { LightningElement ,wire} from 'lwc';
import getmyexpense from '@salesforce/apex/ExpenseHandler.getmyexpense';
const COLUMNS=[
    {label:'Expense Id',fieldName:'Name'},
    {label:'Expense Date',fieldName:'Expense_Date__c'},
    {label:'Amount',fieldName:'Amount__c'},
    {label:'Category',fieldName:'Expense_Category__c'},
    {label:'Status',fieldName:'Status__c'},
    {label:'Comments',fieldName:'Comments__c'},
    {type:"button", typeAttributes:{
        label:"Edit",
        name:"Edit",
        value:"Edit",
        title:"Edit"
    }}
]
export default class MyExpense extends LightningElement {
    columns=COLUMNS;
myexpense=[];
myexpenseresult;
@wire(getmyexpense)
wiredmyexpense(result){
    this.myexpenseresult=result;
    if(result.data){
        this.myexpense = result.data;
    }
    else if(result.error){
        console.log('error occured while fetching the expense',result.error);
    }
}

get Norecordsfound(){
    return this.myexpense.length==0;
}
}