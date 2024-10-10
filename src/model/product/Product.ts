import { Organization } from "../organization/organization";
import { ProductBdpm } from "./ProductBdpm";
import { ProductCIS } from "./ProductCIS";
import { ProductInfo } from "./ProductInfo";
import { ProductRecalled } from "./ProductRecalled";

export class Product {
  id: string;
  agrement_aux_collectivites: string;
  code_cip7: string;
  code_cip13: string;
  code_cis: string;
  created_date: string;
  date_de_la_declaration_de_commercialisation: string;
  etat_de_commercialisation_de_la_presentation: string;
  indications_ouvrant_droit_au_remboursement: string;
  libelle_de_la_presentation: string;
  modified_date: string;
  prix_du_medicament_en_euro: string;
  product_cis: ProductCIS;
  product_info: ProductInfo[]; // Define a more specific type if available
  product_bdpm: ProductBdpm;
  remboursement: any; // Define a more specific type if available
  statut_administratif_de_la_presentation: string;
  taux_de_remboursement: string;
  organization: Organization;
  recalled?: ProductRecalled;
  is_verified: boolean;
  is_recalled: boolean;
  is_batch_recalled: boolean;
  is_product_recalled: boolean;
  dataMatrixProps: any;

  constructor(product?: any) {
    this.id = product?.id || "";
    this.agrement_aux_collectivites = product?.agrement_aux_collectivites || "";
    this.code_cip7 = product?.code_cip7 || "";
    this.code_cip13 = product?.code_cip13 || "";
    this.code_cis = product?.code_cis || "";
    this.created_date = product?.created_date || "";
    this.date_de_la_declaration_de_commercialisation =
      product?.date_de_la_declaration_de_commercialisation || "";
    this.etat_de_commercialisation_de_la_presentation =
      product?.etat_de_commercialisation_de_la_presentation || "";
    this.indications_ouvrant_droit_au_remboursement =
      product?.indications_ouvrant_droit_au_remboursement || "";
    this.libelle_de_la_presentation = product?.libelle_de_la_presentation || "";
    this.modified_date = product?.modified_date || "";
    this.prix_du_medicament_en_euro = product?.prix_du_medicament_en_euro || "";
    this.product_cis = product?.product_cis
      ? new ProductCIS(product.product_cis)
      : new ProductCIS();
    this.product_info =
      product?.product_info?.map((info: any) => new ProductInfo(info)) || [];
    this.remboursement = product?.remboursement || null;
    this.statut_administratif_de_la_presentation =
      product?.statut_administratif_de_la_presentation || "";
    this.taux_de_remboursement = product?.taux_de_remboursement || "";
    this.product_bdpm = product?.product_bdpm
      ? new ProductBdpm(product.product_bdpm)
      : new ProductBdpm();
    this.organization = product?.is_verified
      ? new Organization(product.organization)
      : new Organization();
    this.recalled =
      product.recalled !== null
        ? new ProductRecalled(product.recalled)
        : new ProductRecalled();
    this.is_verified = product.is_verified;
    this.is_batch_recalled = product.is_batch_recalled;
    this.is_product_recalled = product.is_product_recalled;
    this.dataMatrixProps = product.data_matrix_props;
    this.is_recalled = product.is_recalled;
  }
}
