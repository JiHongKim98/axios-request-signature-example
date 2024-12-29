import { axiosInstance } from '@/apis/axiosInstance.js';

const EXAMPLE_END_POINT = '/api/v1/hello';

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzM4NCJ9.eyJ1c2VyX2lkIjoxMjM0NTY3ODkwLCJleHAiOjk5OTk5OTk5OTl9.6s3MAb4BfBlFW_j1_kPn6rkf4d5vbmrF05IXOtT1YwPqwE4x2ZmSjbatJ3QYn59y';

const body = {
  message: 'Hello World!',
};

export const postHello = async () => {
  const { data } = await axiosInstance.post(EXAMPLE_END_POINT, body, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return data;
};
