import React from 'react';

const MasTokenLanding = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-500">MAS TOKEN</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#tokenomics" className="hover:text-yellow-500">Tokenomics</a>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">Buy Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 text-center px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          The Safest Gem on BSC
        </h2>
        <p className="text-xl text-gray-400 mb-8">Community owned, 100% secure, and built for the holders.</p>
        <div className="bg-gray-900 p-4 rounded-lg inline-block border border-yellow-500/30">
          <span className="text-gray-500 mr-2">Contract:</span>
          <span className="font-mono text-yellow-500">0x6d1...98d2</span> {/* استبدله بالعقد الكامل من الصورة */}
        </div>
      </header>

      {/* Security Section - أهم قسم للـ BscScan */}
      <section className="bg-gray-900 py-16 px-6 border-y border-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div className="p-6 bg-black rounded-xl border border-green-500/50">
            <h3 className="text-xl font-bold mb-2">✅ Ownership Renounced</h3>
            <p className="text-gray-400">The developer cannot change functions or taxes.</p>
          </div>
          <div className="p-6 bg-black rounded-xl border border-green-500/50">
            <h3 className="text-xl font-bold mb-2">🔒 Liquidity Locked</h3>
            <p className="text-gray-400">Locked for 140 days for maximum safety.</p>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-900 rounded-2xl">
            <p className="text-yellow-500 text-3xl font-bold">20M</p>
            <p className="text-gray-400">Total Supply</p>
          </div>
          <div className="p-8 bg-gray-900 rounded-2xl">
            <p className="text-yellow-500 text-3xl font-bold">3%</p>
            <p className="text-gray-400">Buy Tax</p>
          </div>
          <div className="p-8 bg-gray-900 rounded-2xl">
            <p className="text-yellow-500 text-3xl font-bold">8%</p>
            <p className="text-gray-400">Sell Tax</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-800">
        <p className="text-gray-500 mb-4">Join our community on Telegram: MASBNB15M</p>
      </footer>
    </div>
  );
};

export default MasTokenLanding;
