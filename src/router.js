import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth/authService'

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [

    // ******************************************************************************
    // Auth Routes
    // ******************************************************************************
    {
      path: '/',
      component: () => import('@/layouts/fullpage/FullPage.vue'),
      children: [
        {
          path: '/',
          redirect: '/auth/login'
        },
        {
          path: '/auth/login',
          name: 'auth-login',
          component: () => import('@/views/auth/Login/index.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/register',
          name: 'auth-register',
          component: () => import('@/views/auth/Register/index.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/forgot-password',
          name: 'auth-passforget',
          component: () => import('@/views/auth/Forgetpass/index.vue'),
          meta: {
            rule: 'editor'
          }
        }
      ]
    },


    // ******************************************************************************
    // User Routes
    // ******************************************************************************

    // Administrator Routes
    // =============================================================================
    {
      path: '/admin/',
      component: () => import('@/layouts/user/Admin.vue'),
      children: [
        // Dashboard Analytics
        {
          path: '/admin/',
          redirect: '/admin/dashboard'
        },
        {
          path: '/admin/dashboard',
          name: 'admin-dashboard',
          component: () => import('@/views/user/admin/dashboard/Index.vue'),
          meta: {
            pageTitle: 'Dashboard Analytics',
            rule: 'admin'
          }
        },
        // Abis
        {
          path: '/admin/abis',
          name: 'admin-abis',
          component: () => import('@/views/user/admin/abis/Index.vue'),
          meta: {
            pageTitle: 'Abis',
            rule: 'admin'
          }
        },
        // Users
        {
          path: '/admin/users',
          name: 'admin-users',
          component: () => import('@/views/user/admin/users/Index.vue'),
          meta: {
            pageTitle: 'Users',
            rule: 'admin'
          }
        },
        {
          path: '/admin/users/view/:id',
          name: 'admin-users',
          component: () => import('@/views/user/admin/users/View.vue'),
          meta: {
            pageTitle: 'User View',
            rule: 'admin'
          }
        },
        {
          path: '/admin/users/edit/:id',
          name: 'admin-users-edit',
          component: () => import('@/views/user/admin/users/Edit.vue'),
          meta: {
            pageTitle: 'User Edit',
            rule: 'admin'
          }
        },
        // Rules
        {
          path: '/admin/rules',
          name: 'admin-rules',
          component: () => import('@/views/user/admin/rules/Index.vue'),
          meta: {
            pageTitle: 'Rules',
            rule: 'admin'
          }
        },
        // Partners
        {
          path: '/admin/partners',
          name: 'admin-partners',
          component: () => import('@/views/user/admin/partners/Index.vue'),
          meta: {
            pageTitle: 'Partners',
            rule: 'admin'
          }
        },
        // Customers
        {
          path: '/admin/customers',
          name: 'admin-customers',
          component: () => import('@/views/user/admin/customers/Index.vue'),
          meta: {
            pageTitle: 'Customers',
            rule: 'admin'
          }
        },
        // operators
        {
          path: '/admin/operators',
          name: 'admin-operators',
          component: () => import('@/views/user/admin/operators/Index.vue'),
          meta: {
            pageTitle: 'Operators',
            rule: 'admin'
          }
        },
        // person
        {
          path: '/admin/person',
          name: 'admin-person',
          component: () => import('@/views/user/admin/person/Index.vue'),
          meta: {
            pageTitle: 'Person',
            rule: 'admin'
          }
        },
        // infos
        {
          path: '/admin/infos',
          name: 'admin-infos',
          component: () => import('@/views/user/admin/infos/Index.vue'),
          meta: {
            pageTitle: 'Information',
            rule: 'admin'
          }
        },
        // documents
        {
          path: '/admin/documents',
          name: 'admin-documents',
          component: () => import('@/views/user/admin/documents/Index.vue'),
          meta: {
            pageTitle: 'Documents',
            rule: 'admin'
          }
        },
        // templates
        {
          path: '/admin/templates',
          name: 'admin-templates',
          component: () => import('@/views/user/admin/templates/Index.vue'),
          meta: {
            pageTitle: 'Templates',
            rule: 'admin'
          }
        },
        // Sequences
        {
          path: '/admin/sequences/',
          name: 'admin-sequences',
          component: () => import('@/views/user/admin/sequences/Index.vue'),
          meta: {
            pageTitle: 'Sequences',
            rule: 'admin'
          }
        },
        // Operations
        {
          path: '/admin/operations/',
          name: 'admin-operations',
          component: () => import('@/views/user/admin/operations/Index.vue'),
          meta: {
            pageTitle: 'Operations',
            rule: 'admin'
          }
        },
        // Steps
        {
          path: '/admin/steps/',
          name: 'admin-steps',
          component: () => import('@/views/user/admin/steps/Index.vue'),
          meta: {
            pageTitle: 'Steps',
            rule: 'admin'
          }
        },
        // Status
        {
          path: '/admin/status/',
          name: 'admin-status',
          component: () => import('@/views/user/admin/status/Index.vue'),
          meta: {
            pageTitle: 'Status',
            rule: 'admin'
          }
        },
        // flows
        {
          path: '/admin/flows/',
          name: 'admin-flows',
          component: () => import('@/views/user/admin/flows/Index.vue'),
          meta: {
            pageTitle: 'Flows',
            rule: 'admin'
          }
        },
        // notrizations
        {
          path: '/admin/notrizations/',
          name: 'admin-flows',
          component: () => import('@/views/user/admin/notrizations/Index.vue'),
          meta: {
            pageTitle: 'notrizations',
            rule: 'admin'
          }
        },
        // Seats
        {
          path: '/admin/seats/',
          name: 'admin-seats',
          component: () => import('@/views/user/admin/seats/Index.vue'),
          meta: {
            pageTitle: 'Seats',
            rule: 'admin'
          }
        },
        // Devices
        {
          path: '/admin/devices/',
          name: 'admin-devices',
          component: () => import('@/views/user/admin/devices/Index.vue'),
          meta: {
            pageTitle: 'Devices',
            rule: 'admin'
          }
        },
        // Licences
        {
          path: '/admin/licences/',
          name: 'admin-licences',
          component: () => import('@/views/user/admin/licences/Index.vue'),
          meta: {
            pageTitle: 'Licences',
            rule: 'admin'
          }
        },
        // Wallets
        {
          path: '/admin/wallets/',
          name: 'admin-wallets',
          component: () => import('@/views/user/admin/wallets/Index.vue'),
          meta: {
            pageTitle: 'Wallets',
            rule: 'admin'
          }
        },       
        // Payments
        {
          path: '/admin/payments/',
          name: 'admin-payments',
          component: () => import('@/views/user/admin/payments/Index.vue'),
          meta: {
            pageTitle: 'Payments',
            rule: 'admin'
          }
        },
        // Limits
        {
          path: '/admin/limits/',
          name: 'admin-limits',
          component: () => import('@/views/user/admin/limits/Index.vue'),
          meta: {
            pageTitle: 'Limits',
            rule: 'admin'
          }
        },
        // Presets
        {
          path: '/admin/presets/',
          name: 'admin-presets',
          component: () => import('@/views/user/admin/presets/Index.vue'),
          meta: {
            pageTitle: 'Presets',
            rule: 'admin'
          }
        },
        // subsciptions
        {
          path: '/admin/subsciptions/',
          name: 'admin-subsciptions',
          component: () => import('@/views/user/admin/subsciptions/Index.vue'),
          meta: {
            pageTitle: 'Subsciptions',
            rule: 'admin'
          }
        },
        // Modules
        {
          path: '/admin/modules/',
          name: 'admin-modules',
          component: () => import('@/views/user/admin/modules/Index.vue'),
          meta: {
            pageTitle: 'Modules',
            rule: 'admin'
          }
        },
        // Settings
        {
          path: '/admin/settings/',
          name: 'admin-settings',
          component: () => import('@/views/user/admin/settings/Index.vue'),
          meta: {
            pageTitle: 'Settings',
            rule: 'admin'
          }
        },
        // Parameters
        {
          path: '/admin/parameters/',
          name: 'admin-parameters',
          component: () => import('@/views/user/admin/parameters/Index.vue'),
          meta: {
            pageTitle: 'Parameters',
            rule: 'admin'
          }
        },
        // Certifications
        {
          path: '/admin/certifications/',
          name: 'admin-certifications',
          component: () => import('@/views/user/admin/certifications/Index.vue'),
          meta: {
            pageTitle: 'Certifications',
            rule: 'admin'
          }
        },
        // Tasks
        {
          path: '/admin/apps/tasks/',
          redirect: '/admin/apps/tasks/all',
          name: 'emailop'
        },
        {
          path: '/admin/apps/tasks/:filter',
          name: 'op--tasks',
          component: () => import('@/views/user/admin/tasks/Index.vue'),
          meta: {
            rule: 'editor',
            no_scroll: true
          }
        },
        // Notifications
        {
          path: '/admin/notifications/',
          name: 'admin-notifications',
          component: () => import('@/views/user/admin/notifications/Index.vue'),
          meta: {
            pageTitle: 'Notifications',
            rule: 'admin'
          }
        },
        // Logs
        {
          path: '/admin/logs/',
          name: 'admin-logs',
          component: () => import('@/views/user/admin/logs/Index.vue'),
          meta: {
            pageTitle: 'Logs',
            rule: 'admin'
          }
        }
      ]
    },
    // Partner Routes
    // =============================================================================
    {
      path: '/partner/',
      component: () => import('@/layouts/user/Partner.vue'),
      children: [

        // Dashboard Analytics
        {
          path: '/partner/',
          redirect: '/partner/dashboard'
        },
        {
          path: '/partner/dashboard',
          name: 'partner-dashboard',
          component: () => import('@/views/user/partner/dashboard/Index.vue'),
          meta: {
            pageTitle: 'Dashboard',
            rule: 'admin'
          }
        },

        // Customers
        {
          path: '/partner/customers/list',
          name: 'partner-customers-list',
          component: () => import('@/views/user/partner/customers/Index.vue'),
          meta: {
            pageTitle: 'Customers',
            rule: 'editor'
          }
        },
        
        // Licences
        {
          path: '/partner/licences/',
          name: 'partner-licences',
          component: () => import('@/views/user/partner/licences/Index.vue'),
          meta: {
            pageTitle: 'Licences',
            rule: 'editor'
          }
        },

        // Wallets
        {
          path: '/partner/wallets/',
          name: 'partner-wallets',
          component: () => import('@/views/user/partner/wallets/Index.vue'),
          meta: {
            pageTitle: 'Wallets',
            rule: 'editor'
          }
        },

        // Settings
        {
          path: '/partner/settings',
          name: 'partner-settings',
          component: () => import('@/views/user/partner/settings/Index.vue'),
          meta: {
            pageTitle: 'Settings',
            rule: 'admin'
          }
        }
      ]
    },
    // Company Routes
    // =============================================================================
    {
      path: '/company/',
      component: () => import('./layouts/user/Company.vue'),
      children: [

        // Dashboard
        {
          path: '/company/',
          redirect: '/company/dashboard'
        },
        {
          path: '/company/dashboard',
          name: 'company-dashboard',
          component: () => import('@/views/user/company/dashboard/Index.vue'),
          meta: {
            pageTitle: 'Dashboard',
            rule: 'admin'
          }
        },
        
        // Operators
        {
          path: '/company/operators/',
          name: 'company-operators',
          component: () => import('@/views/user/company/operators/Index.vue'),
          meta: {
            pageTitle: 'Operators Add/Modify',
            rule: 'admin'
          }
        },
        
        // Seats
        {
          path: '/company/seats',
          name: 'company-seats',
          component: () => import('@/views/user/company/seats/Index.vue'),
          meta: {
            pageTitle: 'Seats',
            rule: 'editor'
          }
        },

        // Devices
        {
          path: '/company/devices',
          name: 'company-devices',
          component: () => import('@/views/user/company/devices/Index.vue'),
          meta: {
            pageTitle: 'Devices',
            rule: 'editor'
          }
        },

        // Licences
        {
          path: '/company/licences/',
          name: 'company-licences',
          component: () => import('@/views/user/company/licences/Index.vue'),
          meta: {
            pageTitle: 'Licences',
            rule: 'editor'
          }
        },

        // Documents
        {
          path: '/company/documents',
          name: 'company-documents',
          component: () => import('@/views/user/company/documents/Index.vue'),
          meta: {
            pageTitle: 'Documents',
            rule: 'editor'
          }
        },

        // Templates
        {
          path: '/company/templates',
          name: 'company-templates',
          component: () => import('@/views/user/company/templates/Index.vue'),
                
          meta: {
            pageTitle: 'Templates',
            rule: 'editor'
          }
        },

        // Sequences
        {
          path: '/company/sequences/',
          name: 'company-sequences',
          component: () => import('@/views/user/company/sequences/Index.vue'),
          meta: {
            pageTitle: 'Sequences',
            rule: 'admin'
          }
        },

        // Flows
        {
          path: '/company/flows',
          name: 'company-flows',
          component: () => import('@/views/user/company/flows/Index.vue'),
          meta: {
            pageTitle: 'Flows',
            rule: 'editor'
          }
        },
        
        // Notrizations
        {
          path: '/company/notrizations',
          name: 'company-notrizations',
          component: () => import('@/views/user/company/notrizations/Index.vue'),
          meta: {
            pageTitle: 'Notrizations',
            rule: 'editor'
          }
        },

        // Operation
        {
          path: '/company/operations',
          name: 'company-operations',
          component: () => import('@/views/user/company/operations/Index.vue'),
          meta: {
            pageTitle: 'Operation',
            rule: 'editor'
          }
        },
        
        // Wallets
        {
          path: '/company/wallets/',
          name: 'company-wallets',
          component: () => import('@/views/user/company/wallets/Index.vue'),
          meta: {
            pageTitle: 'Wallets',
            rule: 'editor'
          }
        },

        // Limits
        {
          path: '/company/limits',
          name: 'company-limits',
          component: () => import('@/views/user/company/limits/Index.vue'),
          meta: {
            pageTitle: 'Limits',
            rule: 'admin'
          }
        },

        // Settings
        {
          path: '/company/settings',
          name: 'company-settings',
          component: () => import('@/views/user/company/settings/Index.vue'),
          meta: {
            pageTitle: 'Settings',
            rule: 'admin'
          }
        }
      ]
    },
    // Operator Routes
    // =============================================================================
    {
      path: '/operator/',
      component: () => import('./layouts/user/Operator.vue'),
      children: [

        // Dashboard
        {
          path: '/operator/',
          redirect: '/operator/dashboard'
        },
        {
          path: '/operator/dashboard',
          name: 'operator-dashboard',
          component: () => import('@/views/user/operator/dashboard/Index.vue'),
          meta: {
            pageTitle: 'Dashboard',
            rule: 'admin'
          }
        },

        // Documents
        {
          path: '/operator/documents',
          name: 'operator-documents',
          component: () => import('@/views/user/operator/documents/Index.vue'),

          meta: {
            pageTitle: 'Documents',
            rule: 'editor'
          }
        },

        // Templates
        {
          path: '/operator/templates',
          name: 'operator-templates',
          component: () => import('@/views/user/operator/templates/Index.vue'),
        
          meta: {
            pageTitle: 'Templates',
            rule: 'editor'
          }
        },

        // Sequences
        {
          path: '/operator/sequences/identify',
          name: 'operator-sequences-identify',
          component: () => import('@/views/user/operator/sequences/Identify.vue'),
          meta: {
            pageTitle: 'Sequences Identify',
            rule: 'admin'
          }
        },
        {
          path: '/operator/sequences/enroll',
          name: 'operator-sequences-enroll',
          component: () => import('@/views/user/operator/sequences/Enroll.vue'),
          meta: {
            pageTitle: 'Sequences Enroll',
            rule: 'admin'
          }
        },
        {
          path: '/operator/sequences/signature',
          name: 'operator-sequences-signature',
          component: () => import('@/views/user/operator/sequences/Signature.vue'),
          meta: {
            pageTitle: 'Sequences Signature',
            rule: 'admin'
          }
        },
        {
          path: '/operator/sequences/notary',
          name: 'operator-sequences-notary',
          component: () => import('@/views/user/operator/sequences/Notary.vue'),
          meta: {
            pageTitle: 'Sequences Notary',
            rule: 'admin'
          }
        },
        {
          path: '/operator/sequences/verify',
          name: 'operator-sequences-verify',
          component: () => import('@/views/user/operator/sequences/Verify.vue'),
          meta: {
            pageTitle: 'Sequences Verify',
            rule: 'admin'
          }
        },

        // Flows
        {
          path: '/operator/flows',
          name: 'operator-flows',
          component: () => import('@/views/user/operator/flows/Index.vue'),
          meta: {
            pageTitle: 'Flows',
            rule: 'editor'
          }
        },

        // Notrizations
        {
          path: '/operator/notrizations',
          name: 'operator-notrizations',
          component: () => import('@/views/user/operator/notrizations/Index.vue'),
          meta: {
            pageTitle: 'Notrizations',
            rule: 'editor'
          }
        },

        // Apps
        {
          path: '/operator/apps/tasks/',
          redirect: '/operator/apps/tasks/all',
          name: 'emailop'
        },
        {
          path: '/operator/apps/tasks/:filter',
          name: 'op--tasks',
          component: () => import('@/views/user/operator/apps/Tasks.vue'),
          meta: {
            rule: 'editor',
            no_scroll: true
          }
        },
        {
          path: '/operator/apps/email/',
          redirect: '/operator/apps/email/inbox',
          name: 'emailop'
        },
        {
          path: '/operator/apps/email/:filter',
          component: () => import('@/views/user/operator/apps/Email.vue'),
          meta: {
            rule: 'editor',
            parent: 'email',
            no_scroll: true
          }
        },
        {
          path: '/operator/apps/chat',
          name: 'chat',
          component: () => import('@/views/user/operator/apps/Chat.vue'),
          meta: {
            rule: 'editor',
            no_scroll: true
          }
        },
        {
          path: '/operator/apps/calendar',
          name: 'calendar-simple-calendar',
          component: () => import('@/views/user/operator/apps/Calendar.vue'),
          meta: {
            rule: 'editor',
            no_scroll: true
          }
        },

        // Operation
        {
          path: '/operator/operation/pending',
          name: 'operator-operation-pending',
          component: () => import('@/views/user/operator/operations/Pending.vue'),
          meta: {
            pageTitle: 'Operation Pending',
            rule: 'editor'
          }
        },
        {
          path: '/operator/operation/waiting',
          name: 'operator-operation-waiting',
          component: () => import('@/views/user/operator/operations/Waiting.vue'),
          meta: {
            pageTitle: 'Operation Waiting',
            rule: 'editor'
          }
        },
        {
          path: '/operator/operation/completed',
          name: 'operator-operation-completed',
          component: () => import('@/views/user/operator/operations/Completed.vue'),
          meta: {
            pageTitle: 'Operation Completed',
            rule: 'editor'
          }
        },

        // Profile
        {
          path: '/operator/profile',
          name: 'operator-profile',
          component: () => import('@/views/user/operator/profile/Index.vue'),
          meta: {
            pageTitle: 'Profile',
            rule: 'editor'
          }
        },

        // Settings
        {
          path: '/operator/settings',
          name: 'operator-operation',
          component: () => import('@/views/user/operator/settings/Index.vue'),
          meta: {
            pageTitle: 'Settings',
            rule: 'editor'
          }
        }
      ]
    },
    // Person Routes
    // =============================================================================
    {
      path: '/person/',
      component: () => import('./layouts/user/Person.vue'),
      children: [

        // Dashboard Home
        {
          path: '/person/',
          redirect: '/person/dashboard'
        },
        {
          path: '/person/dashboard',
          name: 'person-dashboard',
          component: () => import('@/views/user/person/dashboard/Index.vue'),
          meta: {
            pageTitle: 'Dashboard',
            rule: 'admin'
          }
        },

        // Notifications
        {
          path: '/person/notifications/sent',
          name: 'person-notifications-sent',
          component: () => import('@/views/user/person/notifications/Sent.vue'),
          meta: {
            pageTitle: 'Notifications Sent',
            rule: 'admin'
          }
        },
        {
          path: '/person/notifications/received',
          name: 'person-notifications-received',
          component: () => import('@/views/user/person/notifications/Received.vue'),
          meta: {
            pageTitle: 'Notifications Received',
            rule: 'admin'
          }
        },

        // Documents
        {
          path: '/person/documents',
          name: 'person-docs',
          component: () => import('@/views/user/person/documents/Index.vue'),
          meta: {
            pageTitle: 'Documents',
            rule: 'editor'
          }
        },

        // Templates
        {
          path: '/person/templates',
          name: 'person-templates',
          component: () => import('@/views/user/person/templates/Index.vue'),
          meta: {
            pageTitle: 'Templates',
            rule: 'editor'
          }
        },

        // Flows
        {
          path: '/person/flows',
          name: 'person-flows',
          component: () => import('@/views/user/person/flows/Index.vue'),
          meta: {
            pageTitle: 'Flows',
            rule: 'editor'
          }
        },

        // Notrizations
        {
          path: '/person/notrizations',
          name: 'person-notrizations',
          component: () => import('@/views/user/person/notrizations/Index.vue'),
          meta: {
            pageTitle: 'Notrizations',
            rule: 'editor'
          }
        },

        // Apps
        {
          path: '/person/tasks/',
          redirect: '/person/tasks/all'
        },
        {
          path: '/person/apps/tasks/:filter',
          name: 'person-apps-tasks',
          component: () => import('@/views/user/person/apps/Tasks.vue'),
          meta: {
            rule: 'editor',
            no_scroll: true
          }
        },
        {
          path: '/person/email/',
          redirect: '/person/email/inbox'
        },
        {
          path: '/person/apps/email/:filter',
          name: 'person-email',
          component: () => import('@/views/user/person/apps/Email.vue'),
          meta: {
            rule: 'editor',
            parent: 'email',
            no_scroll: true
          }
        },
        {
          path: '/person/apps/chat',
          name: 'person-apps-chat',
          component: () => import('@/views/user/person/apps/Chat.vue'),
          meta: {
            rule: 'editor',
            no_scroll: true
          }
        },
        {
          path: '/person/apps/calendar',
          name: 'person-app-calendar',
          component: () => import('@/views/user/person/apps/Calendar.vue'),
          meta: {
            rule: 'editor',
            no_scroll: true
          }
        },


        // Operation
        {
          path: '/person/operation/pending',
          name: 'person-operation-pending',
          component: () => import('@/views/user/person/operations/Pending.vue'),
          meta: {
            pageTitle: 'Operation Pending',
            rule: 'editor'
          }
        },
        {
          path: '/person/operation/waiting',
          name: 'person-operation-waiting',
          component: () => import('@/views/user/person/operations/Waiting.vue'),
          meta: {
            pageTitle: 'Operation Waiting',
            rule: 'editor'
          }
        },
        {
          path: '/person/operation/completed',
          name: 'person-operation-completed',
          component: () => import('@/views/user/person/operations/Completed.vue'),
          meta: {
            pageTitle: 'Operation Completed',
            rule: 'editor'
          }
        },

        // Profile
        {
          path: '/person/profile',
          name: 'person-profile',
          component: () => import('@/views/user/person/profile/Index.vue'),
          meta: {
            pageTitle: 'Profile',
            rule: 'editor'
          }
        },

        // Settings
        {
          path: '/person/settings',
          name: 'person-settings',
          component: () => import('@/views/user/person/settings/Index.vue'),
          meta: {
            pageTitle: 'Settings',
            rule: 'editor'
          }
        },

        // Support
        {
          path: '/person/support/knowledge',
          name: 'person-knowledge',
          component: () => import('@/views/user/person/support/Knowledge.vue'),
          meta: {
            pageTitle: 'Knowledge',
            rule: 'editor'
          }
        },
        {
          path: '/person/support/faq',
          name: 'person-faq',
          component: () => import('@/views/user/person/support/FAQ.vue'),
          meta: {
            pageTitle: 'FAQ',
            rule: 'editor'
          }
        }
        
      ]
    },

    // ******************************************************************************
    // Extra Routes
    // ******************************************************************************
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/error-404'
    },
    {
      path: '/error-404/',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        rule: 'editor'
      }
    }
  ]
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(() => {

    // get firebase current user
    const firebaseCurrentUser = firebase.auth().currentUser

    // if (
    //     to.path === "/pages/login" ||
    //     to.path === "/pages/forgot-password" ||
    //     to.path === "/pages/error-404" ||
    //     to.path === "/pages/error-500" ||
    //     to.path === "/pages/register" ||
    //     to.path === "/callback" ||
    //     to.path === "/pages/comingsoon" ||
    //     (auth.isAuthenticated() || firebaseCurrentUser)
    // ) {
    //     return next();
    // }

    // If auth required, check login. If login fails redirect to login page
    if (to.meta.authRequired) {
      if (!(auth.isAuthenticated() || firebaseCurrentUser)) {
        router.push({ path: '/pages/login', query: { to: to.path } })
      }
    }

    return next()
    // Specify the current path as the customState parameter, meaning it
    // will be returned to the application after auth
    // auth.login({ target: to.path });

  })

})

export default router
