export class AppConst {

    static readonly appUrl = 'https://www.myverimed.com/';
    static readonly appLinkedinUrl = 'https://www.linkedin.com/company/mvmed-agency/';
    static readonly euUnionUrl = 'https://plm-portal.ema.europa.eu/ePIDetails/?epiid=76aee351-1a2d-ee11-a81c-6045bda028a5';
    static readonly ansmproductUrl = 'https://base-donnees-publique.medicaments.gouv.fr/';

    static readonly status = {
        valid: {
            value: 'VALID',
            color: '#00FF00',
            desc: 'Product Know & secured by MyVeriMed',
            title: 'VERIFIED'
        },
        danger: {
            value: 'DANGER',
            color: '#FF0800',
            desc: 'Product known by myVeriMed. But Product was expired / recalled',
            title: 'DANGER'
        },
        warning: {
            value: '',
            color: '#FF8C00',
            desc: 'Product recorded in Health Authority database where manufatured. But Orgin of the product unknown by MyVeriMed',
            title: 'NOT KNOWN'
        },
        info: {
            value: 'INFO',
            color: '#FFF600',
            desc: 'Known by MyVeriMed. New information added',
            title: 'CAUTION'
        },

    }

    static readonly scanningType = {
        scanning: 'Scan'
    }

    static readonly userTypes = [
        { value: 'medical-doctor', label: 'Medical Doctor' },
        { value: 'non-medical-staff', label: 'Non-Medical Staff' },
        { value: 'patient', label: 'Patient' }
    ];

}