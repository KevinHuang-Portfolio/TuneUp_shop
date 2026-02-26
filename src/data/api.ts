import axios from 'axios';

// 雿輻 Vite ?憓??訾?????蝬脣?
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

export const getHomeProducts = () => apiClient.get('/homeProducts').then(res => res.data);
export const getTopSalesProducts = () => apiClient.get('/topSalesProducts').then(res => res.data);
export const getTopSalesProducts2 = () => apiClient.get('/topSalesProducts2').then(res => res.data);
export const getHomeNewProducts = () => apiClient.get('/homeNewProducts').then(res => res.data);

export const getCategoryProductList = () => apiClient.get('/page1ProductList').then(res => res.data);
export const getCategoryDefaultCards = () => apiClient.get('/page1DefaultCards').then(res => res.data);

// 獲取所有可能的商品來源 (增強容錯)
export const getAllProducts = async () => {
  try {
    const results = await Promise.allSettled([
      getHomeProducts(),
      getTopSalesProducts(),
      getTopSalesProducts2(),
      getHomeNewProducts()
    ]);
    
    const all = results.map(res => res.status === 'fulfilled' ? res.value : []);
    return all.flat();
  } catch (error) {
    console.error('getAllProducts 發生錯誤:', error);
    return [];
  }
};

