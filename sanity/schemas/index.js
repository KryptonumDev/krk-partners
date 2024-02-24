// Single Types
import global, { global_Seo } from './singleTypes/global'

export const singleTypes = []

// Collection Types
import landingPage_Collection from './collectionTypes/landingPage_Collection'
import team_Collection from './collectionTypes/team_Collection'

export const collectionTypes = [
  landingPage_Collection,
  team_Collection,
]

// Components
import cta from './components/cta'
import seo from './components/seo'
import Content from '../components/Content'
import CaseStudy, { CaseStudy_Item } from './components/CaseStudy'
import Comparison, { Comparison_TableHeader, Comparison_TableItems } from './components/Comparison'
import Features, { Features_Item } from './components/Features'
import StatsGrid from './components/StatsGrid'
import ListWithIconAndCta, { ListWithIconAndCta_Item } from './components/ListWithIconAndCta'
import Reviews, { Reviews_Item } from './components/Reviews'
import FloatingTilesAndImages, { FloatingTilesAndImages_Images, FloatingTilesAndImages_List } from './components/FloatingTilesAndImages'
import Faq, { Faq_List } from './components/Faq'
import Contact from './components/Contact'
import Steps, { Steps_Timeline } from './components/Steps'
import Team from './components/Team'

export const schemaTypes = [
  ...singleTypes,
  ...collectionTypes,
  global,
  Content,
  global_Seo,
  cta,
  seo,
  CaseStudy,
  CaseStudy_Item,
  Comparison,
  Comparison_TableHeader,
  Comparison_TableItems,
  Features,
  Features_Item,
  StatsGrid,
  ListWithIconAndCta,
  ListWithIconAndCta_Item,
  Reviews,
  Reviews_Item,
  FloatingTilesAndImages,
  FloatingTilesAndImages_List,
  FloatingTilesAndImages_Images,
  Faq,
  Faq_List,
  Contact,
  Steps,
  Steps_Timeline,
  Team,
]
