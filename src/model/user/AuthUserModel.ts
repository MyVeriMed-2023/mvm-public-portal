import { ScanData } from "../scan/scan";
/* eslint-disable */
export class AuthUserModel {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  account_status: string;
  account_verification: string;
  branch: string | null;
  branch_id: string | null;
  created_date: string;
  deleted_date: string;
  description: string;
  is_account_locked: boolean;
  modified_date: string;
  org_id: string | null;
  organization: string | null;
  role: any;
  role_id: string;
  user_type: string;
  scandata: ScanData[];

  constructor(data: any) {
    this.user_id = data.user_id || '';
    this.email = data.email || '';
    this.first_name = data.first_name || '';
    this.last_name = data.last_name || '';
    this.account_status = data.account_status || '';
    this.account_verification = data.account_verification || '';
    this.branch = data.branch || null;
    this.branch_id = data.branch_id || null;
    this.created_date = data.created_date || '';
    this.deleted_date = data.deleted_date || '';
    this.description = data.description || '';
    this.is_account_locked = data.is_account_locked || false;
    this.modified_date = data.modified_date || '';
    this.org_id = data.org_id || null;
    this.organization = data.organization || null;
    this.role = data.role || {};
    this.role_id = data.role_id || '';
    this.user_type = data.user_type || '';
    this.scandata = data.scans?.map((i: any, idx: number) => new ScanData(i, idx))
  }
}