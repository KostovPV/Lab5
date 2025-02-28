// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FooterSingleBlockData2Component component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function FooterSingleBlockData2Component(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FooterSingleBlockData2Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'phone', type: CommonFieldTypes.SingleLineText },
      { name: 'email', type: CommonFieldTypes.SingleLineText },
      { name: 'webpage', type: CommonFieldTypes.SingleLineText },
      { name: 'adress', type: CommonFieldTypes.RichText },
    ]
      ,
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
