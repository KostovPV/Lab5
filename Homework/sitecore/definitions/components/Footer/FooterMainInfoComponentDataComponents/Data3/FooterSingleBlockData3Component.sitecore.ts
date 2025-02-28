// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FooterSingleBlockData3Component component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function FooterSingleBlockData3Component(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FooterSingleBlockData3Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'staff', type: CommonFieldTypes.GeneralLink },
      { name: 'courses', type: CommonFieldTypes.GeneralLink },
      { name: 'categories', type: CommonFieldTypes.GeneralLink },
      { name: 'terms', type: CommonFieldTypes.GeneralLink },
      { name: 'privacy', type: CommonFieldTypes.GeneralLink },
    ]
  
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
