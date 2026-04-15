import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Strategic Finance Advisory & Automation | FPnA People | Toronto",
    template: "%s | FPnA People Inc.",
  },
  description:
    "Toronto-based fractional CFO, Power BI automation, and FP&A consulting for PE portfolio companies and high-growth businesses. CPA, FCA. Ex-KPMG.",
  keywords: [
    "fractional CFO Toronto",
    "fractional controller",
    "Power BI automation",
    "FP&A consulting",
    "strategic finance advisory Canada",
    "PE portfolio finance",
    "Dynamics BC365 reporting",
    "Yardi Power BI",
    "exit readiness advisory",
    "AI for finance",
  ],
  authors: [{ name: "Fahad Younus, CPA, FCA" }],
  openGraph: {
    title: "Strategic Finance Advisory & Automation | FPnA People",
    description:
      "Fractional CFO, Power BI automation, and AI for PE portfolio companies and high-growth businesses. Toronto · Canada · US.",
    url: site.url,
    siteName: "FPnA People Inc.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FPnA People Inc.",
    description:
      "Fractional CFO, Power BI automation, and FP&A consulting for PE portfolios and growth companies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
