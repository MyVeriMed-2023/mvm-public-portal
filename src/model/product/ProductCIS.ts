export class  ProductCIS {
    id: string;
    code_cis: string;
    created_date: string;
    date_amm: string;
    denomination_du_medicament: string;
    etat_commercialisation: string;
    forme_pharmaceutique: string;
    modified_date: string;
    numero_autorisation_europeenne: string | null;
    statut_amm: string;
    statut_bdm: string | null;
    surveillance_renforcee: string;
    titulaire: string;
    type_proccdure_amm: string;
    voies_d_administration: string;


    constructor(cis?: any) {
      this.id = cis?.id || '';
      this.code_cis = cis?.code_cis || '';
      this.created_date = cis?.created_date || '';
      this.date_amm = cis?.date_amm || '';
      this.denomination_du_medicament = cis?.denomination_du_medicament || '';
      this.etat_commercialisation = cis?.etat_commercialisation || '';
      this.forme_pharmaceutique = cis?.forme_pharmaceutique || '';
      this.modified_date = cis?.modified_date || '';
      this.numero_autorisation_europeenne = cis?.numero_autorisation_europeenne || '';
      this.statut_amm = cis?.statut_amm || '';
      this.statut_bdm = cis?.statut_bdm || '';
      this.surveillance_renforcee = cis?.surveillance_renforcee || '';
      this.titulaire = cis?.titulaire || '';
      this.type_proccdure_amm = cis?.type_proccdure_amm || '';
      this.voies_d_administration = cis?.voies_d_administration || '';
  }
  }
