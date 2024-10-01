
import _ from "lodash";
import { AuthUserModel } from "../user/AuthUserModel";
import { getRelativeTime } from "@/shared/utils/dateFormatter";

export class ScanData {
    id: string;
    date: string;
    locationInfo: any;
    productInfo: any;
    scanType: any;
    user: AuthUserModel;
    relativeTime:string
    index?:number

    /**
     * Constructor
     *
     * @param ScanData
     */
    constructor(data?: any, idx?:number) {
        this.id = data?.id || '';
        this.date = data?.date_and_time|| '';
        this.locationInfo = data?.location_info || '';
        this.productInfo = data?.product_info || '';
        this.user = new AuthUserModel(data.user);
        this.relativeTime = getRelativeTime(data.date_and_time)
        this.index = idx
    }
}
