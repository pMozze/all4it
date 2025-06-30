import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../assets/fonts/inter/Inter-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-ThinItalic.woff2',
      weight: '100',
      style: 'italic'
    },
    {
      path: '../assets/fonts/inter/Inter-ExtraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../assets/fonts/inter/Inter-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-LightItalic.woff2',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../assets/fonts/inter/Inter-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-Italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../assets/fonts/inter/Inter-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-MediumItalic.woff2',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../assets/fonts/inter/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../assets/fonts/inter/Inter-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-BoldItalic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../assets/fonts/inter/Inter-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic'
    },
    {
      path: '../assets/fonts/inter/Inter-Black.woff2',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../assets/fonts/inter/Inter-BlackItalic.woff2',
      weight: '900',
      style: 'italic'
    }
  ],
  variable: '--font-inter'
});

export const berkleyMono = localFont({
  src: [
    {
      path: '../assets/fonts/berkley-mono/TX-02-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/berkley-mono/TX-02-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/berkley-mono/TX-02-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/berkley-mono/TX-02-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-berkley-mono'
});
