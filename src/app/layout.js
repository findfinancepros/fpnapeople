import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FPnA People Inc. — Strategic Finance Advisory & Power BI Automation",
    template: "%s | FPnA People Inc.",
  },
  description:
    "Toronto-based strategic finance advisory and Power BI automation for PE-backed portfolio companies and high-growth businesses. CPA, FCA. Ex-KPMG. 15+ years.",
  keywords: [
    "fractional CFO Toronto",
    "Power BI automation PE",
    "strategic finance advisory Canada",
    "PE portfolio finance",
    "FP&A consulting",
    "Dynamics BC365 reporting",
    "Yardi Power BI",
    "exit readiness advisory",
  ],
  authors: [{ name: "Fahad Younus, CPA, FCA" }],
  openGraph: {
    title: "FPnA People Inc. — Strategic Finance Advisory & Power BI Automation",
    description:
      "Strategic finance, Power BI automation, and AI for PE-backed and high-growth businesses. Toronto · Canada · US.",
    url: site.url,
    siteName: "FPnA People Inc.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FPnA People Inc.",
    description:
      "Strategic finance advisory and Power BI automation for PE portfolios and growth companies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
