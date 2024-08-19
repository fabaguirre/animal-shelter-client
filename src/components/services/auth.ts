import { post } from '@/utils/api';

export const registerUser = (input: RegisterInput) =>
  post({
    data: input,
    path: '/auth/register',
  });
export const loginUser = (input: LoginInput) =>
  post({
    data: input,
    path: '/auth/login',
  })
    .then((data) => {
      const { access } = data as { access: string };
      sessionStorage.setItem('access', access);
    })
    .catch((err) => {
      throw new Error(err);
    });
