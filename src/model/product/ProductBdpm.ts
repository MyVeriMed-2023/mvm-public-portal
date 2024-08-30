export class ProductBdpm {
    id: string;
    code_cis: string;
    code_substance: string;
    denomination_substance: string;
    designation_element: string;
    dosage_substance: string;
    link_number: string;
    nature_component: string;
    reference_dosage: string;

    constructor(product_bdpm?: any) {
        this.id = product_bdpm?.id || '';
        this.code_cis = product_bdpm?.product_id || '';
        this.code_substance = product_bdpm?.code_substance || '';
        this.denomination_substance = product_bdpm?.denomination_substance || '';
        this.designation_element = product_bdpm?.designation_element || '';
        this.dosage_substance = product_bdpm?.dosage_substance || '';
        this.link_number = product_bdpm?.link_number || '';
        this.nature_component = product_bdpm?.nature_component || '';
        this.reference_dosage = product_bdpm?.reference_dosage || '';
    }
  }
