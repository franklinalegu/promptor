import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Panel, Project } from './types'
import { makeProject } from './lib/templates'

type Store = {
  projects: Project[]
  activeId: string
  panel: Panel
  theme: 'day' | 'night'
  setPanel: (panel: Panel) => void
  setTheme: () => void
  createProject: (type: string) => Project
  selectProject: (id: string) => void
  updateProject: (next: Project) => void
  active: () => Project
}

const first = makeProject()
export const usePromptor = create<Store>()(persist((set, get) => ({
  projects: [first], activeId: first.id, panel: 'overview', theme: 'day',
  setPanel: panel => set({ panel }),
  setTheme: () => set(state => ({ theme: state.theme === 'day' ? 'night' : 'day' })),
  createProject: type => {
    const project = makeProject(type)
    set(state => ({ projects: [...state.projects, project], activeId: project.id, panel: 'overview' }))
    return project
  },
  selectProject: activeId => set({ activeId, panel: 'overview' }),
  updateProject: next => set(state => ({ projects: state.projects.map(p => p.id === next.id ? { ...next, updated: Date.now() } : p) })),
  active: () => get().projects.find(p => p.id === get().activeId) ?? get().projects[0]
}), { name: 'promptor-react19-projects' }))