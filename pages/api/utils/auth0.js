import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_SECRET,
  scope: "openid profile",
  redirectUri: `${process.env.AUTH0_REDIRECT_URI}/api/callback`,
  postLogoutRedirectUri: process.env.AUTH0_REDIRECT_URI,
  session: {
    cookieSecret: process.env.COOKIE_SECRET,
    cookieLifetime: 60 * 60 * 8,
    cookieSameSite: "none",
    storeIdToken: true,
    storeAccessToken: true,
    storeRefreshToken: true,
  },
  oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 10000,
  },
});
