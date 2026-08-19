export type Panel = 'overview' | 'direction' | 'story' | 'storyboard' | 'references' | 'animation' | 'export'
export type ShotStatus = 'Draft' | 'Prompt ready' | 'Storyboard made' | 'Approved' | 'Animated'

export interface AssetRecord { id: string; name: string; description: string; lock?: string; asset?: string }
export interface Shot {
  id: string; scene: string; title: string; duration: string; purpose: string; action: string
  framing: string; camera: string; emotion: string; audio: string; status: ShotStatus
  image?: string; clip?: string; comments?: string; feature?: string
}
export interface Product {
  name: string; category: string; appearance: string; features: string[]; lock: string
  useCase: string; format: string; asset?: string; board?: string
}
export interface Project {
  id: string; type: string; title: string; logline: string; genre: string; format: string; style: string; script: string
  sectionTitles: Record<Panel, string>; characters: AssetRecord[]; locations: AssetRecord[]; props: AssetRecord[]
  product: Product; shots: Shot[]; created: number; updated: number
}