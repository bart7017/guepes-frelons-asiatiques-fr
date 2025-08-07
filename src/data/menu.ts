// src/data/menu.ts

export const headerMenu = [
    { name: 'Présentation', link: '/presentation' },
    { name: 'Nuisible', link: '/nuisible' , showArrow: false,
        children: [
            { name: 'Guêpe', link: '/guepe' },
            { name: 'Abeille', link: '/abeille' },
            { name: 'Frelon', link: '/frelon' },
            { name: 'Frelon asiatique', link: '/frelon-asiatique' },
            { name: 'Bourdon', link: '/bourdon' },
            { name: 'Dératisation', link: '/dératisation' },
            { name: 'Chenille processionnaire', link: '/chenille-processionnaire' },
        ]},
    { name: 'Présentation', link: '/presentation' },
    { name: 'Présentation', link: '/presentation' },
    { name: 'Blog', link: '/blog' },
    
];

export const footerMenu = [
    { name: 'Présentation', link: '/presentation' },
    { name: 'Guêpe', link: '/guepe' },
    { name: 'Abeille', link: '/abeille' },
    { name: 'Frelon', link: '/frelon' },
    { name: 'Frelon asiatique', link: '/frelon-asiatique' },
    { name: 'Bourdon', link: '/bourdon' },
    { name: 'Dératisation', link: '/dératisation' },
    { name: 'Chenille processionnaire', link: '/chenille-processionnaire' },
    { name: 'Blog', link: '/blog' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

