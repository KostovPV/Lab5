import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the NewsCardComponent component to the disconnected manifest.
 * @param {Manifest} manifest - The Sitecore JSS manifest instance.
 */
export default function NewsCardComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'NewsCardComponent',
    displayName: 'News Card',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'date', type: CommonFieldTypes.DateTime },
      { name: 'views', type: CommonFieldTypes.Number },
      { name: 'comments', type: CommonFieldTypes.Number },
      { name: 'readMoreLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}

