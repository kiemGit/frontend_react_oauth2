import axios from "axios";
import { OAUTH2_CONFIG } from "./config/authconf";
import { generateCodeVerifier, generateCodeChallenge } from "./utils/pkce";

export const login = async () => {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  localStorage.setItem("code_verifier", codeVerifier);

  const authUrl = `${OAUTH2_CONFIG.authEndpoint}?response_type=code&client_id=${OAUTH2_CONFIG.clientId}&redirect_uri=${OAUTH2_CONFIG.redirectUri}&scope=${OAUTH2_CONFIG.scope}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  window.location = authUrl;
};

export const handleCallback = async () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const codeVerifier = localStorage.getItem("code_verifier");

  if (code) {
    const response = await axios.post(OAUTH2_CONFIG.tokenEndpoint, {
      grant_type: "authorization_code",
      code,
      redirect_uri: OAUTH2_CONFIG.redirectUri,
      client_id: OAUTH2_CONFIG.clientId,
      code_verifier: codeVerifier,
    });
    return response.data; // Tokens (access, refresh, etc.)
  }
};
