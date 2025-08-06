import './index.css';
import '@mantine/core/styles.css';

import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
