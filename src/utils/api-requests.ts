import {
  APIResponse,
  ListAPIResponse,
  PaginatedAPIResponse,
} from './api-requests-type';
import { _siteUrl } from './constants';

const SERVER_ENDPOINT = _siteUrl;
async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('Content-Type') || '';
  const isJson = contentType.includes('application/json');
  const data = isJson ? await response.json() : await response.text();
  if (!response.ok) {
    const message = isJson
      ? data.message || response.statusText
      : response.statusText;
    throw new Error(message);
  }
  return data;
}
export async function apiCreate<T>(
  endpoint: string,
  data: any
): Promise<APIResponse<T>> {
  const response = await fetch(`${SERVER_ENDPOINT}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return handleResponse<APIResponse<T>>(response);
}

export async function apiUpdate<T>(
  endpoint: string,
  data: any
): Promise<APIResponse<T>> {
  const response = await fetch(`${SERVER_ENDPOINT}${endpoint}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse<APIResponse<T>>(response);
}

export async function apiFetch<T>(
  endpoint: string
): Promise<PaginatedAPIResponse<T>> {
  const response = await fetch(`${SERVER_ENDPOINT}${endpoint}`);

  return handleResponse<PaginatedAPIResponse<T>>(response);
}

export async function apiFetchRev<T>(
  endpoint: string
): Promise<APIResponse<T>> {
  const url = `${SERVER_ENDPOINT}${endpoint}`;

  const response = await fetch(url, {
    method: 'GET',
  });

  return handleResponse<APIResponse<T>>(response);
}

export async function apiFormData<T>(
  endpoint: string,
  formData: any
): Promise<APIResponse<T>> {
  const response = await fetch(`${SERVER_ENDPOINT}${endpoint}`, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });

  return handleResponse<APIResponse<T>>(response);
}

export async function apiFetchSingleURL<T>(
  endpoint: string
): Promise<APIResponse<T>> {
  const response = await fetch(`${SERVER_ENDPOINT}${endpoint}`);
  return handleResponse<APIResponse<T>>(response);
}

export async function apiFetchList<T>(
  endpoint: string,
  page?: number,
  limit?: number
): Promise<ListAPIResponse<T>> {
  let url = `${SERVER_ENDPOINT}${endpoint}`;

  if (page !== undefined && limit !== undefined) {
    url += `?page=${page}&limit=${limit}`;
  }

  const response = await fetch(url, {
    method: 'GET',
  });

  return handleResponse<ListAPIResponse<T>>(response);
}

export async function apiDelete<T>(endpoint: string): Promise<APIResponse<T>> {
  const response = await fetch(`${SERVER_ENDPOINT}${endpoint}`, {
    method: 'DELETE',
  });

  return handleResponse<APIResponse<T>>(response);
}
