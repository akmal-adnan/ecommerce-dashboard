'use client';

import { useEffect, useState } from 'react';
import { Providers } from './provider';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // schedule state update asynchronously to avoid the lint rule about
    // synchronous setState inside effects which can trigger cascading renders.
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  // Render nothing on the server / until mounted on the client to avoid
  // hydration mismatches caused by client-only style insertion (e.g. MUI/emotion).
  if (!mounted) return null;

  return <Providers>{children}</Providers>;
}
