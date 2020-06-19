export default [
  {
    url: '/admin/dashboard/',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },
  {
    url: '/admin/abis/',
    name: 'abis',
    slug: 'abis',
    icon: 'HomeIcon',
    i18n: 'Abis'
  },
  {
    url: '',
    name: 'users',
    slug: 'users',
    icon: 'UsersIcon',
    i18n: 'Users',
    submenu: [
      {
        url: '/admin/users/',
        name: 'ainbox',
        slug: 'user-list',
        i18n: 'List'
      },
      {
        url: '/admin/users/view/0',
        name: 'ainbox',
        slug: 'user-view',
        i18n: 'View'
      },
      {
        url: '/admin/users/edit/0',
        name: 'ainbox',
        slug: 'user-edit',
        i18n: 'Edit'
      }
    ]
  },
  {
    url: '/admin/rules/',
    name: 'rules',
    slug: 'rules',
    icon: 'UsersIcon',
    i18n: 'Rules'
  },
  {
    url: '/admin/partners/',
    name: 'partners',
    slug: 'partners',
    icon: 'UsersIcon',
    i18n: 'Partners'
  },
  {
    url: '/admin/customers/',
    name: 'customers',
    slug: 'customers',
    icon: 'UsersIcon',
    i18n: 'Customers'
  },
  {
    url: '/admin/operators/',
    name: 'operators',
    slug: 'operators',
    icon: 'UsersIcon',
    i18n: 'Operators'
  },
  {
    url: '/admin/person/',
    name: 'Person',
    slug: 'Person',
    icon: 'UsersIcon',
    i18n: 'person'
  },
  {
    url: '/admin/infos/',
    name: 'infos',
    slug: 'infos',
    icon: 'HelpCircleIcon',
    i18n: 'Infos'
  },
  {
    url: '/admin/documents/',
    name: 'documents',
    slug: 'documents',
    icon: 'FolderIcon',
    i18n: 'Documents'
  },
  {
    url: '/admin/templates/',
    name: 'Documents',
    slug: 'templates',
    icon: 'BoxIcon',
    i18n: 'Templates'
  },
  {
    url: '/admin/sequences/',
    name: 'Sequences',
    icon: 'MapIcon',
    i18n: 'Sequences'
  },
  {
    url: '/admin/operations/',
    name: 'Operations',
    slug: 'opra',
    icon: 'SlidersIcon',
    i18n: 'Operations'
  },
  {
    url: '/admin/steps/',
    name: 'Steps',
    slug: 'Steps',
    icon: 'BarChartIcon',
    i18n: 'Steps'
  },
  {
    url: '/admin/status/',
    name: 'status',
    slug: 'status',
    icon: 'CircleIcon',
    i18n: 'Status'
  },
  {
    url: '/admin/flows/',
    name: 'admin-flows',
    slug: 'flows',
    icon: 'SmileIcon',
    i18n: 'Flows'
  },
  {
    url: '/admin/notrizations/',
    name: 'admin-notrizations',
    slug: 'notrizations',
    icon: 'BookIcon',
    i18n: 'Notrizations'
  },
  {
    url: '/admin/seats/',
    name: 'Seats',
    slug: 'seats',
    icon: 'LayersIcon',
    i18n: 'Seats'
  },
  {
    url: '/admin/devices/',
    name: 'Devices',
    slug: 'devices',
    icon: 'ServerIcon',
    i18n: 'Devices'
  },
  {
    url: '/admin/licences',
    name: 'licences-admin',
    slug: 'licences',
    icon: 'CopyIcon',
    i18n: 'Licences'
  },
  {
    url: '/admin/wallets',
    name: 'wallets-admin',
    slug: 'wallets',
    icon: 'BriefcaseIcon',
    i18n: 'Wallets'
  },
  {
    url: '/admin/payments',
    name: 'payments-admin',
    slug: 'payments',
    icon: 'DollarSignIcon',
    i18n: 'Payments'
  },
  {
    url: '/admin/limits/',
    name: 'Settings',
    slug: 'sttng',
    icon: 'LinkIcon',
    i18n: 'Limits'
  },
  {
    url: '/admin/presets/',
    name: 'Presets',
    slug: 'Presets',
    icon: 'LinkIcon',
    i18n: 'Presets'
  },
  {
    url: '/admin/subsciptions/',
    name: 'subsciptions',
    slug: 'subsciptions',
    icon: 'LinkIcon',
    i18n: 'Subsciptions'
  },
  {
    url: '/admin/modules/',
    name: 'Modules',
    slug: 'Modules',
    icon: 'RssIcon',
    i18n: 'Modules'
  },
  {
    url: '/admin/settings/',
    name: 'Settings',
    slug: 'sttng',
    icon: 'SettingsIcon',
    i18n: 'Settings'
  },
  {
    url: '/admin/parameters/',
    name: 'parameters',
    slug: 'parameters',
    icon: 'SettingsIcon',
    i18n: 'Parameters'
  },
  {
    url: '/admin/certifications/',
    name: 'certifications',
    slug: 'certifications',
    icon: 'SettingsIcon',
    i18n: 'Certifications'
  },
  {
    url: '/admin/apps/tasks/all',
    name: 'ainbox',
    slug: 'app-tasks',
    icon: 'ListIcon',
    i18n: 'Tasks'
  },
  {
    url: '/admin/notifications',
    name: 'notifications',
    slug: 'app-notifications',
    icon: 'BellIcon',
    i18n: 'Notifications'
  },
  {
    url: '/admin/logs',
    name: 'logs',
    slug: 'app-logs',
    icon: 'FileTextIcon',
    i18n: 'Logs'
  }
  
]
  