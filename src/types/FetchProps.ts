import { ErrorProps } from './ErrorProps';

export type FetchProps<T> = {
  data: T | null;
  error: ErrorProps | null;
};
