export class Organization {
    id: string;
    org_id: string;
    org_name: string;
    org_type: string;
    time_zone: string;
    email: string;
    phone_no: string;
    address1: string;
    address2: string;
    zip_code: string;
    city: string;
    state: string;
    country: string;
    description: string;
    created_date: string;
    modified_date: string;

    constructor(organizationData?: any) {
      this.id = organizationData?.id || '';
      this.org_id = organizationData?.org_id || '';
      this.org_name = organizationData?.org_name || '';
      this.org_type = organizationData?.org_type || '';
      this.time_zone = organizationData?.time_zone || '';
      this.email = organizationData?.email || '';
      this.phone_no = organizationData?.phone_no || '';
      this.address1 = organizationData?.address1 || '';
      this.address2 = organizationData?.address2 || '';
      this.zip_code = organizationData?.zip_code || '';
      this.city = organizationData?.city || '';
      this.state = organizationData?.state || '';
      this.country = organizationData?.country || '';
      this.description = organizationData?.description || '';
      this.created_date = organizationData?.created_date || '';
      this.modified_date = organizationData?.modified_date || '';
    }
  }
