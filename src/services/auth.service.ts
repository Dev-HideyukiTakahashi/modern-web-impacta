export async function login(username: string, password: string) {
  const url = 'http://localhost:3030/auth/login';

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();
  if (data && data.token) return true;

  return false;
}
