import { ProductRecalled } from "./ProductRecalled";

export class ScanResult {
  brand: string;
  holder: string;
  chemical: string;
  cip: string;
  serial_number: string;
  form: string;
  dosage: string;
  expirey: string;
  batch_number: string;
  is_serial_number_matched: SerialNumberMatched;
  status: Status;
  is_batch_recalled: boolean;
  is_product_recalled: boolean;
  is_recalled: boolean;
  recalled?: ProductRecalled;

  constructor(data?: any) {
    this.brand = data?.brand || "";
    this.holder = data?.holder || "";
    this.chemical = data?.chemical || "";
    this.cip = data?.cip || "";
    this.serial_number = data?.serial_number || "";
    this.form = data?.form || "";
    this.dosage = data?.dosage || "";
    this.expirey = data?.expirey || "";
    this.batch_number = data?.batch_number || "";
    this.is_serial_number_matched = data?.is_serial_number_matched
      ? new SerialNumberMatched(data.is_serial_number_matched)
      : new SerialNumberMatched();
    this.status = data?.status ? new Status(data.status) : new Status();

    this.recalled =
      data.recalled !== null
        ? new ProductRecalled(data.recalled)
        : new ProductRecalled();
    this.is_batch_recalled = data.is_batch_recalled;
    this.is_product_recalled = data.is_product_recalled;
    this.is_recalled = data.is_recalled;
  }

  isUnknownOrSuspect() {

    return !this.is_serial_number_matched.all_matched
  }
}

export class SerialNumberMatched {
  all_matched: boolean;
  cip_matched: boolean;
  batch_matched: boolean;
  date_matched: boolean;
  serial_matched: boolean;

  constructor(data?: any) {
    this.all_matched = data?.all_matched || false;
    this.cip_matched = data?.cip_matched || false;
    this.batch_matched = data?.batch_matched || false;
    this.date_matched = data?.date_matched || false;
    this.serial_matched = data?.serial_matched || false;
  }
}

export class Status {
  value: string;
  color: string;
  desc: string;
  textClass: string;

  constructor(data?: any) {
    this.value = data?.value || "";
    this.color = data?.color || "";
    this.desc = data?.desc || "";
    this.textClass = data?.textClass || "";
  }
}
