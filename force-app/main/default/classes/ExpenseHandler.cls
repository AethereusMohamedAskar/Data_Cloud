public with sharing class ExpenseHandler {
    @AuraEnabled(cacheable=true)
    public static List<Expense__c> getmyexpense(){
        try{
        List<Expense__c> myexpense = new List<Expense__c>();
        myexpense = [SELECT Id,Name,Amount__c,Expense_Date__c,Status__c,Expense_Category__c,Comments__c FROM Expense__c where User__c=:UserInfo.getUserId() ORDER BY createddate desc];
        return myexpense;
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Expense__c> getexpenserequest(){
        try{
        List<Expense__c> expenserequest = new List<Expense__c>();
        expenserequest = [SELECT Id,Name,Amount__c,Expense_Date__c,Status__c,Expense_Category__c,User__r.ManagerId FROM Expense__c where User__r.ManagerId=:UserInfo.getUserId() ORDER BY createddate desc];
        return expenserequest;
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }



}