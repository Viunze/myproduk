/* Import Font Premium: Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* Variabel Warna Premium dengan Gradien */
:root {
    --color-dark: #0a0e27; /* Navy gelap premium */
    --color-light: #f0f4ff; 
    --color-accent: #00d0ff; /* Cyan elektrik */
    --color-accent-alt: #00ff88; /* Lime accent */
    --color-secondary: #111a3a; /* Card background */
    --color-tertiary: #1a2550; /* Hover layer */
    --color-hover: #00a0cc;
    --font-primary: 'Poppins', sans-serif;
    --color-wa: #25D366;
    --gradient-accent: linear-gradient(135deg, #00d0ff 0%, #00ff88 100%);
    --gradient-dark: linear-gradient(135deg, #0a0e27 0%, #111a3a 100%);
    --shadow-glow: 0 0 20px rgba(0, 208, 255, 0.3);
    --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.6);
}

/* Reset dan Dasar Premium */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    background: var(--gradient-dark);
    color: var(--color-light);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
}

/* Animated Background Effect */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(0, 208, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0, 255, 136, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
}

/* Header/Navigasi Premium dengan Glassmorphism */
header {
    background: rgba(10, 14, 39, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0, 208, 255, 0.1);
    padding: 18px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 8px 32px rgba(0, 208, 255, 0.08);
    transition: all 0.6s ease-out; /* Tambahkan Transisi untuk JS slideDown */
}

.logo {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 2px;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 8px;
}

.logo i {
    color: var(--color-accent);
}

.accent {
    color: var(--color-accent);
}

nav {
    display: flex;
    gap: 30px;
}

nav .nav-item {
    font-weight: 500;
    color: var(--color-light);
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
}

nav .nav-item::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-accent);
    transition: width 0.3s ease;
}

nav .nav-item:hover, nav .nav-item.active {
    color: var(--color-accent);
}

nav .nav-item:hover::after, nav .nav-item.active::after {
    width: 100%;
}

/* CTA Button Premium */
.cta-button {
    background: var(--gradient-accent);
    color: var(--color-dark);
    padding: 10px 24px;
    font-size: 0.9rem;
    font-weight: 700;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 208, 255, 0.5);
    text-decoration: none;
    display: inline-block;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    position: relative; /* Wajib untuk ripple effect */
    overflow: hidden; /* Wajib untuk ripple effect */
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 208, 255, 0.7);
}

.cta-button:active {
    transform: translateY(0);
}

/* Struktur Konten Utama */
main {
    padding: 60px 5%;
    max-width: 1400px;
    margin: 0 auto;
}

.product-section {
    padding: 80px 0;
    /* Hapus animation: fadeIn 0.8s ease-out; karena digantikan JS */
}

.section-header {
    margin-bottom: 70px;
    text-align: center;
}

.section-header h2 {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 15px;
    line-height: 1.2;
    /* Hapus animation: fadeInUp 0.8s ease-out both; dari CSS */
}

.section-header h2 i {
    color: var(--color-accent);
}

.section-header p {
    color: #b0b8d4;
    font-size: 1.05rem;
    font-weight: 400;
    letter-spacing: 0.8px;
    max-width: 500px;
    margin: 0 auto;
    /* Hapus animation: fadeInUp 0.8s ease-out both; dari CSS */
}

/* Grid Produk Premium */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 35px;
}

.product-card {
    background: linear-gradient(135deg, rgba(17, 26, 58, 0.8) 0%, rgba(26, 37, 80, 0.5) 100%);
    backdrop-filter: blur(10px);
    padding: 25px;
    border-radius: 12px;
    border: 1px solid rgba(0, 208, 255, 0.15);
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    /* STATE AWAL UNTUK JS SCROLL REVEAL: */
    opacity: 0; 
    transform: translateY(20px);
    /* Hapus semua animation-delay/animation statis di sini */
}

.product-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
}

.product-card:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 208, 255, 0.5);
    box-shadow: 0 20px 60px rgba(0, 208, 255, 0.25), var(--shadow-glow);
    background: linear-gradient(135deg, rgba(26, 37, 80, 1) 0%, rgba(17, 26, 58, 0.8) 100%);
}

.product-card:hover::before {
    opacity: 1;
}

.product-card:hover .product-img {
    transform: scale(1.1) rotateY(5deg);
    filter: brightness(1.2);
}

.product-img {
    height: 180px;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid rgba(0, 208, 255, 0.2);
    filter: brightness(0.95) contrast(1.1);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 15px;
    /* Hapus animation: zoomInSmooth 0.9s ease-out forwards; dari CSS */
}

.product-card h3 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: var(--color-light);
    letter-spacing: 0.5px;
}

