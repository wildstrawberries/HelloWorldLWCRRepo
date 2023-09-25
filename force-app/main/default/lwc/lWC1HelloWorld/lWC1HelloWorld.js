import { LightningElement, track } from 'lwc';
import getAccounts1 from '@salesforce/apex/myAccountListController.getAccounts';

export default class ApexImperativeMethod extends LightningElement {

  // changing the comment -- part of commit 3

  // adding comment block as part of FeatureBranch1
  // comments
  // comments
  // comments - this change was made directly in Github
  // comments - making an edit on same line as in VSC
  
  draftValues = [];

  accounts = [];
  accountList = [];
  columnList = [
    { label: 'ID', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'AccountNumber', fieldName: 'AccountNumber' },
    { label: 'Notes', fieldName: 'Notes', editable: true }
  ];
  noRecordsFound = false;

  greeting = 'World';
  greetingHandler(event) {
    this.greeting = event.target.value;
  }

  pullAccounts() {
    this.accName = this.template.querySelector("lightning-input[data-recid=input_accName]").value;
    getAccounts1({ strAccountName : this.accName })
      .then((result) => {
        this.accountList = result;
      }); 
  }

  saveAction(event) {
    var selectedRecords =  this.template.querySelector("lightning-datatable").getSelectedRows();

    this.draftValues = event.detail.draftValues;
    console.log("LOG: draftValues");
    console.log(this.draftValues);
    console.log("LOG: selectedRecords");
    console.log(selectedRecords);

    if(selectedRecords.length > 0){
      this.accounts = selectedRecords;

      selectedRecords.forEach(function(element){
          console.log(element.Name);
      });

      this.draftValues.forEach(function(element){
        console.log(element.id);
        console.log(element.Notes);
    });

    }   
  }

}
