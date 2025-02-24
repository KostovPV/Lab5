import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the CoursesComponent component to the disconnected manifest.
 * @param {Manifest} manifest - The Sitecore JSS manifest instance.
 */
export default function CoursesComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'CoursesComponent',
    displayName: 'Courses Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'ctaLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
