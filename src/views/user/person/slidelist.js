export default [
  {
    url: '/person/dashboard/',
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
    url: '/person/documents/',
    name: 'Documents',
    slug: 'docs',
    icon: 'FolderIcon',
    i18n: 'Documents'
  },
  {
    url: '/person/templates/',
    name: 'Documents',
    slug: 'templates',
    icon: 'BoxIcon',
    i18n: 'Templates'
  },
  {
    url: '/person/flows/',
    name: 'person-flows',
    slug: 'flows',
    icon: 'SmileIcon',
    i18n: 'Flows'
  },
  {
    url: '/person/notrizations/',
    name: 'person-notrizations',
    slug: 'notrizations',
    icon: 'BookIcon',
    i18n: 'Notrizations'
  },
  {
    url: null,
    name: 'Devices',
    slug: 'devices',
    icon: 'GridIcon',
    i18n: 'Apps',
    submenu: [
      {
        url: '/person/apps/tasks/all',
        name: 'atasx',
        slug: 'mail-app-tasks',
        i18n: 'Tasks'
      },
      {
        url: '/person/apps/email/inbox',
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
    url: null,
    name: 'Operations',
    slug: 'opra',
    icon: 'SlidersIcon',
    i18n: 'Operations',
    submenu: [
      {
        url: '/person/operation/pending/',
        name: 'pending',
        slug: 'pending-person',
        i18n: 'Pending'
      },
      {
        url: '/person/operation/waiting/',
        name: 'waiting',
        slug: 'waiting-operation',
        i18n: 'Waiting'
      },
      {
        url: '/person/operation/completed/',
        name: 'ccompleoper',
        slug: 'completed-operations',
        i18n: 'Completed'
      }
    ]
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
  },
  {
    url: null,
    name: 'Settings',
    slug: 'sttng',
    icon: 'HelpCircleIcon',
    i18n: 'Support',
    submenu: [
      {
        url: '/person/support/knowledge',
        name: 'otodo',
        slug: 'knowledge-app',
        i18n: 'Knowledge'
      },
      {
        url: '/person/support/faq/',
        name: 'opartials',
        slug: 'faq-app',
        i18n: 'FAQ'
      }
    ]
  }
]
  