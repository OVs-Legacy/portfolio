import { useState } from "react";

export default function useModalIndex() {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  return { openModalIndex, setOpenModalIndex };
}