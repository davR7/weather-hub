import axios from 'axios';
const { VITE_API_BASE_URL } = import.meta.env;

const http = axios.create({
  baseURL: VITE_API_BASE_URL,
});

export const useApi = () => ({
  async findWeather<T>(endpont: string): Promise<T> {
    const response = await http.get<T>(endpont);
    return response.data;
  },
});
