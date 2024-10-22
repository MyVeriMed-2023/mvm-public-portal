import { getRelativeTime } from "@/shared/utils/dateFormatter";
/* eslint-disable */
export class Notification {
    id: string;
    title: string;
    message: string;
    notificationType: string;
    data: any;
    status: string;
    isRead: boolean;
    createdDate: string;
    updatedAt?: string;
    expiryDate?: string | null;
    recipientId?: string;
    createdBy?: string;
    orgId?: string | null;
    branchId?: string | null;
    relativeTime?: string;
    index?: number

    /**
     * Constructor
     *
     * @param notification
     */
    constructor(notification?: any, idx?: number) {
        this.id = notification?.id || '';
        this.title = notification?.title || '';
        this.message = notification?.message || '';
        this.notificationType = notification?.notification_type || '';
        this.data = notification?.data || {};
        this.status = notification?.status || '';
        this.isRead = notification?.is_read || false;
        this.createdDate = notification?.created_date || '';
        this.updatedAt = notification?.updated_at || '';
        this.expiryDate = notification?.expiry_date || null;
        this.recipientId = notification?.recipient_id || '';
        this.createdBy = notification?.created_by || '';
        this.orgId = notification?.org_id || null;
        this.branchId = notification?.branch_id || null;
        this.relativeTime = getRelativeTime(notification?.created_date)

        this.index = idx
    }
}
