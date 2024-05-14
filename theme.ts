/* theme.ts */
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
export const theme = extendTheme({
  config,
  fonts: {
    heading: 'var(--font-rubik)',
    body: 'var(--font-rubik)',
  },
});
