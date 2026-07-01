// Pure HTML-generation logic ported verbatim from
// legacy-next/components/NavigationGenerator/generator.js. The generated HTML
// string must stay byte-identical to the original, so the template literals
// below are copied exactly.

export interface MenuLinkItem {
    caption: string
    link: string
    blank?: boolean | undefined
}

export interface MenuLogo {
    url: string
    alt: string
    link: string
    isUsed: boolean
}

export interface MenuItems {
    logo: MenuLogo
    left: MenuLinkItem[]
    right: MenuLinkItem[]
}

const generateMenu = (items: MenuLinkItem[]): string =>
    items
        .map(
            (item) =>
                `
      <li>
        <a href="${item.link}"${item.blank ? ' target="_blank" rel="noopener noreferrer"' : ''}>
          ${item.caption}
        </a>
      </li>`
        )
        .join('')

export const htmlGenerator = (menuItems: MenuItems): string =>
    `<nav class="menu-container">
  <!-- burger menu -->
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

  ${
      menuItems.logo.isUsed
          ? `<!-- logo -->
  <a href="${menuItems.logo.link}" class="menu-logo">
    <img src="${menuItems.logo.url}" alt="${menuItems.logo.alt}"/>
  </a>
`
          : ''
  }
  <!-- menu items -->
  <div class="menu">
    <ul>${generateMenu(menuItems.left)}
    </ul>
    <ul>${generateMenu(menuItems.right)}
    </ul>
  </div>
</nav>`
