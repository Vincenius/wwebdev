// Ported from legacy-next/components/NavigationGenerator/components/MenuItemsControl.js
// MUI (TextField/Checkbox/IconButton/Button/icons) + styled-components replaced
// with native controls + `ng-` classes (see src/styles/navigation-generator.css).
// Logic preserved verbatim.
import type { Dispatch, SetStateAction } from 'react'
import type { MenuItems, MenuLinkItem } from './generator'

interface Props {
    menuItems: MenuItems
    setMenuItems: Dispatch<SetStateAction<MenuItems>>
}

const DeleteIcon = () => (
    <svg
        className="ng-delete-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            fill="currentColor"
        />
    </svg>
)

const AddIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
            fill="currentColor"
        />
    </svg>
)

type MenuPart = 'left' | 'right'

export default function MenuItemsControl({ menuItems, setMenuItems }: Props) {
    const updateMenu = (
        key: keyof MenuLinkItem,
        value: string | boolean,
        menuPart: MenuPart,
        index: number,
    ) => {
        setMenuItems((prevItems) => ({
            ...prevItems,
            [menuPart]: prevItems[menuPart].map((item, i) =>
                i === index ? { ...item, [key]: value } : item,
            ),
        }))
    }

    const deleteItem = (menuPart: MenuPart, index: number) => {
        setMenuItems((prevItems) => ({
            ...prevItems,
            [menuPart]: prevItems[menuPart].filter((_, i) => i !== index),
        }))
    }

    const addItem = (menuPart: MenuPart) => {
        setMenuItems((prevItems) => ({
            ...prevItems,
            [menuPart]: [...prevItems[menuPart], { caption: '', link: '' }],
        }))
    }

    const updateLogo = (key: keyof MenuItems['logo'], value: string | boolean) => {
        setMenuItems((prevItems) => ({
            ...prevItems,
            logo: { ...prevItems.logo, [key]: value },
        }))
    }

    const generateItems = (menuPart: MenuPart) =>
        menuItems[menuPart].map((item, index) => (
            <div className="ng-row" key={`${menuPart}-${index}`}>
                <label className="ng-field">
                    <span className="ng-field-label">Caption</span>
                    <input
                        type="text"
                        value={item.caption}
                        onChange={(e) => updateMenu('caption', e.target.value, menuPart, index)}
                    />
                </label>
                <label className="ng-field">
                    <span className="ng-field-label">Link</span>
                    <input
                        type="text"
                        value={item.link}
                        onChange={(e) => updateMenu('link', e.target.value, menuPart, index)}
                    />
                </label>
                <label className="ng-checkbox-label">
                    <input
                        type="checkbox"
                        name="targetBlank"
                        checked={!!item.blank}
                        onChange={(e) => updateMenu('blank', e.target.checked, menuPart, index)}
                    />
                    Open in new tab
                </label>
                <button
                    type="button"
                    className="ng-icon-button"
                    aria-label="delete row"
                    onClick={() => {
                        deleteItem(menuPart, index)
                    }}
                >
                    <DeleteIcon />
                </button>
            </div>
        ))

    return (
        <div className="ng-control-container">
            <h3>Logo</h3>
            {menuItems.logo.isUsed && (
                <div className="ng-row">
                    <label className="ng-field">
                        <span className="ng-field-label">Link to logo</span>
                        <input
                            type="text"
                            value={menuItems.logo.url}
                            onChange={(e) => updateLogo('url', e.target.value)}
                        />
                    </label>
                    <label className="ng-field">
                        <span className="ng-field-label">Link</span>
                        <input
                            type="text"
                            value={menuItems.logo.link}
                            onChange={(e) => updateLogo('link', e.target.value)}
                        />
                    </label>
                    <label className="ng-field">
                        <span className="ng-field-label">Alt caption</span>
                        <input
                            type="text"
                            value={menuItems.logo.alt}
                            onChange={(e) => updateLogo('alt', e.target.value)}
                        />
                    </label>
                    <button
                        type="button"
                        className="ng-icon-button"
                        aria-label="delete row"
                        onClick={() => updateLogo('isUsed', false)}
                    >
                        <DeleteIcon />
                    </button>
                </div>
            )}

            {!menuItems.logo.isUsed && (
                <button
                    type="button"
                    className="ng-button"
                    onClick={() => {
                        updateLogo('isUsed', true)
                    }}
                >
                    <AddIcon /> &nbsp;Add Logo
                </button>
            )}

            <br />

            <h3>Left Menu</h3>
            {generateItems('left')}
            <button
                type="button"
                className="ng-button"
                onClick={() => {
                    addItem('left')
                }}
            >
                <AddIcon /> &nbsp;Add Item
            </button>

            <br />
            <br />

            <h3>Right Menu</h3>
            {generateItems('right')}
            <button
                type="button"
                className="ng-button"
                onClick={() => {
                    addItem('right')
                }}
            >
                <AddIcon /> &nbsp;Add Item
            </button>
        </div>
    )
}
