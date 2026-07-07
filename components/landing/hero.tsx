import Link from "next/link"
import Image from "next/image"
import { Clock3Icon, LockIcon, RefreshCwIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const badges = [
  { icon: LockIcon, text: "Tus fotos, protegidas" },
  { icon: Clock3Icon, text: "Listo en ~2 minutos" },
  { icon: RefreshCwIcon, text: "Pago único, sin suscripción" },
]

export function Hero() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:gap-14 md:px-6 md:py-20">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-serif text-4xl leading-tight text-balance text-foreground md:text-5xl">
            Esa foto antigua de tu familia puede volver a moverse
          </h1>
          <p className="text-lg leading-relaxed text-pretty text-muted-foreground">
            Sube una foto de tus abuelos o de un ser querido, elige un momento y
            nuestra inteligencia artificial creará un vídeo breve y delicado:
            una sonrisa, una mirada, un instante. Sin complicaciones y sin
            saber nada de tecnología.
          </p>
          <Link
            href="/quiz"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-14 w-full px-8 text-lg md:w-auto",
            )}
          >
            Crear mi vídeo ahora
          </Link>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {badges.map((badge) => (
              <li
                key={badge.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <badge.icon className="size-4 text-primary" aria-hidden="true" />
                {badge.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="rotate-2 rounded-xl border border-border bg-background p-3 shadow-lg">
            <Image
              src="/images/after-abuela.png"
              alt="Retrato antiguo de una abuela, delicadamente animado"
              width={480}
              height={600}
              priority
              className="rounded-lg object-cover"
            />
            <p className="px-1 pt-3 pb-1 font-serif text-sm text-muted-foreground">
              La abuela Teresa, 1954 — compartida con permiso de su familia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
