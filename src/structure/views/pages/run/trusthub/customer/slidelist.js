export default [
  {
    url: '/customer/analytics/',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },

  {
    url: null,
    name: 'Operators',
    icon: 'ActivityIcon',
    i18n: 'Operators',
    submenu: [
      {
        url: '/customer/operators/modify',
        name: 'Modify',
        slug: 'data-list-operators-modify-view',
        i18n: 'Modify'
      }
    ]
  },
  {
    url: '/customer/seats/',
    name: 'Seats',
    slug: 'seats',
    icon: 'LayersIcon',
    i18n: 'Seats'
  },
  {
    url: '/customer/devices/',
    name: 'Devices',
    slug: 'devices',
    icon: 'ServerIcon',
    i18n: 'Devices'
  },
  {
    url: '/customer/documents/',
    name: 'Documents',
    slug: 'docs',
    icon: 'FolderIcon',
    i18n: 'Documents'
  },
  {
    url: '/customer/operation/',
    name: 'Operations',
    slug: 'opra',
    icon: 'SlidersIcon',
    i18n: 'Operations'
  },
  {
    url: '/customer/settings/',
    name: 'Settings',
    slug: 'sttng',
    icon: 'SettingsIcon',
    i18n: 'Settings'
  }
]
  