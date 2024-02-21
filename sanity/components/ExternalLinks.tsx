import React from 'react'

const styles = {
  display: 'block',
  padding: '10px',
}
const links = [
  {
    name: 'Podgląd strony',
    href: 'https://krk-partners-git-drafts-kryptonum.vercel.app',
  },
]

export const ExternalLinks = () => {
  return {
    title: 'Linki zewnętrzne',
    name: 'external-links',
    component: () =>
      links.map(({name, href}, i) => (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={styles}>
          {name}
        </a>
      )),
  }
}
