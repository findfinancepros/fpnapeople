// Sign-in for client portals through Microsoft Entra External ID (FPnA Client Portal tenant).
// People sign in with an email and password created for them by FPnA. Access to each client section
// comes from app roles assigned in that tenant, delivered in the ID token "roles" claim.

const tenantSubdomain = process.env.CIAM_TENANT_SUBDOMAIN; // e.g. "fpnaclients"
const tenantId = process.env.CIAM_TENANT_ID;

// One OIDC provider per sign-in app in the External ID tenant. Both use the same
// tenant and user flow; each app has its own app roles and its own branding theme.
function ciamProvider(id, name, clientId, clientSecret) {
  return {
    id,
    name,
    type: "oauth",
    wellKnown: `https://${tenantSubdomain}.ciamlogin.com/${tenantId}/v2.0/.well-known/openid-configuration`,
    authorization: { params: { scope: "openid profile email" } },
    idToken: true,
    checks: ["pkce", "state"],
    clientId,
    clientSecret,
    profile(p) {
      return {
        id: p.sub || p.oid,
        name: p.name || p.email || p.preferred_username,
        email: p.email || p.preferred_username,
        roles: Array.isArray(p.roles) ? p.roles : [],
      };
    },
  };
}

const providers = [
  // Client portals (Bear & Bison): "FPnA Client Portal Web" app.
  ciamProvider("fpna-clients", "FPnA Client Portal", process.env.CIAM_CLIENT_ID, process.env.CIAM_CLIENT_SECRET),
];

// FPnA sample portal for prospects (/demo): "FPnA Demo Portal Web" app. Only switched on once its env vars exist.
if (process.env.CIAM_DEMO_CLIENT_ID && process.env.CIAM_DEMO_CLIENT_SECRET) {
  providers.push(ciamProvider("fpna-demo", "FPnA Demo Portal", process.env.CIAM_DEMO_CLIENT_ID, process.env.CIAM_DEMO_CLIENT_SECRET));
}

export const authOptions = {
  providers,
  session: { strategy: "jwt", maxAge: 8 * 60 * 60 },
  pages: { signIn: "/clients" },
  callbacks: {
    async jwt({ token, user, profile }) {
      if (profile) token.roles = Array.isArray(profile.roles) ? profile.roles : [];
      if (user && user.roles) token.roles = user.roles;
      return token;
    },
    async session({ session, token }) {
      session.user.roles = token.roles || [];
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      // Appears in Vercel runtime logs; the full sign-in history lives in the External ID tenant.
      console.log(JSON.stringify({ event: "client_portal_sign_in", email: user?.email, at: new Date().toISOString() }));
    },
  },
};

export function hasRole(session, role) {
  return !!session?.user?.roles?.includes(role);
}
