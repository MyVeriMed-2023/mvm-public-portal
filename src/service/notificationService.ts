import { Notification } from '@/model/notification/notification';
import { AppConst } from '@/shared/AppConst';
import axiosInstance from '@/shared/intecepter/axiosInstance';

export async function getNotifications() {
    try {
        const response = await axiosInstance.get(`${AppConst.apiBaseUrl}/notification/all`, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            // Assuming the response data is an array of blog objects
            return {
                success: true,
                notification: response.data.data.map((i:any, idx:number)=> new Notification(i, idx)), // Adjust according to your API response structure
            };
        } else {
            return { success: false, message: response.data.message || 'Failed to fetch blog updates' };
        }
    } catch (error) {
        console.error('Error fetching blog updates:', error);
        return { success: false, message: 'An error occurred while fetching blog updates' };
    }
}

export async function updateNotification(id:string[]) {
    try {
        const response = await axiosInstance.put(`${AppConst.apiBaseUrl}/notification/update`, {
            ids: id,
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {

            return {
                success: true,
                notification: response.data.data.map((i:any, idx:number)=> new Notification(i, idx)),
            };
        } else {
            return { success: false, message: response.data.message || 'Failed to fetch blog details' };
        }
    } catch (error) {
        console.error('Error fetching blog details:', error);
        return { success: false, message: 'An error occurred while fetching blog details' };
    }
}