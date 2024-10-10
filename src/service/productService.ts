import { Product } from '@/model/product/Product';
import { ProductShort } from '@/model/product/ProductShort';
import axiosInstance from '@/shared/intecepter/axiosInstance';
import { AppConst } from '@/shared/AppConst';


export async function getProductByCode13(code13: string, lotNo: string, location: any, dataMatrix:any): Promise<{ success: boolean; product?: Product; message?: string }> {
    try {
        const response = await axiosInstance.post(`${AppConst.apiBaseUrl}/product/get_product_by_code13`, {
            code13,
            lotNo,
            location,
            dataMatrix
        }, {
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            const product = new Product(response.data.data);
            console.log(product);
            return { success: true, product: product };
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

            const response = await axiosInstance.get(`${AppConst.apiBaseUrl}/product/cis`, {
                params: { search: encodeURIComponent(search), filter: encodeURIComponent('my') },
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
