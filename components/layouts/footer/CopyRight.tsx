"use client";

import Link from "@/components/ui/Link";

const CopyRight = () => {
  return (
    <div className="my-5 text-xs text-center z-[20]">
      &copy; Bruno Estevan. Baseado em um projeto original de{" "}
      <Link
      href={"https://github.com/Mif2006/Space-Portolio"}
      target="_blank"
      className="inline-flex"
      size="xs"
      >
      Mif2006
      </Link>
      . Todos os direitos reservados.
    </div>
  );
};

export default CopyRight;
