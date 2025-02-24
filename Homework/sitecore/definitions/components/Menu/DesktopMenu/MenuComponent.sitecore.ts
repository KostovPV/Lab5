import { Manifest, CommonFieldTypes, SitecoreIcon } from '@sitecore-jss/sitecore-jss-dev-tools';

export default function MenuComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'MenuComponent',
    templateName: 'MenuComponent',
    placeholders: ['jss-header'],
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'menuIcon', type: CommonFieldTypes.Image },
      { name: 'menuItems', type: CommonFieldTypes.ContentList },
    ],
  });
}
