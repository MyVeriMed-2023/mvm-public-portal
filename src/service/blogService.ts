
import axiosInstance from '@/shared/intecepter/axiosInstance';
const apiUrl = 'http://172.21.111.241:5000/api/v1';

export async function getBlogUpdates() {
    try {
        const response = await axiosInstance.get(`${apiUrl}/blogs/`, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            // Assuming the response data is an array of blog objects
            return {
                success: true,
                updates: response.data.data, // Adjust according to your API response structure
            };
        } else {
            return { success: false, message: response.data.message || 'Failed to fetch blog updates' };
        }
    } catch (error) {
        console.error('Error fetching blog updates:', error);
        return { success: false, message: 'An error occurred while fetching blog updates' };
    }
}

export async function getBlogById(id:any) {
    try {
        const response = await axiosInstance.get(`${apiUrl}/blogs/action?id=${id}`, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            // Assuming the response data contains the blog object
            return {
                success: true,
                blog: response.data.data, // Adjust according to your API response structure
            };
        } else {
            return { success: false, message: response.data.message || 'Failed to fetch blog details' };
        }
    } catch (error) {
        console.error('Error fetching blog details:', error);
        return { success: false, message: 'An error occurred while fetching blog details' };
    }
}