import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      screens: {
        '2xl': '1210px',
        '1sm': '460px',
      },
      fontFamily: {
        sfPro_bold: 'sfPro_bold',
        sfPro_semibold: 'sfPro_semibold',
        sfPro_semibold_italic: 'sfPro_semibold_italic',
        sfPro_light_italic: 'sfPro_light_italic',
      },
      container: {
        center: true,
        screens: {
          xl: '1280px',
        },
      },
      colors: {
        main: 'var(--color-main)',
        white: 'var(--color-white)',
      },
      fontSize: {
        sm: '16px',
        md: '18px',
        lg: '20px',
        xl: '24px',
      },
      boxShadow: {
        '2md': '-20px 20px 20px 0px rgba(0, 0, 0, 0.25);',
        '1xl': '-4px 4px 8px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
