import type {
    AccountInfo,
    IPublicClientApplication
} from "@azure/msal-browser";

/* 🔐 KEYS */
const ACCESS_TOKEN_KEY = "access_token"; // lo conservamos para compatibilidad
const USERNAME_KEY = "username";

/* 💾 SESIÓN */
export const saveSession = (accessToken: string, username: string) => {
    // Guardamos aunque el accessToken venga vacío (no usamos API scope)
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken || "");
    localStorage.setItem(USERNAME_KEY, username);
};

export const clearSession = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USERNAME_KEY);
};

export const getAccessToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const getUsername = (): string | null => {
    return localStorage.getItem(USERNAME_KEY);
};

/* 👤 EXTRAER USUARIO ÚNICO DESDE EMAIL */
const getUserFromEmail = (email: string): string => {
    return email.split("@")[0];
};

/* 🧩 OBTENER USUARIO CORPORATIVO DESDE CUENTA */
const getUserFromAccount = (account: AccountInfo): string => {
    const email =
        (account.idTokenClaims as any)?.preferred_username ||
        account.username;

    return getUserFromEmail(email);
};

/* 🆕 ENTRA ID – "Obtener token"
   Ya NO pedimos access token de API (no hay API scope).
   Solo aseguramos sesión guardando el username.
*/
export const acquireAccessToken = async (
    _instance: IPublicClientApplication,
    account: AccountInfo
): Promise<string | null> => {
    const user = getUserFromAccount(account);
    // Guardamos "token" vacío para no romper compatibilidad con el resto del código
    saveSession("", user);
    return null;
};