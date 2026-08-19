import type { Product, Project, Shot } from '../types'

export const id = () => crypto.randomUUID()

export function storyShots(): Shot[] {
  return [
    { id: id(), scene: 'Scene 1', title: 'Opening moment', duration: '5 sec', purpose: 'Introduce the world and the feeling.', action: 'The main character enters the scene.', framing: 'Wide establishing shot', camera: 'Slow push-in', emotion: 'Curious', audio: 'Natural ambience', status: 'Draft' },
    { id: id(), scene: 'Scene 1', title: 'The turning point', duration: '5 sec', purpose: 'Reveal the story beat that changes everything.', action: 'The character notices something important.', framing: 'Medium portrait', camera: 'Still frame', emotion: 'Surprised', audio: 'Quiet room tone', status: 'Draft' }
  ]
}

export function productShots(useCase: string): Shot[] {
  const sets: Record<string, [string, string][]> = {
    'Lifestyle product story': [['Hero reveal', 'The product appears naturally in a beautiful everyday setting.'], ['Detail moment', 'A close view reveals its material, finish, and key feature.'], ['Use moment', 'A person uses the product in one simple, believable action.'], ['Benefit moment', 'Show the result or feeling the product creates.'], ['Closing packshot', 'Hold the product in a clear final frame.']],
    'Skincare routine': [['Hero bottle', 'Reveal the bottle on a calm vanity surface.'], ['Texture close-up', 'Show the formula, texture, and light on the product.'], ['Application', 'Show one natural application motion.'], ['Skin benefit', 'Show the fresh, hydrated result.'], ['Closing packshot', 'End with a simple clean product frame.']],
    'Food & beverage': [['Fresh reveal', 'Introduce the product with fresh visual energy.'], ['Ingredient detail', 'Show ingredients or texture in close-up.'], ['Pour or serve', 'Show a satisfying pour, open, or serve action.'], ['Share moment', 'Place the product in a human social moment.'], ['Closing packshot', 'End with a crisp branded product frame.']],
    'Technology demo': [['Design reveal', 'Reveal the device shape and build quality.'], ['Feature close-up', 'Show the most important physical feature.'], ['In use', 'Show a person using one core function.'], ['Benefit moment', 'Show the everyday outcome it creates.'], ['Closing product frame', 'End with a clear product view.']]
  }
  return (sets[useCase] ?? sets['Lifestyle product story']).map(([title, action], index) => ({ id: id(), scene: 'Product sequence', title, duration: index === 2 ? '6 sec' : '4 sec', purpose: 'Product campaign shot.', action, framing: index === 1 ? 'Macro close-up' : 'Medium product shot', camera: index === 1 ? 'Slow macro slide' : 'Gentle push-in', emotion: 'Confident', audio: 'Soft natural ambience', status: 'Draft' }))
}

export function newProduct(): Product {
  return { name: '', category: '', appearance: '', features: [], lock: '', useCase: 'Lifestyle product story', format: '' }
}

export function makeProject(type = 'Short film'): Project {
  const isProduct = type === 'Product video'
  return {
    id: id(), type, title: isProduct ? 'Untitled product film' : 'Untitled story',
    logline: isProduct ? 'Introduce a product through a short, memorable visual story.' : 'Describe the story you want to tell.',
    genre: isProduct ? 'Product campaign' : 'Drama', format: '9:16', style: isProduct ? 'Natural product photography, clean surfaces, warm daylight, tactile detail.' : 'Grounded cinematic storytelling, natural light, human emotion.', script: '',
    sectionTitles: { overview: 'Project overview', direction: 'Characters & places', story: 'Story', storyboard: 'Storyboard', references: 'References', animation: 'Animation', export: 'Export' },
    characters: isProduct ? [] : [{ id: id(), name: 'Lead character', description: 'Describe how they look, dress, and move.', lock: 'Keep their face, hairstyle, wardrobe and key details consistent.' }],
    locations: isProduct ? [] : [{ id: id(), name: 'Main location', description: 'Describe the place, time of day, weather and mood.' }],
    props: [], product: newProduct(), shots: isProduct ? productShots('Lifestyle product story') : storyShots(), created: Date.now(), updated: Date.now()
  }
}