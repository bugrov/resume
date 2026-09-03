import {
  ChevronsRight,
  Code2,
  Database,
  GitBranch,
  History,
  Infinity as InfinityIcon,
  Layout,
  Package,
  Plug,
  Server,
  ServerCog,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const ICON_MAP: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  code: Code2,
  database: Database,
  'server-cog': ServerCog,
  sparkles: Sparkles,
  plug: Plug,
  'git-branch': GitBranch,
  infinity: InfinityIcon,
  'chevrons-right': ChevronsRight,
  history: History,
  package: Package,
}

export function getIcon(id: string): LucideIcon {
  return ICON_MAP[id] ?? Sparkles
}
