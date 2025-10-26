// ... (Kode sebelumnya)

                    {/* Opsi 'to' level yang lebih dinamis bisa ditambahkan,
                       namun untuk menyederhanakan, kita gunakan range yang sudah ditentukan
                       dengan nilai 'from' sebagai penentu harga. */}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-gray-400">Harga Per Level:</span>
                  <span className="text-xl font-black text-green-400">Rp {currentPrice.price}</span>
                </div>
                
                <button
                  onClick={() => handleProductOrder(
                    'Joki LEVEL & EXP',
                    `Level dari ${levelRange.from} sampai ${currentPrice.to}\nHarga/Level: Rp ${currentPrice.price}`
                  )}
                  className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-black py-3 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/30 transition transform hover:scale-[1.02]"
                >
                  <ShoppingCart className="w-5 h-5 inline mr-2" /> PESAN SEKARANG
                </button>
              </div>
            </div>

            {/* Card 2: Farm Item (Expandable) */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl blur-lg group-hover:blur-xl transition opacity-0 group-hover:opacity-100"></div>
              <div className={`relative bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-xl p-6 transition overflow-hidden ${expandedCard === 'farm' ? 'h-auto' : 'h-full'}`}>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
                
                <img src="https://files.catbox.moe/102c7u.jpeg" alt="Items" className="w-full h-40 object-cover rounded-lg mb-4 brightness-90 hover:brightness-110 transition" />
                
                <h3 className="text-xl font-bold text-white mb-2">Joki FARM ITEM</h3>
                <p className="text-gray-400 text-sm mb-4">Dapatkan item langka dan *currency* dengan mudah.</p>

                <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'farm' ? 'max-h-96 opacity-100 pt-4 border-t border-cyan-500/10' : 'max-h-0 opacity-0'}`}>
                  <ul className="text-gray-300 text-sm space-y-2 mb-6">
                    <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-400" /> Farm Fragments (Mulai dari 5K)</li>
                    <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-400" /> Farm Beli Buah (Mulai dari 10K)</li>
                    <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-400" /> Farm Bones / Ectoplasm</li>
                    <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-400" /> Farm Hallow Essence</li>
                  </ul>
                  <button
                    onClick={() => handleProductOrder('Joki FARM ITEM', 'Tolong sebutkan item/currency yang ingin di-farm dan jumlahnya.')}
                    className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700 transition"
                  >
                    PESAN DETAIL
                  </button>
                </div>

                <button
                  onClick={() => setExpandedCard(expandedCard === 'farm' ? null : 'farm')}
                  className="w-full mt-4 flex justify-center items-center text-cyan-400 hover:text-white transition"
                >
                  Lihat Detail
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${expandedCard === 'farm' ? 'transform rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Card 3: Joki Awakening */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl blur-lg group-hover:blur-xl transition opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
                
                <img src="https://files.catbox.moe/k6281e.jpeg" alt="Awakening" className="w-full h-40 object-cover rounded-lg mb-4 brightness-90 hover:brightness-110 transition" />
                
                <h3 className="text-xl font-bold text-white mb-2">Joki AWAKENING Buah</h3>
                <p className="text-gray-400 text-sm mb-6">Awakening Buah Pilihanmu (Dark, Light, dll).</p>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-gray-300">Harga Mulai:</span>
                  <span className="text-2xl font-black text-cyan-400">Rp 20K</span>
                </div>
                
                <button
                  onClick={() => handleProductOrder('Joki AWAKENING Buah', 'Sebutkan Buah yang ingin di-awakening dan total skill yang ingin di-unlock.')}
                  className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-black py-3 rounded-lg font-bold hover:shadow-xl hover:shadow-green-500/30 transition transform hover:scale-[1.02]"
                >
                  <RotateCw className="w-5 h-5 inline mr-2" /> PESAN JASA
                </button>
              </div>
            </div>

            {/* Card 4: Joki Lainnya (Expandable) */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-xl blur-lg group-hover:blur-xl transition opacity-0 group-hover:opacity-100"></div>
              <div className={`relative bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-xl p-6 transition overflow-hidden ${expandedCard === 'other' ? 'h-auto' : 'h-full'}`}>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div>
                
                <img src="https://files.catbox.moe/n7r69l.jpeg" alt="Misc" className="w-full h-40 object-cover rounded-lg mb-4 brightness-90 hover:brightness-110 transition" />
                
                <h3 className="text-xl font-bold text-white mb-2">Joki LAINNYA</h3>
                <p className="text-gray-400 text-sm mb-4">Layanan kustom seperti Ras V4, Hunter Title, dll.</p>

                <div className={`overflow-hidden transition-all duration-500 ${expandedCard === 'other' ? 'max-h-96 opacity-100 pt-4 border-t border-cyan-500/10' : 'max-h-0 opacity-0'}`}>
                  <ul className="text-gray-300 text-sm space-y-2 mb-6">
                    <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-400" /> Ras V4 (Trials)</li>
                    <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-400" /> Hunter Title</li>
                    <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-400" /> Unlock Fighting Style (Godhuman, Sangin, dll.)</li>
                  </ul>
                  <button
                    onClick={() => handleProductOrder('Joki LAINNYA', 'Tolong sebutkan layanan kustom yang Anda butuhkan secara spesifik.')}
                    className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700 transition"
                  >
                    PESAN KUSTOM
                  </button>
                </div>

                <button
                  onClick={() => setExpandedCard(expandedCard === 'other' ? null : 'other')}
                  className="w-full mt-4 flex justify-center items-center text-cyan-400 hover:text-white transition"
                >
                  Lihat Detail
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${expandedCard === 'other' ? 'transform rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>

---

          {/* Feature List Joki */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-10 text-white">Kenapa Memilih Joki Kami?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-green-500/20">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-lg font-semibold text-white">100% Aman & Terpercaya</p>
                <p className="text-gray-400 text-sm mt-1">Kami menjamin keamanan akun Anda.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-cyan-500/20">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <p className="text-lg font-semibold text-white">Proses Super Cepat</p>
                <p className="text-gray-400 text-sm mt-1">Pengerjaan kilat oleh *Expert Jocker*.</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-yellow-500/20">
                <Tag className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <p className="text-lg font-semibold text-white">Harga Paling Bersaing</p>
                <p className="text-gray-400 text-sm mt-1">Kualitas premium dengan harga terbaik.</p>
              </div>
            </div>
          </div>
        </section>

---

        {/* Section 2: Produk Digital Lain */}
        <section id="digital" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-white">
              <Smartphone className="w-12 h-12 inline text-green-400 mr-3" />
              Produk <span className="text-green-400">DIGITAL</span> Lain
            </h2>
            <p className="text-xl text-gray-400">Top Up Game, Akun Premium, dan lainnya.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 5: Top Up Diamond/UC */}
            <ProductCard
              icon={<Tag className="w-8 h-8 text-green-400" />}
              title="Top Up Game Murah"
              description="Top Up Diamond Mobile Legends, UC PUBG Mobile, dan lainnya dengan harga termurah."
              price="Mulai Rp 10K"
              onOrder={() => handleProductOrder('Top Up Game Murah', 'Sebutkan game, ID, dan jumlah yang ingin di-top up.')}
            />

            {/* Card 6: Akun Premium */}
            <ProductCard
              icon={<Shield className="w-8 h-8 text-cyan-400" />}
              title="Akun Premium Streaming"
              description="Jual akun premium Netflix, Spotify, Disney+, dan platform lainnya. Bergaransi."
              price="Mulai Rp 5K/Bulan"
              onOrder={() => handleProductOrder('Akun Premium Streaming', 'Sebutkan platform dan durasi langganan yang diinginkan.')}
            />

            {/* Card 7: Jasa Pembuatan Akun */}
            <ProductCard
              icon={<Headset className="w-8 h-8 text-yellow-400" />}
              title="Jasa Pembuatan Akun"
              description="Butuh akun sosial media atau akun game baru? Kami bantu buatkan dengan cepat."
              price="Mulai Rp 5K"
              onOrder={() => handleProductOrder('Jasa Pembuatan Akun', 'Sebutkan jenis akun yang ingin dibuat (Contoh: Akun FB baru, Akun Gmail terverifikasi).')}
            />
          </div>
        </section>

---

        {/* Section 3: Kontak & CTA */}
        <section id="kontak" className="text-center py-20 bg-slate-900/50 rounded-2xl border border-cyan-500/20">
          <h2 className="text-4xl font-black mb-4 text-white">Siap Tingkatkan Akunmu?</h2>
          <p className="text-xl text-gray-400 mb-8">Hubungi kami sekarang juga untuk layanan terbaik dan tercepat!</p>
          
          <button
            onClick={() => sendToWhatsApp('Halo! Saya ingin melakukan pemesanan dan butuh konsultasi lebih lanjut.')}
            className="bg-gradient-to-r from-cyan-500 to-green-500 text-black px-10 py-4 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition transform hover:scale-105"
          >
            <Headset className="w-5 h-5 inline mr-3" /> HUBUNGI VIA WHATSAPP
          </button>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-8 text-center border-t border-cyan-500/10 mt-20">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} DIGITAL PREMIUM. All rights reserved. | <span className="text-cyan-400">Joki Blox Fruits & Produk Digital Terpercaya.</span>
        </p>
      </footer>
    </div>
  );
}


// --- Component Tambahan (ProductCard) ---
// Biasanya diletakkan di bawah atau di file terpisah (misal: ProductCard.jsx)

const ProductCard = ({ icon, title, description, price, onOrder }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl blur-lg group-hover:blur-xl transition opacity-0 group-hover:opacity-100"></div>
    <div className="relative bg-slate-900/50 backdrop-blur border border-green-500/20 rounded-xl p-6 hover:border-green-500/50 transition h-full flex flex-col justify-between">
        <div className="mb-4">
          {icon}
          <h3 className="text-xl font-bold text-white my-3">{title}</h3>
          <p className="text-gray-400 text-sm mb-6">{description}</p>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-300">Harga:</span>
            <span className="text-xl font-black text-green-400">{price}</span>
          </div>
          
          <button
            onClick={onOrder}
            className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-black py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-green-500/30 transition transform hover:scale-[1.01]"
          >
            <ShoppingCart className="w-5 h-5 inline mr-2" /> PESAN
          </button>
        </div>
    </div>
  </div>
);
