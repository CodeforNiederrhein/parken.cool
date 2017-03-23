import React from 'react'
import { Link } from 'react-router-dom'
import capitalize from 'lodash/capitalize'
import MaterialDrawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

const Drawer = ({
  menuOpen,
  openMenu,
  closeMenu,
  cities
}) => (
  <MaterialDrawer
    docked={false}
    open={menuOpen}
    onRequestChange={(open) => open ? openMenu() : closeMenu()}
  >
    <AppBar
      title='Städte'
      onLeftIconButtonTouchTap={closeMenu}
    />
    {cities.map(
      city => (
          <MenuItem
            key={city}
            onTouchTap={closeMenu}
            containerElement={<Link to={`/${city}`} />}
          >
            {capitalize(city)}
          </MenuItem>
        )
      )
    }
  </MaterialDrawer>
)

export default Drawer
