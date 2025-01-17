import React from 'react';

export default function MainWrap({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 py-6 space-y-6">
      {children}
    </main>
  );
}
