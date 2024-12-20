import crypto from "crypto";

export const generateCodeVerifier = () => {
  const array = new Uint8Array(128);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};

export const generateCodeChallenge = async (verifier) => {
  const hashed = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
  const base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)));
  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
};
