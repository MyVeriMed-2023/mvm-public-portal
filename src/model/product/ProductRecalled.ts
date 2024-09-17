export class  ProductRecalled {
    id: string;
    created_date: string;
    description: string;
    modified_date: string;
    product_refrence: string;
    publish_date: string;
    withdrawal_date: string | null;


    constructor(product?: any) {
      this.id = product?.id || '';
      this.created_date  = product?.created_date || '';
      this.description  = product?.description  || '';
      this.modified_date  = product?.modified_date  || '';
      this.product_refrence  = product?.product_refrence  || '';
      this.publish_date  = product?.publish_date  || '';
      this.withdrawal_date  = product?.withdrawal_date  || '';

  }
  }
