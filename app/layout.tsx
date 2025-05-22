import React from 'react';
import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'ActionBot – AI Assistant for Real-World Tasks',
  description: 'ActionBot is an AI assistant that executes real-world tasks like scheduling, emailing, or posting content through APIs and webhooks.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 