.product-card p {
    color: #a0aac4;
    font-size: 0.95rem;
    margin-bottom: 20px;
    line-height: 1.6;
}

.buy-button {
    width: 100%;
    padding: 12px 20px;
    font-size: 0.9rem;
    font-weight: 700;
    background: linear-gradient(135deg, rgba(0, 208, 255, 0.2) 0%, rgba(0, 255, 136, 0.1) 100%);
    color: var(--color-accent);
    border: 2px solid rgba(0, 208, 255, 0.3);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    position: relative; /* Wajib untuk ripple effect */
    overflow: hidden; /* Wajib untuk ripple effect */
}

.buy-button:hover {
    background: var(--gradient-accent);
    color: var(--color-dark);
    border-color: var(--color-accent);
    box-shadow: 0 8px 24px rgba(0, 208, 255, 0.4);
    transform: translateY(-2px);
}

.buy-button:active {
    transform: translateY(0);
}

/* Card Badge */
.card-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, rgba(0, 208, 255, 0.3) 0%, rgba(0, 255, 136, 0.2) 100%);
    color: var(--color-accent);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 1px;
    border: 1px solid rgba(0, 208, 255, 0.4);
    z-index: 10;
}

.card-badge.premium {
    background: linear-gradient(135deg, rgba(0, 255, 136, 0.3) 0%, rgba(0, 208, 255, 0.2) 100%);
    color: var(--color-accent-alt);
    border-color: rgba(0, 255, 136, 0.4);
}

/* Card Footer with Price */
.card-footer {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 208, 255, 0.15);
}

.price-tag {
    color: var(--color-accent);
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
}

.buy-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.buy-button i {
    font-size: 0.85rem;
}

/* Features Section */
.features-section {
    padding: 80px 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 50px;
}

.feature-card {
    padding: 30px;
    background: linear-gradient(135deg, rgba(17, 26, 58, 0.6) 0%, rgba(26, 37, 80, 0.3) 100%);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 208, 255, 0.1);
    border-radius: 12px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    /* STATE AWAL UNTUK JS SCROLL REVEAL: */
    opacity: 0; 
    transform: translateY(20px);
}

.feature-card:hover {
    border-color: rgba(0, 208, 255, 0.4);
    box-shadow: 0 15px 45px rgba(0, 208, 255, 0.15);
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--color-accent);
    margin-bottom: 15px;
    transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
    transform: scale(1.15) rotateY(10deg);
}

.feature-card h3 {
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
}

.feature-card p {
    color: #a0aac4;
    font-size: 0.95rem;
    line-height: 1.6;
}

/* Footer WhatsApp Mengambang Premium */
.whatsapp-float {
    position: fixed;
    background: var(--gradient-accent);
    color: var(--color-dark);
    font-size: 1rem;
    padding: 12px 20px;
    bottom: 30px;
    right: 30px;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 208, 255, 0.4);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 999;
    transition: all 0.3s ease;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    /* Hapus animation: float 3s ease-in-out infinite; dari CSS agar JS mengontrol glow/pulse */
    position: relative; /* Wajib untuk ripple effect */
    overflow: hidden; /* Wajib untuk ripple effect */
}

.whatsapp-float:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 208, 255, 0.6);
}

.whatsapp-float i {
    font-size: 1.3rem;
}

.whatsapp-float .wa-number {
    font-weight: 800;
    letter-spacing: 1px;
}

/* Footer */
footer {
    padding: 60px 5% 30px;
    border-top: 1px solid rgba(0, 208, 255, 0.1);
    margin-top: 80px;
    background: linear-gradient(180deg, rgba(10, 14, 39, 0.5) 0%, rgba(10, 14, 39, 0.9) 100%);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto 40px;
}

.footer-section h4 {
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: var(--color-accent);
    letter-spacing: 0.5px;
}

.footer-section p {
    color: #a0aac4;
    font-size: 0.95rem;
    line-height: 1.8;
    margin-bottom: 8px;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 10px;
}

.footer-section ul li a {
    color: #a0aac4;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.95rem;
}

.footer-section ul li a:hover {
    color: var(--color-accent);
    padding-left: 5px;
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(0, 208, 255, 0.1);
    color: #8090a8;
    font-size: 0.9rem;
}

/* Hapus semua animasi statis CSS di sini (fadeIn, fadeInUp, zoomInSmooth, float, glow) 
   dan hanya pertahankan keyframes yang TIDAK digunakan oleh JS */

/* ANIMASI CSS UTAMA (yang tetap di CSS) */

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes zoomInSmooth {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Responsiveness Premium */
/* ... (Bagian ini tidak diubah) ... */

@media (max-width: 768px) {
    /* ... (CSS Responsif) ... */
}
