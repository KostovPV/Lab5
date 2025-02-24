import { Manifest, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function MobileMenuComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'MobileMenuComponent',
    templateName: 'MobileMenuComponent', 
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'menuIcon', type: CommonFieldTypes.Image },
      { name: 'menuItems', type: CommonFieldTypes.ContentList },
    ],
  });
}
