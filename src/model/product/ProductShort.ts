/* eslint-disable */
export class ProductShort {
  id: string;
  code_cis: string;
  denomination_du_medicament: string;
  statut_amm: string;
  titulaire: string;

  constructor(product?: any) {
    this.id = product?.id || '';
    this.denomination_du_medicament = product?.denomination_du_medicament || '';
    this.statut_amm = product?.statut_amm || '';
    this.titulaire = product?.titulaire || '';
    this.code_cis = product?.code_cis || '';

  }
}

/* eslint-disable */