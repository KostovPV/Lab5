import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the EventsCardComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function EventsCardComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'EventsCardComponent',
    displayName: 'Events Card',
    icon: SitecoreIcon.Calendar,
    fields: [
      { name: 'title', type: CommonFieldTypes.GeneralLink },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'date', type: CommonFieldTypes.DateTime },
      { name: 'location', type: CommonFieldTypes.SingleLineText },
      { name: 'time', type: CommonFieldTypes.SingleLineText },
      { name: 'learnMoreLink', type: CommonFieldTypes.GeneralLink },
    ],
  });
}