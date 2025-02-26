import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the EventsComponent component to the disconnected manifest.
 * @param {Manifest} manifest - The Sitecore JSS manifest instance.
 */
export default function EventsComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'EventsComponent',
    displayName: 'Events Component',
    icon: SitecoreIcon.Calendar,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
    ],
    placeholders: ['events-list'],
  });
}
