interface INavbarItem {
    title: string;
    path: string;
}

export const navbarItems: INavbarItem[] = [
    { title: "Home", path: "dessert" },
    { title: "Vegetarianos", path: "vegetarian" },
    { title: "Platos Principales", path: "fingerfood" },
    { title: "Tortas", path: "cakes" },
    { title: "Comida Rápida", path: "quick" },
    { title: "Menú Niños", path: "" },
    {
        title: "Sopa", path: "soups",
    },
];