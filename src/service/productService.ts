import axios from 'axios';
import { Product } from '@/model/product/Product';
import { ProductShort } from '@/model/product/ProductShort';
import axiosInstance from '@/shared/intecepter/axiosInstance';

const apiUrl = 'http://127.0.0.1:5000/api/v1';

export async function getProductByCode13(code13: string): Promise<{ success: boolean; product?: Product; message?: string }> {
    try {
        const response = await axios.get(`${apiUrl}/product/get_product_by_code13`, {
            params: { code13: encodeURIComponent(code13) },
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            // Map the response to the Product model
            const product = new Product(response.data.data);
            console.log(product);

            return {
                success: true,
                product: product,
            };
        } else {
            return { success: false, message: response.data.message || 'Product fetch failed' };
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        return { success: false, message: 'An error occurred during product fetch' };
    }
}

export async function getProductShort(search: string): Promise<{ success: boolean; product?: ProductShort[]; message?: string }> {
    try {
        const response = await axiosInstance.get(`${apiUrl}/product/cis`, {
            params: { search: encodeURIComponent(search) },
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            // Map the response to the Product model
            const product = response.data.data.map((i: any) => new ProductShort(i));

            console.log(product);
            return {
                success: true,
                product: product,
            };
        } else {
            return { success: false, message: response.data.message || 'Product fetch failed' };
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        return { success: false, message: 'An error occurred during product fetch' };
    }
}
