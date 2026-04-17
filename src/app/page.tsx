import { Button, InputGroup, MainLayout } from "../components";

export default function Home() {
  return (
    <MainLayout
      headerProps={{
        logoText: "Forto",
        navigationItems: [
          { label: "Home", href: "/" },
          { label: "Features", href: "#features" },
          { label: "Contact", href: "#contact" },
        ],
      }}
      footerText="Copyright 2026 Forto. All rights reserved."
    >
      <section className="space-y-10">
        <div id="features" className="space-y-4">
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Atomic Design Boilerplate
          </p>

          <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Struktur komponen modular untuk Next.js App Router.
          </h1>

          <p className="max-w-3xl text-slate-600">
            Halaman ini menunjukkan contoh penggunaan komponen Atom, Molecule,
            Organism, dan Template secara berlapis.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Mulai Sekarang</Button>
            <Button variant="secondary">Lihat Dokumentasi</Button>
            <Button variant="outline">Pelajari Komponen</Button>
          </div>
        </div>

        <div
          id="contact"
          className="max-w-xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="mb-1 text-lg font-semibold">
            Contoh Molecule: InputGroup
          </h2>
          <p className="mb-5 text-sm text-slate-600">
            InputGroup menggabungkan Label, Input teks, dan pesan error
            opsional.
          </p>

          <form className="space-y-4">
            <InputGroup
              id="email"
              name="email"
              label="Email"
              placeholder="nama@domain.com"
            />
            <InputGroup
              id="fullName"
              name="fullName"
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap"
              errorMessage="Nama lengkap wajib diisi."
            />

            <Button type="submit" variant="primary">
              Kirim
            </Button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}
