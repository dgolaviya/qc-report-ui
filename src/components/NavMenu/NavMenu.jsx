import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import reports from '../../assets/reports.png';

const menuItems = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    color: 'green-text'
  },
  {
    title: 'Logout',
    icon: 'power_settings_new',
    color: 'red-text'
  }
];

const NavMenu = (props) => {
  return (
    <div className="left-menu col s4 m3 l2">
      <img
        className="menu-image responsive-img"
        alt=""
        src={reports}
      />
      <ul className="collection menu-items">
        {menuItems.map(item =>
          <MenuItem
            key={item.title}
            icon={item.icon}
            color={item.color}
            title={item.title}
            onClickItem={props.onClickItem}
          />)}
      </ul>
    </div>
  )
};

export default NavMenu;
