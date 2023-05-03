import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

export const settings = [
  {
    icon: <FontAwesomeIcon icon={faCog} spin/>,
    to: '#',
    iconClosed: <FontAwesomeIcon icon={faAngleDown} />,
    iconOpened: <FontAwesomeIcon icon={faAngleUp} />,
  },
];
