// Configuración mock del funnel de fotoavideo.
// En producción, el catálogo de precios y las cards viven fuera del build
// (DB o config en runtime, regla dura S5 del PRD). Este archivo simula ese contrato.

export type QuizOption = {
  id: string
  label: string
  description?: string
}

export const relationOptions: QuizOption[] = [
  { id: "abuelo", label: "Mi abuelo o abuela", description: "Una foto de mis abuelos" },
  { id: "padres", label: "Mi madre o mi padre", description: "Una foto de mis padres" },
  { id: "pareja", label: "Una pareja de la familia", description: "Dos personas juntas en la foto" },
  { id: "otro", label: "Otra persona querida", description: "Un familiar o alguien especial" },
]

export const photoEraOptions: QuizOption[] = [
  { id: "bn", label: "En blanco y negro", description: "Una foto antigua sin color" },
  { id: "sepia", label: "En tonos sepia", description: "Con ese tono marrón de las fotos de antes" },
  { id: "color-antigua", label: "En color, pero antigua", description: "De los años 70, 80 o 90" },
  { id: "danada", label: "Está dañada o borrosa", description: "Con arañazos, dobleces o desgastada" },
]

export const emotionalOptions: QuizOption[] = [
  { id: "sonrisa", label: "Su sonrisa", description: "Verle sonreír una vez más" },
  { id: "mirada", label: "Su mirada", description: "Esa forma de mirar que recuerdo" },
  { id: "gesto", label: "Un gesto suyo", description: "Cómo ladeaba la cabeza, cómo asentía" },
  { id: "todo", label: "Todo, un instante con vida", description: "Verle moverse, aunque sea un momento" },
]

export type MomentCard = {
  id: string
  title: string
  description: string
  image: string
  badge: string
  /** relaciones para las que esta card es más adecuada; vacío = todas */
  relations: string[]
}

export const momentCards: MomentCard[] = [
  {
    id: "c1",
    title: "Retrato con vida",
    description: "La cámara se acerca despacio mientras aparece una sonrisa suave y natural.",
    image: "/images/after-abuela.png",
    badge: "El más elegido",
    relations: ["abuelo", "padres", "otro"],
  },
  {
    id: "c4",
    title: "Dos personas, un momento",
    description: "Para fotos de dos personas: una leve inclinación y dos sonrisas tranquilas.",
    image: "/images/after-pareja.png",
    badge: "Para fotos de pareja",
    relations: ["pareja"],
  },
  {
    id: "c5",
    title: "Blanco y negro, tal cual",
    description: "Respetamos el blanco y negro original. Solo añadimos un movimiento sereno.",
    image: "/images/before-abuelo.png",
    badge: "Fiel al original",
    relations: [],
  },
]

export type PricingPack = {
  id: string
  moments: number
  priceEur: string
  perMomentEur: string
  label: string
  highlight: boolean
  note: string
}

// Precios desde config, nunca hardcodeados en JSX (anticipa "pricing fuera del build").
export const pricingPacks: PricingPack[] = [
  {
    id: "pack-1",
    moments: 1,
    priceEur: "6,90",
    perMomentEur: "6,90",
    label: "1 momento",
    highlight: false,
    note: "Para probar con una foto",
  },
  {
    id: "pack-3",
    moments: 3,
    priceEur: "14,90",
    perMomentEur: "4,97",
    label: "3 momentos",
    highlight: true,
    note: "El favorito de las familias",
  },
  {
    id: "pack-5",
    moments: 5,
    priceEur: "19,90",
    perMomentEur: "3,98",
    label: "5 momentos",
    highlight: false,
    note: "Para varias fotos o regalar",
  },
]

export type Testimonial = {
  name: string
  location: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Carmen R.",
    location: "Sevilla",
    quote:
      "Era la única foto que tenía de mi madre de joven. Cuando la vi moverse y sonreír, lloré. Se lo enseñé a mis hijos y ahora la vemos juntos.",
    avatar: "/images/avatar-carmen.png",
  },
  {
    name: "José Luis M.",
    location: "Valencia",
    quote:
      "No soy nada de tecnología y me costó cero. Subí la foto de mi padre, elegí el momento y en unos minutos lo tenía. Muy fácil y sin sorpresas en el pago.",
    avatar: "/images/avatar-jose.png",
  },
  {
    name: "María G.",
    location: "Bilbao",
    quote:
      "Lo hice como regalo para mi abuela con una foto de mi bisabuela. No hay palabras para describir su cara al verlo.",
    avatar: "/images/avatar-maria.png",
  },
]

export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: "¿Qué pasa con mi foto? ¿Está segura?",
    answer:
      "Tu foto es tuya. Solo la usamos para crear tu vídeo, nunca la compartimos ni la usamos para nada más. Los ejemplos de antes y después que ves en esta web se muestran únicamente con el consentimiento explícito de cada familia.",
  },
  {
    question: "¿Cuánto tarda en estar listo el vídeo?",
    answer:
      "Normalmente unos 2 minutos desde que subes la foto. Te avisamos en pantalla y por correo electrónico cuando esté listo.",
  },
  {
    question: "¿Y si el resultado no me convence?",
    answer:
      "Cada momento incluye una regeneración gratis para volver a intentarlo. Y si aun así no quedas satisfecho, tienes nuestra política de reembolso, visible antes de pagar.",
  },
  {
    question: "¿Sirve cualquier foto?",
    answer:
      "Funciona mejor con fotos donde la cara se ve con claridad y de frente. Aceptamos fotos en blanco y negro, sepia, en color e incluso algo dañadas. Antes de generar el vídeo te indicamos si tu foto puede dar buen resultado.",
  },
  {
    question: "¿Puedo usar fotos de personas fallecidas o de menores?",
    answer:
      "Sí, con respeto y responsabilidad. Nuestra política de contenido regula el uso de fotos de personas fallecidas y de menores. El vídeo es una interpretación creada por inteligencia artificial: un homenaje, no una recuperación del original.",
  },
  {
    question: "¿Es una suscripción? ¿Me cobraréis cada mes?",
    answer:
      "No. Es un pago único, sin suscripción, sin renovaciones y sin cargos ocultos. Pagas una vez por tus momentos y ya está. El precio lo ves siempre antes de introducir la tarjeta.",
  },
]

export const beforeAfterPairs = [
  {
    id: "abuela",
    label: "Retrato de la abuela, años 50",
    before: "/images/before-abuela.png",
    after: "/images/after-abuela.png",
  },
  {
    id: "pareja",
    label: "Pareja, años 40",
    before: "/images/before-pareja.png",
    after: "/images/after-pareja.png",
  },
  {
    id: "abuelo",
    label: "El abuelo en el pueblo, años 60",
    before: "/images/before-abuelo.png",
    after: "/images/after-abuelo.png",
  },
]
