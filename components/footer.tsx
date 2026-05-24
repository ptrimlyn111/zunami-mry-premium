export function Footer() {
  return (
    <footer className="bg-[#06251C] px-6 py-16 text-[#F6EAD2]">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-4xl font-bold">
            Zunami
            <span className="text-[#D4AF37]"> Mry</span>
          </h3>

          <p className="mt-5 leading-8 text-white/65">
            Creative performance & luxury cultural experience
            dengan sentuhan tradisional Indonesia.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-[#D4AF37]">
            Navigation
          </h4>

          <div className="mt-5 space-y-3 text-white/70">
            <p>Beranda</p>
            <p>Layanan</p>
            <p>Portfolio</p>
            <p>Kontak</p>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-[#D4AF37]">
            Contact
          </h4>

          <div className="mt-5 space-y-3 text-white/70">
            <p>instagram : @zunami_mry</p>
            <p>+62 895 6110 99430</p>
            <p>Indonesia, Riau, Indragiri Hilir, Tembilahan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}