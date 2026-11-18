// Sign-in for client portals through Microsoft Entra External ID (FPnA Client Portal tenant).
// Clients sign in with their email and a one-time code. Access to each client section
// comes from app roles assigned in that tenant, delivered in the ID token "roles" claim.

const tenantSubdomain = process.env.CIAM_TENANT_SUBDOMAIN; // e.g. "fpnaclients"
const tenantId = process.env.CIAM_TENANT_ID;

export const authOptions = {
  providers: [
    {
      id: "fpna-clients",
      name: "FPnA Client Portal",
      type: "oauth",
      wellKnown: `https://${tenantSubdomain}.ciamlogin.com/${tenantId}/v2.0/.well-known/openid-configuration`,
      authorization: { params: { scope: "openid profile email" } },
      idToken: true,
      checks: ["pkce", "state"],
      clientId: process.env.CIAM_CLIENT_ID,
      clientSecret: process.env.CIAM_CLIENT_SECRET,
      profile(p) {
        return {
          id: p.sub || p.oid,
          name: p.name || p.email || p.preferred_username,
          email: p.email || p.preferred_username,
          roles: Array.isArray(p.roles) ? p.roles : [],
        };
      },
    },
  ],
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
