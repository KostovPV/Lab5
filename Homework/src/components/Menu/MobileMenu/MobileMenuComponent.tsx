import React, { useState } from 'react';
import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './MobileMenuComponent.module.scss';

interface MenuItem {
  id: string;
  name?: string;
  displayName?: string;
  fields: {
    title?: Field<string>;
    url?: LinkField;
    children?: { value?: MenuItem[] } | MenuItem[];
  };
}

interface MobileMenuProps extends ComponentProps {
  fields: {
    menuIcon?: ImageField;
    items?: MenuItem[];
    menuItems?: { value?: MenuItem[] } | MenuItem[];
  };
}

const MobileMenuComponent = ({ fields }: MobileMenuProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenus, setActiveSubmenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (submenuId: string) => {
    setActiveSubmenus((prev) => ({
      ...prev,
      [submenuId]: !prev[submenuId], // Toggle specific submenu
    }));
  };

  const extractChildren = (children?: { value?: MenuItem[] } | MenuItem[]): MenuItem[] => {
    if (!children) return [];
    return Array.isArray(children) ? children : children.value || [];
  };

  const menuItems: MenuItem[] =
    fields?.items && Array.isArray(fields.items)
      ? fields.items
      : Array.isArray(fields?.menuItems)
      ? fields.menuItems
      : fields?.menuItems?.value || [];

  const renderMenuItems = (items: MenuItem[] = [], level = 0): JSX.Element[] => {
    return items.map((item) => {
      const { fields = {} } = item;
      const titleText = fields.title?.value || item.displayName || item.name || 'Untitled';
      const urlField = fields.url;
      const urlValue = urlField?.value?.href || '#';
      const urlTarget = urlField?.value?.target || '_self';

      const childrenItems = extractChildren(fields.children);
      const isSubmenuActive = !!activeSubmenus[item.id];

      return (
        <li key={item.id} className={styles.menuItem}>
          <div className={styles.menuItemWrapper}>
            <a
              href={urlValue}
              target={urlTarget}
              rel={urlTarget === '_blank' ? 'noopener noreferrer' : undefined}
              className={styles.menuLink}
              onClick={(e) => {
                if (childrenItems.length > 0) {
                  e.preventDefault();
                  toggleSubmenu(item.id);
                }
              }}
            >
              {titleText}
            </a>
            {childrenItems.length > 0 && (
              <a
                href="#"
                className={styles.meanExpand}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSubmenu(item.id);
                }}
              >
                {isSubmenuActive ? '−' : '+'}
              </a>
            )}
          </div>
          {childrenItems.length > 0 && (
            <ul className={styles.subMenu} style={{ display: isSubmenuActive ? 'block' : 'none' }}>
              {renderMenuItems(childrenItems, level + 1)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className={styles.mobileMenuArea}>
      <div className={styles.logo}>
        <a href="/">
          <img src={fields.menuIcon?.value?.src || '/media/img/logo.webp'} alt="EDUCAT" />
        </a>
      </div>
      <div className={styles.container}>
        <div className={styles.menuHeader}>
          <span className={styles.menuHeading}>Menu</span>
          <a
            href="#nav"
            className={styles.meanmenuReveal}
            onClick={toggleMenu}
            style={{ fontSize: '18px', textAlign: 'center' }}
          >
            {menuOpen ? '×' : <><span></span><span></span><span></span></>}
          </a>
        </div>
        <nav className={styles.meanNav} style={{ display: menuOpen ? 'block' : 'none' }}>
          <ul>{renderMenuItems(menuItems)}</ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuComponent;
