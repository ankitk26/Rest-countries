"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="flex items-center rounded-md gap-3 border border-neutral-200 px-6 py-2 hover:opacity-80"
      onClick={() => router.back()}
    >
      <ChevronLeft size={16} />
      <span>Back</span>
    </button>
  );
}
