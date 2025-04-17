import { getToken } from './auth.service';

const url = 'http://localhost:3030/users';

const token = getToken();

export async function saveUser(name: string, username: string, password: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      name,
      username,
      password,
    }),
  });

  return response.status;
}

export async function getUsers() {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar usuários');
  }

  const data = await response.json();
  return data;
}
