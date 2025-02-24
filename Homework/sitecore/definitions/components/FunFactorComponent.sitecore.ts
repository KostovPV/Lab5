import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FunFactorComponent to the Sitecore manifest
 */
export default function FunFactorComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FunFactorComponent',
    icon: SitecoreIcon.Text,
    fields: [
      { name: 'funCounter', type: CommonFieldTypes.Number },
      { name: 'funText', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
