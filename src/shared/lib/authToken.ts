export const generateFakeToken = () => crypto.randomUUID();

export const getAccessToken = () => {
  const raw = localStorage.getItem('auth-store');

  if (!raw) return null;

  return JSON.parse(raw).state?.accessToken || null;
};
