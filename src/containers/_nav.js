export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-home',
        /*badge: {
          color: 'primary',
          text: 'NEW'
        }*/
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Energy and Utilities',
        to: '/energy/energy-and-utilities',
        icon: 'cil-eco',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Profile']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Login',
        to: '/pages/login'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Register',
        to: '/pages/register'
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-1'
      },

      {
        _name: 'CSidebarNavTitle',
        _children: ['Rooms']
      },
    {
      _name: 'CSidebarNavItem',
      name: 'Add New Room',
      to: '/rooms/rooms-add',
      icon: 'cil-plus',
    },
    /*{
    _name: 'CSidebarNavItem',
      name: 'Add New Device',
      to: '/rooms/device-add',
      icon: 'cil-plus',
    },*/

      {
        _name: 'CSidebarNavItem',
        name: 'Living Room',
        to: '/rooms/living-room',
        icon: 'cil-sofa',
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Bedroom',
        route: '/rooms/bedrooms',
        icon: 'cil-Bed',
        items: [
          {
            name: 'Master Bedroom',
            to: '/rooms/master-bedroom'
          },
          {
            name: 'Guest Bedroom',
            to: '/rooms/guest-bedroom'
          },
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Kitchen',
        to: '/rooms/kitchen',
        icon: 'cil-fridge'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Bathroom',
        route: '/rooms/bathrooms',
        icon: 'cil-Bathroom',
        //add badge here!
        badge: {
          color: 'info',
          text: '2'
        },
        //
        items: [
          {
            name: 'Master Bathroom',
            to: '/rooms/master-bathroom',
            /*badge: {
              color: 'info',
              text: 'NEW',
              shape: 'pill'
            }*/
          },
          {
            name: 'Guest Bathroom',
            to: '/rooms/guest-bathroom'
          },
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Laundry Room',
        to: '/rooms/laundry-room',
        icon: 'cil-paint-bucket',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Security'],
        icon: 'cil-https'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Cameras',
        to: '/security/cameras',
        icon: 'cil-video'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Safety',
        to: '/security/Safety',
        icon: 'cil-settings'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Garage',
        to: '/security/garage',
        icon: 'cil-garage'
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-1'
      },
    ]
  }
]