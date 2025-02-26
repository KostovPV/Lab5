
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the NewsComponent component to the disconnected manifest.
 * @param {Manifest} manifest - The Sitecore JSS manifest instance.
 */
export default function NewsComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'NewsComponent',
    displayName: 'News Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
    ],
    placeholders: ['news-list'],
  });
}
