import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the LibraryComponent component to the disconnected manifest.
 * @param {Manifest} manifest - The Sitecore JSS manifest instance.
 */
export default function LibraryComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'LibraryComponent',
    displayName: 'Library Component',
    icon: SitecoreIcon.Book,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
    ],
  });
}
