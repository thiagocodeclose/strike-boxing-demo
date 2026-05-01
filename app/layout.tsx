// @ts-nocheck
import type { Metadata } from 'next';
import { Barlow_Condensed, Barlow } from 'next/font/google';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';
import './globals.css';

import { KorivaLivePreview } from '@/components/KorivaLivePreview';
const heading = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800', '900'], variable: '--font-heading' });
const body    = Barlow({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });

export async function generateMetadata(): Promise<Metadata> {
  const cfg = await getKorivaConfig();
  return {
    title: cfg?.seo?.title ?? 'Strike Boxing — Miami, FL',
    description: cfg?.seo?.description ?? "Miami's most electrifying boxing boutique. Elite coaching, high-energy classes, real fighters.",
    keywords: cfg?.seo?.keywords ?? ['boxing Miami', 'boxing classes', 'kickboxing Miami', 'boutique fitness'],
    openGraph: { title: cfg?.seo?.title ?? 'Strike Boxing', images: cfg?.seo?.og_image ? [cfg.seo.og_image] : [] },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg  = await getKorivaConfig();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body className={`${heading.variable} ${body.variable} bg-sk-bg text-sk-text antialiased`}>
        {children}
        <KorivaLivePreview />
      </body>
    </html>
  );
}
