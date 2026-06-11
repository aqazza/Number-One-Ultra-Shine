import {
  Phone,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Leaf,
  Sparkles,
  MapPin,
  Car,
  Droplets,
  X,
  Check,
  CheckCircle2,
  Mail,
  Menu,
  HandHeart,
  Gem,
  Clock,
  ChevronsLeftRight,
  Image as ImageIcon,
  Award,
  Sprout,
  SprayCan,
  MapPinned,
  Brush,
  Recycle,
  FlaskConical,
  type LucideIcon,
} from "lucide-react"

// Maps the prototype's kebab-case Lucide names to lucide-react components,
// so call sites stay identical to the design source: <Icon name="map-pin" />.
const REGISTRY: Record<string, LucideIcon> = {
  phone: Phone,
  "phone-call": PhoneCall,
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  "arrow-up-right": ArrowUpRight,
  "shield-check": ShieldCheck,
  leaf: Leaf,
  sparkles: Sparkles,
  "map-pin": MapPin,
  car: Car,
  droplets: Droplets,
  x: X,
  check: Check,
  "check-circle-2": CheckCircle2,
  mail: Mail,
  menu: Menu,
  "hand-heart": HandHeart,
  gem: Gem,
  clock: Clock,
  "chevrons-left-right": ChevronsLeftRight,
  image: ImageIcon,
  award: Award,
  sprout: Sprout,
  "spray-can": SprayCan,
  "map-pinned": MapPinned,
  brush: Brush,
  recycle: Recycle,
  "flask-conical": FlaskConical,
}

export function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: string
  size?: number
  className?: string
}) {
  const Cmp = REGISTRY[name]
  if (!Cmp) return null
  // The design CSS sizes glyphs via .ic { font-size } + .ic svg { width:1em }.
  return (
    <span className={"ic " + className} style={{ fontSize: size, display: "inline-flex" }}>
      <Cmp />
    </span>
  )
}
