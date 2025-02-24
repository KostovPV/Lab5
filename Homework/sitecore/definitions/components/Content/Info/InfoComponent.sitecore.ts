import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the InfoComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function InfoComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'InfoComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'infoBox1Count', type: CommonFieldTypes.Number },
      { name: 'infoBox1Label', type: CommonFieldTypes.SingleLineText },
      { name: 'infoBox2Count', type: CommonFieldTypes.Number },
      { name: 'infoBox2Label', type: CommonFieldTypes.SingleLineText },
      { name: 'infoBox3Count', type: CommonFieldTypes.Number },
      { name: 'infoBox3Label', type: CommonFieldTypes.SingleLineText },
      { name: 'infoBox4Count', type: CommonFieldTypes.Number },
      { name: 'infoBox4Label', type: CommonFieldTypes.SingleLineText },
      { name: 'backgroundImage', type: CommonFieldTypes.Image },
    ],
  });
}
