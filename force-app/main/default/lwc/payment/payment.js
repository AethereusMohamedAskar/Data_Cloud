import { LightningElement ,wire,track,api} from 'lwc';
import makeApiRequest from '@salesforce/apex/DataCloudQueryData.makeApiRequest';
export default class Payment extends LightningElement {
    @api recordId;
    
    @track dataObjects;
    paymentColumns = [
        { label: 'Amount', fieldName: 'Amount__c' },
        { label: 'Status', fieldName: 'Status__c' },
        { label: 'Method', fieldName: 'Method__c' },
        { label: 'Payment Date', fieldName: 'PaymentDate__c'}
        
    ];
    @wire(makeApiRequest, { AccountId: '$recordId' })
    wiredData({ error, data }) {
        if (data) {
            this.dataObjects = JSON.parse(data);
            console.log('Payment Data',JSON.stringify(this.dataObjects.data));
            console.log(typeof this.dataObjects);
        } else if (error) {
            console.error('Error fetching data:', error);
        }
    }
    

}