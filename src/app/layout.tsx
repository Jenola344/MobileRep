import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { RegionProvider } from '@/contexts/region-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });


export const metadata: Metadata = {
  title: 'AfriRep Mobile',
  description: "Africa's digital trust layer, transforming social reputation into economic opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>MobileRep — Reputation that travels with you</title>
<style dangerouslySetInnerHTML={{ __html: `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
 
  :root{
    --bg: #0B1526;
    --bg-panel: #101E36;
    --bg-panel-2: #0E1A30;
    --ink: #F4EFE3;
    --ink-muted: #9FAAC2;
    --ink-faint: #6C7893;
    --gold: #D8A63F;
    --gold-soft: rgba(216,166,63,0.16);
    --coral: #E8663F;
    --coral-soft: rgba(232,102,63,0.16);
    --hairline: rgba(244,239,227,0.12);
    --hairline-strong: rgba(244,239,227,0.22);
  }
 
  *{ box-sizing: border-box; }
  html{ scroll-behavior: smooth; }
  body{
    margin:0;
    background: var(--bg);
    color: var(--ink);
    font-family: 'IBM Plex Sans', sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
 
  ::selection{ background: var(--gold); color: #14213D; }
 
  a{ color: inherit; }
 
  .eyebrow{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .eyebrow::before{
    content:'';
    width: 18px;
    height: 1px;
    background: var(--gold);
    display:inline-block;
  }
 
  h1,h2,h3{
    font-family: 'Fraunces', serif;
    font-weight: 600;
    margin: 0;
    color: var(--ink);
  }
 
  .wrap{
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 32px;
  }
 
  section{ position: relative; }
 
  /* subtle wax-resist dot texture, nodding to adire cloth */
  .grain-bg{
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0.5;
    background-image: radial-gradient(circle at 1px 1px, rgba(244,239,227,0.05) 1px, transparent 1px);
    background-size: 22px 22px;
  }
 
  .page{ position: relative; z-index: 1; }
 
  /* ---------- NAV ---------- */
  .nav{
    position: sticky;
    top: 0;
    z-index: 20;
    background: rgba(11,21,38,0.86);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--hairline);
  }
  .nav .wrap{
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding-top: 18px;
    padding-bottom: 18px;
  }
  .logo{
    font-family: 'Fraunces', serif;
    font-weight: 700;
    font-size: 19px;
    letter-spacing: 0.01em;
  }
  .logo span{ color: var(--gold); }
  .nav-links{
    display:flex;
    gap: 28px;
    font-size: 14px;
    color: var(--ink-muted);
  }
  .nav-links a{ text-decoration:none; transition: color .2s; }
  .nav-links a:hover{ color: var(--ink); }
  .nav-cta{
    font-family:'IBM Plex Mono', monospace;
    font-size: 12px;
    border: 1px solid var(--hairline-strong);
    padding: 8px 14px;
    border-radius: 20px;
    text-decoration:none;
    color: var(--ink);
    white-space: nowrap;
    transition: border-color .2s, background .2s;
  }
  .nav-cta:hover{ border-color: var(--gold); background: var(--gold-soft); }
 
  @media (max-width: 720px){
    .nav-links{ display:none; }
  }
 
  /* ---------- HERO ---------- */
  .hero{
    padding: 96px 0 110px;
    overflow: hidden;
  }
  .hero .wrap{
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: center;
  }
  .hero h1{
    font-size: clamp(38px, 5vw, 58px);
    line-height: 1.08;
    margin: 22px 0 26px;
    letter-spacing: -0.01em;
  }
  .hero h1 em{
    font-style: italic;
    color: var(--gold);
  }
  .hero p.lede{
    font-size: 18px;
    color: var(--ink-muted);
    max-width: 46ch;
    margin-bottom: 34px;
  }
  .hero-ctas{
    display:flex;
    gap: 16px;
    flex-wrap: wrap;
  }
  .btn{
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    padding: 13px 22px;
    border-radius: 30px;
    text-decoration:none;
    display:inline-flex;
    align-items:center;
    gap:8px;
    transition: transform .2s, background .2s, border-color .2s;
  }
  .btn-primary{
    background: var(--gold);
    color: #14213D;
    font-weight: 600;
    border: 1px solid var(--gold);
  }
  .btn-primary:hover{ transform: translateY(-1px); background:#e5b555; }
  .btn-ghost{
    border: 1px solid var(--hairline-strong);
    color: var(--ink);
  }
  .btn-ghost:hover{ border-color: var(--ink-muted); }
 
  @media (max-width: 860px){
    .hero .wrap{ grid-template-columns: 1fr; }
    .hero{ padding: 64px 0 70px; }
  }
 
  /* ---------- AJO RING (signature element) ---------- */
  .ring-stage{
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  .ring-orbit{
    position: absolute;
    inset: 0;
    border: 1px dashed var(--hairline-strong);
    border-radius: 50%;
  }
  .ring-center{
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    font-family: 'IBM Plex Mono', monospace;
  }
  .ring-center .num{
    font-family: 'Fraunces', serif;
    font-size: 30px;
    color: var(--gold);
    font-weight: 700;
    display:block;
  }
  .ring-center .lbl{
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-muted);
  }
  .node{
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--bg-panel);
    border: 1px solid var(--hairline-strong);
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--ink-muted);
    animation: potPass 8s linear infinite;
  }
  @keyframes potPass{
    0%, 4%{
      background: var(--gold);
      border-color: var(--gold);
      color: #14213D;
      box-shadow: 0 0 0 6px var(--gold-soft);
      transform: scale(1.12);
    }
    9%, 100%{
      background: var(--bg-panel);
      border-color: var(--hairline-strong);
      color: var(--ink-muted);
      box-shadow: none;
      transform: scale(1);
    }
  }
 
  @media (prefers-reduced-motion: reduce){
    .node{ animation: none; }
  }
 
  @media (max-width: 860px){
    .ring-stage{ width: 240px; height: 240px; transform: scale(0.94); margin: 24px auto 0; }
  }
 
  /* ---------- SECTION SHELLS ---------- */
  .section{
    padding: 88px 0;
    border-top: 1px solid var(--hairline);
  }
  .section-head{
    max-width: 640px;
    margin-bottom: 48px;
  }
  .section-head h2{
    font-size: clamp(28px, 3.4vw, 38px);
    margin-top: 16px;
    line-height: 1.15;
  }
  .section-head p{
    color: var(--ink-muted);
    font-size: 16px;
    margin-top: 16px;
    max-width: 56ch;
  }
 
  /* reveal on scroll */
  .reveal{
    opacity: 0;
    transform: translateY(16px);
    transition: opacity .6s ease, transform .6s ease;
  }
  .reveal.in-view{ opacity: 1; transform: translateY(0); }
 
  /* ---------- PROBLEM ---------- */
  .problem-grid{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  .problem-card{
    padding: 26px;
    border: 1px solid var(--hairline);
    border-radius: 10px;
    background: linear-gradient(180deg, var(--bg-panel), transparent);
  }
  .problem-card .mark{
    font-family:'IBM Plex Mono', monospace;
    color: var(--coral);
    font-size: 13px;
  }
  .problem-card h3{
    font-size: 19px;
    margin: 12px 0 10px;
    font-weight: 600;
  }
  .problem-card p{
    color: var(--ink-muted);
    font-size: 14.5px;
    margin: 0;
  }
  @media (max-width: 860px){ .problem-grid{ grid-template-columns: 1fr; } }
 
  /* ---------- PILLARS ---------- */
  .pillars{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--hairline);
    border: 1px solid var(--hairline);
    border-radius: 12px;
    overflow: hidden;
  }
  .pillar{
    background: var(--bg-panel-2);
    padding: 34px 28px;
  }
  .pillar .tag{
    font-family:'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--gold);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .pillar h3{
    font-size: 21px;
    margin: 14px 0 12px;
  }
  .pillar p{
    color: var(--ink-muted);
    font-size: 14.5px;
  }
  @media (max-width: 860px){ .pillars{ grid-template-columns: 1fr; } }
 
  /* ---------- TRUST ---------- */
  .trust-layout{
    display:grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 56px;
    align-items: center;
  }
  .trust-list{ list-style:none; margin:0; padding:0; }
  .trust-list li{
    display:grid;
    grid-template-columns: 46px 1fr;
    gap: 16px;
    padding: 20px 0;
    border-top: 1px solid var(--hairline);
  }
  .trust-list li:first-child{ border-top:none; }
  .trust-swatch{
    width: 14px; height: 14px;
    border-radius: 50%;
    margin-top: 4px;
  }
  .trust-list h4{
    font-family: 'Fraunces', serif;
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 6px;
  }
  .trust-list p{
    margin:0;
    font-size: 14.5px;
    color: var(--ink-muted);
  }
  .swatch-1{ background: var(--gold); }
  .swatch-2{ background: #E7C77A; }
  .swatch-3{ background: var(--coral); }
 
  .score-ring{ display:flex; justify-content:center; }
 
  @media (max-width: 860px){
    .trust-layout{ grid-template-columns: 1fr; }
    .score-ring{ order:-1; }
  }
 
  /* ---------- AJO STEPS ---------- */
  .ajo-layout{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items:center;
  }
  .steps{ counter-reset: step; }
  .step{
    display:grid;
    grid-template-columns: 34px 1fr;
    gap: 16px;
    padding: 16px 0;
  }
  .step .n{
    font-family:'IBM Plex Mono', monospace;
    color: var(--gold);
    font-size: 13px;
    padding-top: 3px;
  }
  .step h4{
    font-family:'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 15.5px;
    margin: 0 0 4px;
    color: var(--ink);
  }
  .step p{ margin:0; color: var(--ink-muted); font-size: 14px; }
 
  @media (max-width: 860px){ .ajo-layout{ grid-template-columns: 1fr; } }
 
  /* ---------- VERIFY ---------- */
  .ledger{
    border: 1px solid var(--hairline);
    border-radius: 12px;
    padding: 6px;
    background: var(--bg-panel);
  }
  .ledger-row{
    display:grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
    align-items:center;
    padding: 16px 18px;
    border-bottom: 1px dashed var(--hairline);
    font-size: 14px;
  }
  .ledger-row:last-child{ border-bottom:none; }
  .ledger-row .event{ color: var(--ink); }
  .ledger-row .tag{
    font-family:'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--gold);
    border: 1px solid var(--gold-soft);
    background: var(--gold-soft);
    padding: 4px 10px;
    border-radius: 20px;
    white-space: nowrap;
  }
 
  /* ---------- HOWTO ---------- */
  .howto-layout{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .howto-col{
    border: 1px solid var(--hairline);
    border-radius: 12px;
    padding: 30px;
  }
  .howto-col .eyebrow{ margin-bottom: 14px; }
  .howto-col h3{ font-size: 22px; margin-bottom: 18px; }
  .howto-col ol{
    margin:0; padding: 0 0 0 18px;
    color: var(--ink-muted);
    font-size: 14.5px;
  }
  .howto-col li{ padding: 6px 0; }
  .howto-col li::marker{ color: var(--gold); font-family:'IBM Plex Mono', monospace; }
 
  @media (max-width: 860px){ .howto-layout{ grid-template-columns: 1fr; } }
 
  /* ---------- CTA / FOOTER ---------- */
  .cta-band{
    text-align:center;
    padding: 96px 0 64px;
  }
  .cta-band h2{
    font-size: clamp(30px, 4vw, 44px);
    max-width: 20ch;
    margin: 18px auto 28px;
    line-height: 1.15;
  }
  .cta-band .hero-ctas{ justify-content:center; }
 
  footer{
    border-top: 1px solid var(--hairline);
    padding: 40px 0 48px;
  }
  .footer-grid{
    display:grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 32px;
  }
  .disclaimer{
    font-size: 13px;
    color: var(--ink-faint);
    max-width: 60ch;
    line-height: 1.7;
  }
  .disclaimer strong{ color: var(--ink-muted); }
  .footer-meta{
    font-family:'IBM Plex Mono', monospace;
    font-size: 12px;
    color: var(--ink-faint);
    text-align: right;
  }
  @media (max-width: 720px){
    .footer-grid{ grid-template-columns: 1fr; }
    .footer-meta{ text-align:left; }
  }
 
  :focus-visible{
    outline: 2px solid var(--gold);
    outline-offset: 3px;
  }
` }} />
      </head>
      <body className={cn('font-body antialiased', inter.variable)}>
        <div className="grain-bg"></div>
        <div className="page">
          <header className="nav">
            <div className="wrap">
              <div className="logo">Mobile<span>Rep</span></div>
              <nav className="nav-links">
                <a href="#trust">Trust model</a>
                <a href="#ajo">Ajo groups</a>
                <a href="#howto">How to use</a>
              </nav>
              <a className="nav-cta" href="#cta">Get the app</a>
            </div>
          </header>
          
  <main>
 
    /*-- HERO --*/
    <section class="hero">
      <div class="wrap">
        <div>
          <div class="eyebrow">Built for Nigeria's informal workforce</div>
          <h1>Your reputation shouldn't <em>reset</em> every time you start a new job.</h1>
          <p class="lede">MobileRep is a job marketplace and Ajo savings platform where trust is earned through real vouches — not a resume — and carried with you from gig to gig, group to group.</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="#trust">See how vouching works</a>
            <a class="btn btn-ghost" href="#ajo">Explore Ajo groups</a>
          </div>
        </div>
        <div class="ring-stage" aria-hidden="true">
          <div class="ring-orbit"></div>
          <div class="ring-center">
            <span class="num">₦</span>
            <span class="lbl">This cycle's pot</span>
          </div>
          <!-- 8 nodes positioned around the circle, animation-delay staggers the "pot" -->
          <div class="node" style="left:132px; top:7px; animation-delay:0s;">MK</div>
          <div class="node" style="left:199.2px; top:34.8px; animation-delay:-1s;">AD</div>
          <div class="node" style="left:227px; top:102px; animation-delay:-2s;">CF</div>
          <div class="node" style="left:199.2px; top:169.2px; animation-delay:-3s;">TU</div>
          <div class="node" style="left:132px; top:197px; animation-delay:-4s;">SB</div>
          <div class="node" style="left:64.8px; top:169.2px; animation-delay:-5s;">NN</div>
          <div class="node" style="left:37px; top:102px; animation-delay:-6s;">RE</div>
          <div class="node" style="left:64.8px; top:34.8px; animation-delay:-7s;">JI</div>
        </div>
      </div>
    </section>
          <RegionProvider>
            {children}
            <Toaster />
          </RegionProvider>
        </div>
      </body>
    </html>
  );
}
