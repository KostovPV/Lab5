import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the LibraryItemComponent component to the disconnected manifest.
 * @param {Manifest} manifest - The Sitecore JSS manifest instance.
 */
export default function LibraryItemComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'LibraryItemComponent',
    displayName: 'Library Item',
    icon: SitecoreIcon.Tag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'price', type: CommonFieldTypes.Number },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'saleLabel', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
