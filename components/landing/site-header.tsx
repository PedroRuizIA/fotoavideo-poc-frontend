import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-serif text-xl font-semibold text-foreground">
          fotoavideo
        </Link>
        <Link
          href="/quiz"
          className={cn(buttonVariants({ size: "lg" }), "h-11 px-5 text-base")}
        >
          Crear mi vídeo
        </Link>
      </div>
    </header>
  )
}
