const generateMenu = items =>
  items.map(item =>
`
      <a href="${item.link}"${item.blank ? ' target="_blank" rel="noopener noreferrer"' : '' }>
        <li>${item.caption}</li>
      </a>`).join('')

export const htmlGenerator = menuItems =>
`<nav class="menu-container">
  <input type="checkbox" />

  <span></span>
  <span></span>
  <span></span>

  <div class="menu">
    <ul>${generateMenu(menuItems.left)}
    </ul>
    <ul>${generateMenu(menuItems.right)}
    </ul>
  </div>
</nav>`