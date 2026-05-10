interface ColorConfig {
  background: string;
  foreground: string;
}

interface ThemeConfig {
  light: {
    background: string;
    foreground: string;
    card: ColorConfig;
    popover: ColorConfig;
    primary: ColorConfig;
    secondary: ColorConfig;
    muted: ColorConfig;
    accent: ColorConfig;
    destructive: ColorConfig;
    warning: ColorConfig;
    success: ColorConfig;
    info: ColorConfig;
    border: string;
    input: string;
    ring: string;
  };
  dark: {
    background: string;
    foreground: string;
    card: ColorConfig;
    popover: ColorConfig;
    primary: ColorConfig;
    secondary: ColorConfig;
    muted: ColorConfig;
    accent: ColorConfig;
    destructive: ColorConfig;
    warning: ColorConfig;
    success: ColorConfig;
    info: ColorConfig;
    border: string;
    input: string;
    ring: string;
  };
}

export const themeConfig: ThemeConfig = {
  light: {
    background: '#FDFBF7', // Off-white/kertas kusam agar mata tidak cepat lelah
    foreground: '#000000', // Hitam pekat untuk teks utama
    card: {
      background: '#FFFFFF', // Putih murni untuk kartu agar kontras dengan background
      foreground: '#000000',
    },
    popover: {
      background: '#FFFFFF',
      foreground: '#000000',
    },
    primary: {
      background: '#FFD800', // Kuning Neubrutalism klasik yang sangat mencolok
      foreground: '#000000',
    },
    secondary: {
      background: '#FF90E8', // Pink permen karet (Bubblegum Pink)
      foreground: '#000000',
    },
    muted: {
      background: '#E2E8F0', // Abu-abu solid, tanpa rgba
      foreground: '#475569',
    },
    accent: {
      background: '#A6FAFF', // Cyan terang
      foreground: '#000000',
    },
    destructive: {
      background: '#FF4D4D', // Merah solid yang agresif
      foreground: '#000000',
    },
    warning: {
      background: '#FF9F1C', // Oranye terang
      foreground: '#000000',
    },
    success: {
      background: '#B4FF39', // Hijau lime terang
      foreground: '#000000',
    },
    info: {
      background: '#38BDF8', // Biru solid
      foreground: '#000000',
    },
    border: '#000000', // WAJIB HITAM SOLID untuk outline tebal
    input: '#FFFFFF',
    ring: '#000000', // Fokus ring berwarna hitam pekat (bukan transparan)
  },
  dark: {
    background: '#121212', // Hitam gelap (bukan pitch black agar card terlihat)
    foreground: '#FFFFFF', // Putih murni
    card: {
      background: '#1E1E1E',
      foreground: '#FFFFFF',
    },
    popover: {
      background: '#1E1E1E',
      foreground: '#FFFFFF',
    },
    primary: {
      background: '#B4FF39', // Hijau Lime neon sebagai aksen utama di dark mode
      foreground: '#000000', // Teks hitam di atas tombol lime
    },
    secondary: {
      background: '#BE94FF', // Ungu Neon
      foreground: '#000000',
    },
    muted: {
      background: '#333333',
      foreground: '#A3A3A3',
    },
    accent: {
      background: '#FF5722', // Oranye vulkanik
      foreground: '#FFFFFF',
    },
    destructive: {
      background: '#FF2A2A', // Merah neon
      foreground: '#FFFFFF',
    },
    warning: {
      background: '#FFC300', // Kuning stabilo
      foreground: '#000000',
    },
    success: {
      background: '#00FF7F', // Hijau spring
      foreground: '#000000',
    },
    info: {
      background: '#00E5FF', // Cyan terang
      foreground: '#000000',
    },
    border: '#FFFFFF', // WAJIB PUTIH SOLID untuk outline di dark mode
    input: '#1E1E1E',
    ring: '#B4FF39', // Fokus ring berwarna neon
  },
};
