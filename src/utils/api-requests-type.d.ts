export type ErrorResponse = {
  status: string;
  message: string;
};

type APIResponse<T> = {
  message?: string;
  publicUrl?: string;
  status: string;
  data: T;
};

type PaginatedAPIResponse<T> = {
  status: string;
  data: T[];
  hasMore: boolean;
  totalPages: number;
};

type ListAPIResponse<T> = {
  status: string;
  results: number;
  total?: number;
  data: T[];
};
