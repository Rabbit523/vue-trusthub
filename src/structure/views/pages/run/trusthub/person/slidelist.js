export default [
  {
    url: '/person/home/',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },
  {
    url: null,
    name: 'notfiy',
    icon: 'BellIcon',
    i18n: 'Notifications',
    submenu: [
      {
        url: '/person/notifications/sent',
        name: 'sentno',
        slug: 'notifications-sent',
        i18n: 'Sent'
      },
      {
        url: '/person/notifications/received',
        name: 'recedno',
        slug: 'notifications-received',
        i18n: 'Recived'
      }
    ]
  },
  {
    url: null,
    name: 'Signature',
    icon: 'MapIcon',
    i18n: 'Signature',
    submenu: [
      {
        url: '/person/signature/upload',
        name: 'supload',
        slug: 'signature-upload',
        i18n: 'Upload'
      },
      {
        url: '/person/signature/sign',
        name: 'ssign',
        slug: 'signature-sign',
        i18n: 'To Sign'
      },
      {
        url: '/person/signature/signed',
        name: 'ssigned',
        slug: 'signature-signed',
        i18n: 'Signed'
      }
    ]
  },
  {
    url: '/person/flows/',
    name: 'person-flows',
    slug: 'flows',
    icon: 'SmileIcon',
    i18n: 'Flows'
  },
  {
    url: '/person/templates/',
    name: 'Documents',
    slug: 'templates',
    icon: 'BoxIcon',
    i18n: 'Templates'
  },
  {
    url: '/person/documents/',
    name: 'Documents',
    slug: 'docs',
    icon: 'FolderIcon',
    i18n: 'Documents'
  },
  {
    url: null,
    name: 'Devices',
    slug: 'devices',
    icon: 'GridIcon',
    i18n: 'Apps',
    submenu: [
      {
        url: '/person/apps/email/inbox/',
        name: 'ainbox',
        slug: 'mail-app-inbox',
        i18n: 'Mail'
      },
      {
        url: '/person/apps/chat/',
        name: 'achat',
        slug: 'chat-app',
        i18n: 'Chat'
      },
      {
        url: '/person/apps/calendar/',
        name: 'acalender',
        slug: 'calendar-app',
        i18n: 'Calendar'
      }
    ]
  },
  {
    url: '/person/operation/',
    name: 'Operations',
    slug: 'opra',
    icon: 'SlidersIcon',
    i18n: 'Operations'
  },
  {
    url: '/person/profile/',
    name: 'Profile',
    slug: 'profile',
    icon: 'UserIcon',
    i18n: 'Profile'
  },
  {
    url: '/person/settings/',
    name: 'Settings',
    slug: 'sttng',
    icon: 'SettingsIcon',
    i18n: 'Settings'
  }
]
  