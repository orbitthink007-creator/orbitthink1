import Link from 'next/link';
import DropDown from './DropDown';
import data from '../../../data/main-data.json';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      {data.header.nav.map((item, index) => (
        <li key={index} className="menu-item-has-children">
          <Link href={item.href} onClick={() => setMobileToggle(false)}>
            {item.label}
          </Link>
          {item.subItems && (
            // <DropDown>
            <ul>
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.href} onClick={() => setMobileToggle(false)}>
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
            // </DropDown>
          )}
        </li>
      ))}
    </ul>
  );
}
