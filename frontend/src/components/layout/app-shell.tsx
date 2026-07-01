import { BookOpen, Bot, FileText, GitBranch, Headphones, Library, Settings } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

import { HealthBadge } from '@/features/system/health-badge'
import { cn } from '@/lib/utils'

const navigationItems = [
  { to: '/', label: '对话', icon: Bot },
  { to: '/grammar', label: '语法树', icon: GitBranch },
  { to: '/notes', label: '笔记', icon: FileText },
  { to: '/vocabulary', label: '单词', icon: Library },
  { to: '/phonetics', label: '音标', icon: Headphones },
]

export function AppShell() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-slate-200 bg-[#fbfaf7] px-4 py-5 lg:flex lg:flex-col">
        <div className="flex items-center gap-3 px-2">
          <div className="flex size-10 items-center justify-center rounded-md bg-[#2e6f6a] text-white">
            <BookOpen className="size-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-base font-semibold leading-5">IntuLing</p>
            <p className="text-xs text-slate-500">AI English Agent</p>
          </div>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950',
                  isActive && 'bg-[#d9ece9] text-[#123b3a]',
                )
              }
            >
              <item.icon className="size-4" aria-hidden="true" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="space-y-3 border-t border-slate-200 pt-4">
          <HealthBadge />
          <button
            type="button"
            className="flex h-10 w-full items-center gap-3 rounded-md px-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
          >
            <Settings className="size-4" aria-hidden="true" />
            设置
          </button>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-slate-200 bg-[#fbfaf7]/90 px-4 backdrop-blur lg:hidden">
          <div className="flex items-center gap-2">
            <BookOpen className="size-5 text-[#2e6f6a]" aria-hidden="true" />
            <span className="font-semibold">IntuLing</span>
          </div>
          <HealthBadge compact />
        </header>
        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
