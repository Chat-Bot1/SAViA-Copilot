/* 🔐 CONFIGURACIÓN MSAL (CIAM, sin scopes de API) */

// ENV requeridas
const CLIENT_ID = import.meta.env.VITE_ENTRA_CLIENT_ID as string;
const TENANT_ID = import.meta.env.VITE_ENTRA_TENANT_ID as string; // GUID
const CIAM_DOMAIN = import.meta.env.VITE_ENTRA_CIAM_DOMAIN as string; // p.ej. saviabaseconocimiento.ciamlogin.com

if (!CLIENT_ID) throw new Error("VITE_ENTRA_CLIENT_ID no está definida");
if (!TENANT_ID) throw new Error("VITE_ENTRA_TENANT_ID no está definida");
if (!CIAM_DOMAIN) throw new Error("VITE_ENTRA_CIAM_DOMAIN no está definida");

const AUTHORITY = `https://${CIAM_DOMAIN}/${TENANT_ID}/`;

// Permite controlar redirects por ENV (prod/local)
const REDIRECT_URI = (import.meta.env.VITE_REDIRECT_URI as string) || window.location.origin;
const POST_LOGOUT_REDIRECT_URI =
    (import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI as string) || window.location.origin;

export const msalConfig = {
    auth: {
        clientId: CLIENT_ID,
        authority: AUTHORITY,
        knownAuthorities: [CIAM_DOMAIN], // Requerido en B2C/CIAM
        redirectUri: REDIRECT_URI,
        postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI,
    },
    cache: {
        cacheLocation: "localStorage",
        // storeAuthStateInCookie: false, // ❌ (ya no existe en MSAL browser actual)
    },
};

/* 🔑 SCOPES: solo OIDC para sesión en la SPA */
export const loginRequest = {
    scopes: ["openid", "profile"],
};