import React from 'react';
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './MenuComponent.module.scss';

interface MenuItem {
  id?: string;
  name?: string;
  displayName?: string;
  fields: {
    title?: Field<string>;
    url?: Field<{ href: string; target?: string }>;
    children?: { value?: MenuItem[] } | MenuItem[];
  };
}

interface MenuProps extends ComponentProps {
  fields: {
    menuIcon?: ImageField;
    items?: MenuItem[];
    menuItems?: { value?: MenuItem[] } | MenuItem[];
  };
}

const MenuComponent = ({ fields }: MenuProps): JSX.Element => {
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

      // const renderMenuItems = (items: MenuItem[], depth = 0): JSX.Element[] => {
      //   return items.map((item) => {
      //     const children = extractChildren(item.fields.children);
      //     const hasChildren = children.length > 0;
      
      //     return (
      //       <li key={`${item.id}-'desktop'`} className={styles.menuItem}>
      //         <a
      //           href={item.fields.url?.value?.href || '#'}
      //           className={styles.menuLink}
      //           target={item.fields.url?.value?.target || '_self'}
      //         >
      //           {item.fields.title?.value || item.displayName || item.name || 'Untitled'}
      //         </a>
      //         {hasChildren && (
      //           <ul className={depth === 0 ? styles.subMenu : styles.insideMenu}>
      //             {renderMenuItems(children, depth + 1)}
      //           </ul>
      //         )}
      //       </li>
      //     );
      //   });
      // };
      
      const renderMenuItems = (items: MenuItem[], depth = 0): JSX.Element[] => {
        return items.map((item, index) => {
          const children = extractChildren(item.fields.children);
          const hasChildren = children.length > 0;
      
          return (
            <li key={`${item.id || 'menu-item'}-${depth}-${index}`} className={styles.menuItem}>
              <a
                href={item.fields.url?.value?.href || '#'}
                className={styles.menuLink}
                target={item.fields.url?.value?.target || '_self'}
              >
                {item.fields.title?.value || item.displayName || item.name || 'Untitled'}
              </a>
              {hasChildren && (
                <ul className={depth === 0 ? styles.subMenu : styles.insideMenu}>
                  {renderMenuItems(children, depth + 1)}
                </ul>
              )}
            </li>
          );
        });
      };
      
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <a href="/">
            <img src="https://htmldemo.net/edubuzz/edubuzz/img/logo/logo.png" alt="EDUCAT" />
          </a>
        </div>
      </div>
      {fields?.menuIcon?.value?.src && (
        <div className={styles.menuIcon}>
          <img src={fields.menuIcon.value.src} alt="Menu Icon" />
        </div>
      )}
      <ul className={styles.navList}>{renderMenuItems(menuItems)}</ul>
    </nav>
  );
};

export default MenuComponent;
