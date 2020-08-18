import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const EnergyAndUtilities = () => import('@/views/EnergyAndUtilities')

//Pages
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')
const Settings = () => import('@/views/pages/Settings')
const DeviceEnergySettings = () => import('@/views/pages/deviceEnergySettings')

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
const AddDevice = () => import('@/views/Rooms/AddDevice')
const AddRooms = () => import('@/views/Rooms/AddRooms')
 
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
          path: 'energy-and-utilities',
          name: 'Energy and Utilities',
          component: EnergyAndUtilities,
        }, 

        {
          path: '/Rooms',
          name: 'Rooms',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'rooms-add',
              name: 'Add New Room',
              component: AddRooms
            },
            {
              path: 'device-add',
              name: 'Add New Device',
              component: AddDevice
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
        },
        {
        path: 'settings',
        name: 'Settings',
        component: Settings
        },
        {
        path: 'device-energy-settings',
        name: 'Device Energy Settings',
        component: DeviceEnergySettings
        }
      ]
    },
    {
      path: '/users',
      redirect: '/users/users',
      name: 'Users',
      component: TheContainer, 
      children: [
        {
          path: 'users',
          name: 'Users',
          component: Users
        },
        {
          path: 'user',
          name: 'Profile',
          component: User
        }
      ]
    },
    
  ]
}

