// Single Types
import global, { global_Seo } from './singleTypes/global'

export const singleTypes = []

// Collection Types
import landingPage_Collection from './collectionTypes/landingPage_Collection'

export const collectionTypes = [
  landingPage_Collection,
]

// Components
import cta from './components/cta'
import seo from './components/seo'
import Content from '../components/Content'
import CaseStudy, { CaseStudy_Item } from './components/CaseStudy'
import Comparison, { Comparison_TableHeader, Comparison_TableItems } from './components/Comparison'

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
]
