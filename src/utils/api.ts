const API_URL = import.meta.env.VITE_API_URL;

const buildApiUrl = (path: string) => API_URL.concat('/api', path, '/');
const getToken = () => sessionStorage.getItem('access');

export const post = async ({ path, data }: { path: string; data: unknown }) =>
  fetch(buildApiUrl(path), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });

export const get = async <T>(path: string) =>
  fetch(buildApiUrl(path), {
    method: 'GET',
    headers: { Authorization: `Bearer ${getToken()}` },
  }).then((res) => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json() as T;
  });
