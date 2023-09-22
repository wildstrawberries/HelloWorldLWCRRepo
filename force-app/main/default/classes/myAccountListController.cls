public with sharing class myAccountListController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String strAccountName)
    {
        String strKey = '%'+strAccountName+'%';
        List<Account> accList = [SELECT Id,Name,AccountNumber FROM Account WHERE name like :strKey LIMIT 50];
        return accList;
    }
}