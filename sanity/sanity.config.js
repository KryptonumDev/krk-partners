import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { singleTypes, collectionTypes, schemaTypes } from './schemas'
import { media } from 'sanity-plugin-media'

import { markdownSchema } from 'sanity-plugin-markdown'
import { CustomMarkdownInput } from './components/Markdown'
import { ExternalLinks } from './components/ExternalLinks'

const createListItem = (S, typeName) => {
  const { title, name, icon } = schemaTypes.find((item) => item.name === typeName)
  return S.listItem()
    .title(title)
    .id(name)
    .icon(icon)
    .child(S.document().schemaType(name).title(title).documentId(name))
}

const singletonTypes = new Set(singleTypes.map((type) => type.name))
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const createDocumentTypeListItem = (S, name) =>
  S.documentTypeListItem(collectionTypes.find((type) => type.name === name).name)

export default defineConfig({
  name: 'default',
  title: 'KRK Partners',

  projectId: '1p7f5b4j',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Struktura')
          .items([
            createListItem(S, 'global'),
            S.divider(),
            createDocumentTypeListItem(S, 'landingPage_Collection'),
            S.divider(),
            createDocumentTypeListItem(S, 'team_Collection'),
            ...singleTypes.map((item) => createListItem(S, item.name)),
          ]),
    }),
    visionTool(),
    markdownSchema({ input: CustomMarkdownInput }),
    media(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },

  tools: [ExternalLinks()],
})
