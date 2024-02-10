import { INavbarData} from "./helper";

export const navbarData: INavbarData[] = [
    {
        condition: true,
        routeLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'
    },
    
    {
        condition : true,
        routeLink: 'approved',
        icon: 'fa-solid fa-file-circle-check',
        label: 'Demandes approuvées'
    },
    
    {
        condition : true,
        routeLink: 'pending',
        icon: 'fa-solid fa-hourglass-start',
        label: 'Demandes en attente'
    },
    // {
    //     routeLink: 'media',
    //     icon: 'fa fa-camera',
    //     label: 'Media'
    // },
    // {
    //     condition: role === 'etudiant',
    //     routeLink: 'form',
    //     icon: 'fa-solid fa-file-pen',
    //     label: 'Faire une demande'
    // },
    
    // {
    //     condition : loggedIn,
    //     routeLink: 'logout',
    //     icon: 'fas fa-sign-out-alt',
    //     label: 'Log Out'
    // }
    
];