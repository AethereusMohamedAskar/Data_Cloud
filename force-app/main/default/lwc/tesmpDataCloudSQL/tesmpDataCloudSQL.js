import { LightningElement, wire } from 'lwc';
import fetchDataBasedOnAccountId from '@salesforce/apex/DataCloudQueryData.fetchDataBasedOnAccountId';
import { getRecord } from 'lightning/uiRecordApi';

const fields = ['Account.id']; // Add fields as needed

export default class AccountDetailsComponent extends LightningElement {
    accountId;
    dataList = [];

    @wire(getRecord, { recordId: '$accountId', fields })
    wiredAccount({ error, data }) {
        if (data) {
            this.accountId = data.fields.Id.value;
            this.retrieveAccountData();
        } else if (error) {
        }
    }

    retrieveAccountData() {
        fetchDataBasedOnAccountId({ accountId: this.accountId })
            .then(result => {
                this.dataList = result;
            })
            .catch(error => {
            });
    }
}