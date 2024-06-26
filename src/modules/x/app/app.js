import { LightningElement, wire, api } from 'lwc';
import getAttachmentsByRecordId from '@salesforce/apex/FilePreviewAndDownloadController.getAttachmentsByRecordId';

export default class FilePreviewAndDownloadComponent extends LightningElement {
    @api recordId;
    files;

    @wire(getAttachmentsByRecordId, { recordId: '$recordId' })
    wiredFiles({ error, data }) {
        if (data) {
            this.files = data;
        } else if (error) {
            console.error(error);
        }
    }
}
