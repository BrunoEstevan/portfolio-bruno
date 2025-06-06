"use client";

import { useEffect, useState } from "react";

/**
 * ClientOnly é um componente que renderiza seus filhos apenas no lado do cliente
 * para evitar problemas de hidratação (hydration).
 */
export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Se não montou, não renderiza nada
  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
