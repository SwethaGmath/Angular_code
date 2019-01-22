export class ManuRegForm {
    constructor(
        public companyName: string,
        public accType?:Array<string>,
        public businessType?:string,
        public legalStatus?: string,
        public websiteURL?:string,
        public establishedYr?:number,
        public mobileNumber?:number,
        public landlineNumber?:number,
        public emailId?:string,
        public proprietorName?:string,
        public address1?:string,
        public address2?:string,
        public states?:Array<string>,
        public city?:string,
        public PINcode?:number,
        public propEmailId?:string,
        public propDOB?:Date,
        public invoiceAddress1?:string,
        public invoiceAddress2?:string,
        public invoiceSate?:Array<string>,
        public invoiceCity?:string,
        public invoicePINCode?:number,
        public accountHolder?:string,
        public accountNumber?:string,
        public IFSC?:string
        
    ){}
}
