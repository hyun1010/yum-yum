import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const serviceKey = process.env.NEXT_PUBLIC_API_SERVICE_KEY;

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const request = async <T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  const params = config.params || {};

  try {
    const response = await api({
      ...config,
      url,
      params: { ...params, serviceKey },
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, config.method, url, params);
    throw formatError(error);
  }
};

const handleAxiosError = (
  error: unknown,
  method?: string,
  path?: string,
  params?: object
) => {
  if (error instanceof AxiosError) {
    console.error({
      method,
      path,
      params,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
  } else {
    console.error(error);
  }
};

const formatError = (error: unknown) => {
  if (error instanceof AxiosError) {
    return new Error(
      JSON.stringify({
        code: error.response?.data.code ?? error.response?.status ?? 500,
        message: error.response?.data.message ?? error.message,
      })
    );
  }
  if (error instanceof Error) return error;
  return new Error('관리자에게 문의하세요.');
};

export const errorMessage = (error: unknown) => {
  if (error instanceof Error) {
    const result = isJsonString(error.message)
      ? JSON.parse(error.message)
      : { code: 500, message: error.message };
    return result;
  }
  return { code: 500, message: '관리자에게 문의하세요.' };
};

const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};
