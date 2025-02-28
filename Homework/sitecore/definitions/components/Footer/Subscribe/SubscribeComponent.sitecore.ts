// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the SubscribeComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function SubscribeComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'SubscribeComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'subtitle', type: CommonFieldTypes.SingleLineText },
      { name: 'placeholderText', type: CommonFieldTypes.SingleLineText },
      { name: 'buttonText', type: CommonFieldTypes.SingleLineText },
      { name: 'formAction', type: CommonFieldTypes.RichText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
