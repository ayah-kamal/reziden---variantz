import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')

const Charts = () => import('@/views/charts/Charts')
const Widgets = () => import('@/views/widgets/Widgets')

// Views - Components
const Cards = () => import('@/views/base/Cards')
const Forms = () => import('@/views/base/Forms')
const Switches = () => import('@/views/base/Switches')
const Tables = () => import('@/views/base/Tables')
const Tabs = () => import('@/views/base/Tabs')
const Breadcrumbs = () => import('@/views/base/Breadcrumbs')
const Carousels = () => import('@/views/base/Carousels')
const Collapses = () => import('@/views/base/Collapses')
const Jumbotrons = () => import('@/views/base/Jumbotrons')
const ListGroups = () => import('@/views/base/ListGroups')
const Navs = () => import('@/views/base/Navs')
const Navbars = () => import('@/views/base/Navbars')
const Paginations = () => import('@/views/base/Paginations')
const Popovers = () => import('@/views/base/Popovers')
const ProgressBars = () => import('@/views/base/ProgressBars')
const Tooltips = () => import('@/views/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/buttons/Dropdowns')
const BrandButtons = () => import('@/views/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('@/views/icons/CoreUIIcons')
const Brands = () => import('@/views/icons/Brands')
const Flags = () => import('@/views/icons/Flags')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Badges = () => import('@/views/notifications/Badges')
const Modals = () => import('@/views/notifications/Modals')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

//+
// Views - Rooms
const GuestBathroom = () => import('@/views/Rooms/GuestBathroom')
const GuestBedroom = () => import('@/views/Rooms/GuestBedroom')
const Kitchen = () => import('@/views/Rooms/Kitchen')
const LaundryRoom = () => import('@/views/Rooms/LaundryRoom')
const LivingRoom = () => import('@/views/Rooms/LivingRoom')
const MasterBathroom = () => import('@/views/Rooms/MasterBathroom')
const MasterBedroom = () => import('@/views/Rooms/MasterBedroom')

//+
//Views - Security
const Cameras = () => import('@/views/Security/Cameras')
const Safety = () => import('@/views/Security/Safety')
const Garage = () => import('@/views/Security/Garage')

//+
//Views - Add New
const AddDevice = () => import('@/views/Rooms/DeviceAdd')
const AddRoom = () => import('@/views/Rooms/RoomAdd')
 
// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }, 



        {
          path: '/Rooms',
          name: 'Rooms',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'room-add',
              name: 'Add New Room',
              component: AddRoom
            },
            {
              path: 'guest-bathroom',
              name: 'Guest Bathroom',
              component: GuestBathroom
              },
              {
                path: 'guest-bedroom',
                name: 'Guest Bedroom',
                component: GuestBedroom
                },
            {
            path: 'kitchen',
            name: 'Kitchen',
            component: Kitchen
            },
            {
              path: 'laundry-room',
              name: 'Laundry Room',
              component: LaundryRoom
              
            },
            {
              path: 'living-room',
              name: 'Living Room',
              component: LivingRoom 
            },
            {
              path: 'master-bathroom',
              name: 'Master Bathroom',
              component: MasterBathroom
            },
            {
              path: 'master-bedroom',
              name: 'Master Bedroom',
              component: MasterBedroom
            }
          ]
        },
        {
          path: '/Security',
          name: 'Security',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
            path: 'cameras',
            name: 'Cameras',
            component: Cameras
          },
          {
            path: 'Safety',
            name: 'Safety',
            component: Safety 
          },
          {
            path: 'garage',
            name: 'Garage',
            component: Garage
          }
          ]
        }
      ]
    },
    
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: TheContainer, 
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    },
    {
      path: '/Rooms',
      name: 'Roo',
      component: TheContainer,
      children: [
        
      ]
    }
  ]
}

