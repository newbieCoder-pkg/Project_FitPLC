import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Treinos',
    icon: 'nb-keypad',
    link: '/pages/treinos',
    children: [
      {
        title: 'Meus Treinos',
        link: '/pages/treinos/library',
      },
      {
        title: 'FAQ',
        link: '/pages/treinos/tabs',
      },
      {
        title: 'Suporte',
        link: '/pages/components/tree',
      },
    ],
  },
    {
    title: 'Assistente de Treino',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Estatísticas de Treino',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Diário de Treino',
        link: '/pages/charts/chartjs',
      },

    ],
  },
  {
    title: 'Blog',
    icon: 'nb-compose',
    children: [
      {
        title: 'Standart',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Conteúdo Premium',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Definições',
    icon: 'nb-gear',
    children: [
      {
        title: 'Perfil',
      }, {
        title: 'Definições de Conta',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Suporte',
    icon: 'nb-location',
      link: '/pages/editors/tinymce',
  },
  /*{
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
