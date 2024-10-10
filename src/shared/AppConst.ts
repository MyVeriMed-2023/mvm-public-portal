export class AppConst {
  static readonly appUrl = "https://www.app.myverimed.com/";
  static readonly appLinkedinUrl =
    "https://www.linkedin.com/company/mvmed-agency/";
  static readonly euUnionUrl =
    "https://plm-portal.ema.europa.eu/ePIDetails/?epiid=76aee351-1a2d-ee11-a81c-6045bda028a5";
  static readonly ansmproductUrl =
    "https://base-donnees-publique.medicaments.gouv.fr/";
  static readonly apiBaseUrl = "https://www.testapi.myverimed.com//api/v1";
  // static readonly apiBaseUrl = 'http://127.0.0.1:5000/api/v1'
  static readonly appName = "MyVeriMed®";

  static readonly status = {
    valid: {
      value: "VALID",
      color: "#249b24",
      desc: "Product Know & secured by MyVeriMed",
      title: "VERIFIED",
      textClass: "text-white",
    },
    danger: {
      value: "DANGER",
      color: "#f51109",
      desc: "Product known by myVeriMed. But Product was expired / recalled",
      title: "DANGER",
      textClass: "text-white",
    },
    warning: {
      value: "",
      color: "#FF8C00",
      desc: "Product recorded in Health Authority database where manufatured. But Orgin of the product unknown by MyVeriMed",
      title: "NOT KNOWN",
      textClass: "text-white",
    },
    info: {
      value: "INFO",
      color: "#FFF600",
      desc: "Known by MyVeriMed. New information added",
      title: "CAUTION",
      textClass: "text-black",
    },
  };

  static readonly scanningType = {
    scanning: "Scan",
  };

  static readonly userTypes = [
    { value: "medical-doctor", label: "Medical Doctor" },
    { value: "non-medical-staff", label: "Non-Medical Staff" },
    { value: "patient", label: "Patient" },
  ];
}
