export default [
  {
    url: '/admin/analytics/',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },
  {
    url: null,
    name: 'Partners',
    icon: 'UsersIcon',
    i18n: 'Partners',
    submenu: [
      {
        url: '/admin/partners/list',
        name: 'List',
        slug: 'data-list-partners-list-view',
        i18n: 'List'
      }
    ]
  },
  {
    url: null,
    name: 'Customers',
    icon: 'AlignLeftIcon',
    i18n: 'Customers',
    submenu: [
      {
        url: '/admin/customers/list',
        name: 'List',
        slug: 'data-list-customers-list-view',
        i18n: 'List'
      }
    ]
  },
  {
    url: null,
    name: 'Operators',
    icon: 'ActivityIcon',
    i18n: 'Operators',
    submenu: [
      {
        url: '/admin/operators/list',
        name: 'List',
        slug: 'data-list-operators-list-view',
        i18n: 'List'
      }
    ]
  },
  {
    url: '/admin/documents/',
    name: 'Documents',
    slug: 'docs',
    icon: 'FolderIcon',
    i18n: 'Documents'
  },
  {
    url: '/admin/operation/',
    name: 'Operations',
    slug: 'opra',
    icon: 'SlidersIcon',
    i18n: 'Operations'
  },
  {
    url: '/admin/settings/',
    name: 'Settings',
    slug: 'sttng',
    icon: 'SettingsIcon',
    i18n: 'Settings'
  }
]
  