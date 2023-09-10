import axios from 'axios';
import { FetchProps } from '../types/FetchProps';
const { VITE_API_BASE_URL } = import.meta.env;

const http = axios.create({
  baseURL: VITE_API_BASE_URL,
});

export const useApi = () => ({
  async findWeather<T>(endpont: string): Promise<FetchProps<T>> {
    try {
      const response = await http.get<T>(endpont);
      return { data: response?.data, error: null };
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        return { data: null, error: { ...e.response?.data, clientMessage: 'cidade não encontrada' } };
      } else {
        return {
          data: null,
          error: { cod: '0', message: 'unexpected error', clientMessage: 'cidade não encontrada' },
        };
      }
    }
  },
});
