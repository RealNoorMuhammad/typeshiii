import React, { useMemo } from 'react';
import Marquee from 'react-fast-marquee';
import './SonUpload.css';
import dex from './assets/dex.png';

import g1 from './assets/g1.jpg';
import g2 from './assets/g2.jpg';
import g3 from './assets/g3.jpg';

const FALLING_COLUMNS = 20;
const ROWS_PER_COLUMN = 14;
const TEXTS = ['$SHII', '$Shii', '$SHII'];

function FallingShiiBackground() {
  const columns = useMemo(() => Array.from({ length: FALLING_COLUMNS }, (_, i) => ({
    id: i,
    left: (i / Math.max(1, FALLING_COLUMNS - 1)) * 100,
    duration: 10 + (i % 5) * 3 + Math.random() * 4,
    delay: -(i * 0.8 + Math.random() * 5),
    opacity: 0.25 + (i % 3) * 0.08 + Math.random() * 0.1,
  })), []);

  const rowItems = useMemo(() => Array.from({ length: ROWS_PER_COLUMN * 2 }, (_, i) => (
    <span key={i} className="ts-falling-item">
      {TEXTS[i % TEXTS.length]}
    </span>
  )), []);

  return (
    <div className="ts-falling-shii" aria-hidden="true">
      {columns.map((col) => (
        <div
          key={col.id}
          className="ts-falling-column"
          style={{
            left: `${col.left}%`,
            animationDuration: `${col.duration}s`,
            animationDelay: `${col.delay}s`,
            opacity: col.opacity,
          }}
        >
          {rowItems}
        </div>
      ))}
    </div>
  );
}

function XLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SonUpload() {
  return (
    <div className="ts-page">
      <div className="ts-scanline" aria-hidden="true" />
      <main className="ts-main">
        <section className="ts-hero" id="top">
          <FallingShiiBackground />
          <div className="ts-hero-media" aria-hidden="true" />
          <div className="ts-hero-overlay" aria-hidden="true" />

          <div className="ts-hero-inner">
            <p className="ts-pill"> SOLANA_MEME_COIN</p>
            <h1 className="ts-hero-title" data-text="> TypeShii">TypeShii</h1>
            <p className="ts-hero-sub">
             Built for degens who type fast,
              move faster, and meme the loudest.
            </p>
            <div className="ts-hero-actions">
              <a href="#how" className="ts-cta-main">Buy Shii</a>
              <a href="#roadmap" className="ts-cta-secondary">Learn more</a>
              <span className="ts-hero-tagline">Vibes, volume, and velocity.</span>
            </div>
          </div>
        </section>

        <div className="ts-hero-divider" aria-hidden="true">
          <span className="ts-divider-line" />
          <span className="ts-divider-diamond" />
          <span className="ts-divider-line" />
        </div>

        <div className="ts-marquee-wrap">
          <Marquee
            className="ts-marquee"
            speed={48}
            gradient={false}
            pauseOnHover
          >
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
         <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
             <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
       <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
         <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
            <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
       <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />

                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
                   <span className="ts-marquee-item">$Shii</span>
            <span className="ts-marquee-dot" />
          </Marquee>
        </div>

        {/* Code / binary ticker — psyop vibe */}
     

        <section id="capabilities" className="ts-section ts-section-alt">
          <div className="ts-section-header">
            <h2>System Capabilities</h2>
            <p>Tools for the alley. Built for speed, memes, and chaos.</p>
          </div>
          <div className="ts-capabilities-grid">
            <div className="ts-cap-card">
              <span className="ts-cap-icon">⚡</span>
              <h3>FAST</h3>
              <p>Solana speed. Type fast, move faster. No lag, no cap.</p>
            </div>
            <div className="ts-cap-card">
              <span className="ts-cap-icon">🔓</span>
              <h3>DECENTRALIZED</h3>
              <p>No central authority. The block owns the block.</p>
            </div>
            <div className="ts-cap-card">
              <span className="ts-cap-icon">🔥</span>
              <h3>COMMUNITY DRIVEN</h3>
              <p>Built by degens. Owned by the streets. Vibes only.</p>
            </div>
            <div className="ts-cap-card">
              <span className="ts-cap-icon">👁️</span>
              <h3>UNSTOPPABLE</h3>
              <p>No roadmap. Just volume, velocity, and the next meme.</p>
            </div>
          </div>
        </section>

        <section id="manifesto" className="ts-section">
          <div className="ts-section-header">
            <h2>The TypeShii Manifesto</h2>
            <p>A message to the alley</p>
          </div>
          <div className="ts-manifesto-grid">
            <div className="ts-manifesto-block">
              <h3>TYPE FASTER</h3>
              <p>The old narrative is slow. We type at Solana speed. Memes first, apologies never.</p>
            </div>
            <div className="ts-manifesto-block">
              <h3>BREAK FREE</h3>
              <p>No VCs. No “team allocation.” Just the block, the vibes, and whoever shows up.</p>
            </div>
            <div className="ts-manifesto-block">
              <h3>JOIN THE ALLEY</h3>
              <p>Every holder is family. Every wallet is a voice. Together we move the needle.</p>
            </div>
          </div>
          <p className="ts-manifesto-cta">The choice is yours. Type slow or type Shii.</p>
        </section>

        <section id="timeline" className="ts-section ts-section-alt">
          <div className="ts-section-header">
            <h2>Operation Timeline</h2>
            <p>Missions completed. More incoming.</p>
          </div>
          <div className="ts-timeline-grid">
            <div className="ts-timeline-card">
              <span className="ts-timeline-badge">PHASE 1</span>
              <h3>Operation Alley</h3>
              <p>First wave deployed. Alley assembled. Vibes secured.</p>
            </div>
            <div className="ts-timeline-card">
              <span className="ts-timeline-badge">PHASE 2</span>
              <h3>Operation Signal</h3>
              <p>Channels live. Memes deployed. Volume rising.</p>
            </div>
            <div className="ts-timeline-card">
              <span className="ts-timeline-badge">PHASE 3</span>
              <h3>Operation Chaos</h3>
              <p>Glitches detected. They're watching. We're typing.</p>
            </div>
            <div className="ts-timeline-card ts-timeline-ongoing">
              <span className="ts-timeline-badge">ONGOING</span>
              <h3>Operation Shii</h3>
              <p>Final phase. Status: unclassified. Stay tuned.</p>
            </div>
          </div>
        </section>

        <section id="roadmap" className="ts-section">
          <div className="ts-section-header">
            <h2>The Roadmap</h2>
            <p>Our path. No cap.</p>
          </div>
          <div className="ts-roadmap-list">
            <div className="ts-roadmap-phase ts-roadmap-done">
              <span className="ts-roadmap-status">COMPLETE</span>
              <h3>Phase 01 — Infiltration</h3>
              <ul>
                <li>✓ Secure the alley</li>
                <li>✓ Recruit initial degens</li>
                <li>✓ Establish channels</li>
                <li>✓ Deploy stealth vibes</li>
              </ul>
            </div>
            <div className="ts-roadmap-phase ts-roadmap-active">
              <span className="ts-roadmap-status">ACTIVE</span>
              <h3>Phase 02 — Expansion</h3>
              <ul>
                <li>→ Launch $Shii on-chain</li>
                <li>→ DEX listings & liquidity</li>
                <li>→ Community raids & contests</li>
                <li>→ Amplify signal across the block</li>
              </ul>
            </div>
            <div className="ts-roadmap-phase">
              <span className="ts-roadmap-status">INCOMING</span>
              <h3>Phase 03 — Revelation</h3>
              <ul>
                <li>◊ Global alley expansion</li>
                <li>◊ Collabs & partnerships</li>
                <li>◊ Merch & lore drops</li>
                <li>◊ Next-level DeFi vibes</li>
              </ul>
            </div>
            <div className="ts-roadmap-phase ts-roadmap-classified">
              <span className="ts-roadmap-status">CLASSIFIED</span>
              <h3>Phase 04 — Revolution</h3>
              <ul>
                <li>? The block wins. Vibes prevail.</li>
                <li>? [REDACTED]</li>
                <li>? [REDACTED]</li>
                <li>? [REDACTED]</li>
              </ul>
            </div>
          </div>
          <p className="ts-roadmap-tagline">The alley is inevitable. Type Shii.</p>
        </section>

        <section id="gallery" className="ts-section ts-section-alt ts-gallery">
          <div className="ts-section-header">
            <h2>Gallery</h2>
            <p>Straight from the block. Vibes, art, and the $Shii universe.</p>
          </div>
          <div className="ts-gallery-grid">
          
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={g1} alt="" />
              </div>
            </div>
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={g2} alt="" />
              </div>
            </div>
            <div className="ts-gallery-item">
              <div className="ts-gallery-facet">
                <img src={g3} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="tokenomics" className="ts-section ts-section-alt">
          <div className="ts-section-header">
            <h2>Tokenomics</h2>
            <p>Contract details for $Shii are coming soon. Check back here once the launch is live.</p>
          </div>
          <div className="ts-tokenomics-grid">
            <div className="ts-token-card">
              <h3>Contract Address</h3>
              <p className="ts-token-number">
                <span>Coming soon</span>
              </p>
              <p>We will publish the official $Shii contract here after launch. Always double-check before you buy.</p>
              <button
                type="button"
                className="ts-copy-btn"
                onClick={() => navigator.clipboard && navigator.clipboard.writeText('COMING_SOON')}
                disabled
              >
                Copy CA (Coming Soon)
              </button>
            </div>
          </div>
        </section>

        <section id="how" className="ts-section">
          <div className="ts-section-header">
            <h2>How to Buy Shii</h2>
            <p>Getting your paws on $Shii takes three fast Solana moves.</p>
          </div>
          <div className="ts-steps">
            <div className="ts-step">
              <span className="ts-step-index">01</span>
              <h3>Connect a Solana Wallet</h3>
              <p>Use Phantom, Backpack, or any Solana wallet you trust. Load up with SOL for gas and buys.</p>
            </div>
            <div className="ts-step">
              <span className="ts-step-index">02</span>
              <h3>Head to a DEX</h3>
              <p>Open your favorite Solana DEX, paste the official $Shii contract address, and review the pair.</p>
            </div>
            <div className="ts-step">
              <span className="ts-step-index">03</span>
              <h3>Swap & Join the Gang</h3>
              <p>Swap SOL for $Shii, join the community channels, and help steer the narrative on-chain.</p>
            </div>
          </div>
        </section>

        <section id="community" className="ts-section ts-section-alt">
          <div className="ts-section-header">
            <h2>The TypeShii Block</h2>
            <p>We live on Solana, but the real action is where the memes and music never sleep.</p>
          </div>
          <div className="ts-community-grid">
            <div className="ts-community-card">
              <h3>Stay Posted</h3>
              <p>Follow our socials for drops, raids, contests, and lore updates straight from the alley.</p>
              <div className="ts-social-row">
                <a href="https://x.com/SonCoin_" target="_blank" rel="noopener noreferrer" className="ts-social-pill" aria-label="X / Twitter">
                  <XLogo className="ts-social-logo" />
              
                </a>
              
                <a href="https://dexscreener.com/solana" target="_blank" rel="noopener noreferrer" className="ts-social-pill" aria-label="DexScreener">
                  <img src={dex} alt="" className="ts-social-logo ts-social-logo-img" />
         
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="ts-footer">
        <div className="ts-footer-inner">
          <span>© {new Date().getFullYear()} TypeShii on Solana. All rights reserved to the streets.</span>
          <span className="ts-footer-tag">$Shii • Solana Meme Coin</span>
        </div>
      </footer>

      <div className="ts-marquee-fixed" aria-hidden="true">
        <Marquee
          className="ts-marquee"
          speed={40}
          gradient={false}
          pauseOnHover
        >
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
          <span className="ts-marquee-item">$SHII</span>
          <span className="ts-marquee-dot" />
        </Marquee>
      </div>
    </div>
  );
}

export default SonUpload;
