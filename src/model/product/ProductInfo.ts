export class ProductInfo {
  id: string;
  product_id: string;
  description: string;
  link: string;
  created_date: string;
  modified_date: string;

  constructor(info?: any) {
      this.id = info?.id || '';
      this.product_id = info?.product_id || '';
      this.description = info?.description || '';
      this.link = info?.link || '';
      this.created_date = info?.created_date || '';
      this.modified_date = info?.modified_date || '';
  }
}
