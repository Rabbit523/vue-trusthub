export default [
  {
    url: '/operator/dashboard/',
    name: 'Dashboard',
    slug: 'dashboard',
    icon: 'HomeIcon',
    i18n: 'Dashboard'
  },
  {
    url: '/operator/documents/',
    name: 'Documents',
    slug: 'docs',
    icon: 'FolderIcon',
    i18n: 'Documents'
  },
  {
    url: '/operator/templates/',
    name: 'Documents',
    slug: 'templates',
    icon: 'BoxIcon',
    i18n: 'Templates'
  },
  {
    url: null,
    name: 'Operators',
    icon: 'MapIcon',
    i18n: 'Sequences',
    submenu: [
      {
        url: '/operator/sequences/identify',
        name: 'sidentify',
        slug: 'sequences-identify-operators',
        i18n: 'Identify'
      },
      {
        url: '/operator/sequences/enroll',
        name: 'senroll',
        slug: 'sequences-enroll-operators',
        i18n: 'Enroll'
      },
      {
        url: '/operator/sequences/signature',
        name: 'ssignature',
        slug: 'sequences-enroll-operators',
        i18n: 'Signature'
      },
      {
        url: '/operator/sequences/notary',
        name: 'snotary',
        slug: 'sequences-notary-operators',
        i18n: 'Notary'
      },
      {
        url: '/operator/sequences/verify',
        name: 'sverify',
        slug: 'sequences-verify-operators',
        i18n: 'Verify'
      }
    ]
  },
  {
    url: '/operator/flows/',
    name: 'operator-flows',
    slug: 'flows',
    icon: 'SmileIcon',
    i18n: 'Flows'
  },
  {
    url: '/operator/notrizations/',
    name: 'operator-notrizations',
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
        url: '/operator/apps/tasks/all',
        name: 'ainbox',
        slug: 'app-tasks',
        i18n: 'Tasks'
      },
      {
        url: '/operator/apps/email/inbox',
        name: 'ainbox',
        slug: 'mail-app-inbox',
        i18n: 'Mail'
      },
      {
        url: '/operator/apps/chat/',
        name: 'achat',
        slug: 'chat-app',
        i18n: 'Chat'
      },
      {
        url: '/operator/apps/calendar/',
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
        url: '/operator/operation/pending/',
        name: 'pending',
        slug: 'pending-operator',
        i18n: 'Pending'
      },
      {
        url: '/operator/operation/waiting/',
        name: 'waiting',
        slug: 'waiting-operation',
        i18n: 'Waiting'
      },
      {
        url: '/operator/operation/completed/',
        name: 'ccompleoper',
        slug: 'completed-operations',
        i18n: 'Completed'
      }
    ]
  },
  {
    url: '/operator/profile/',
    name: 'Profile',
    slug: 'profile',
    icon: 'UserIcon',
    i18n: 'Profile'
  },
  {
    url: '/operator/settings/',
    name: 'Settings',
    slug: 'sttng',
    icon: 'SettingsIcon',
    i18n: 'Settings'
  }
]
  