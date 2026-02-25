import type { Configuration } from "@azure/msal-browser";

/* 🔐 CONFIGURACIÓN MSAL */
export const msalConfig: Configuration = {
    auth: {
        clientId: "7c9438d5-2fa5-42a4-8b7d-ad165e91c280",
        authority: "https://login.microsoftonline.com/65e3f48a-19c4-473d-b6a6-109fd4cc6377",
        redirectUri: "/",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

/* 🔑 SCOPES */
export const loginRequest = {
    scopes: [
        "User.Read",
        "api://6fa364c8-bb0f-48c0-89d3-0d6ef633e56e/access_as_user",
    ],
};