const generateMenu = items =>
  items.map(item =>
`
      <li>
        <a href="${item.link}"${item.blank ? ' target="_blank" rel="noopener noreferrer"' : '' }>
          ${item.caption}
        </a>
      </li>`).join('')

export const htmlGenerator = menuItems =>
`<nav class="menu-container">
  <!-- burger menu -->
  <input type="checkbox" />
  <span></span>
  <span></span>
  <span></span>

  ${menuItems.logo.isUsed ? `<!-- logo -->
  <a href="${menuItems.logo.link}" class="menu-logo">
    <img src="${menuItems.logo.url}" alt="${menuItems.logo.alt}"/>
  </a>
` : ''}
  <!-- menu items -->
  <div class="menu">
    <ul>${generateMenu(menuItems.left)}
    </ul>
    <ul>${generateMenu(menuItems.right)}
    </ul>
  </div>
</nav>`