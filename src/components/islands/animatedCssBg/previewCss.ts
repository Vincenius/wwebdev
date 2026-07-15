export const toContainerUnits = (css: string): string =>
    css
        .replace(/vmin/g, 'cqmin')
        .replace(/vmax/g, 'cqmax')
        .replace(/vw/g, 'cqw')
        .replace(/vh/g, 'cqh')
