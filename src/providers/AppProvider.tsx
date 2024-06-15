import type { ReactNode } from 'react';

import { AuthProvider } from './AuthProvider';
import { FontProvider } from './FontProvider';
import { LocalStorageProvider } from './LocalStorageProvider';
import { ThemeProvider } from './ThemeProvider';

type Props = {
  onInitialized: () => void;
  children: ReactNode;
};

export function AppProvider(props: Props) {
  const { onInitialized, children } = props;
  return (
    <LocalStorageProvider>
      <FontProvider onInitialized={onInitialized}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </FontProvider>
    </LocalStorageProvider>
  );
}
