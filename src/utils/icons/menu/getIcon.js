import { MENU_ICONS } from './menu_icons';

const GetIcon = ({ name, active }) => {
  const find = MENU_ICONS(active).find((item) => item.name === name);

  if (find) {
    return find.icon;
  }
};

export default GetIcon;
