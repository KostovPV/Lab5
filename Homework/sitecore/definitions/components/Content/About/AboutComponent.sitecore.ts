import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the AboutComponent to the disconnected manifest.
 * This function is invoked when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function AboutComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'AboutComponent',
    displayName: 'About Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.RichText },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'ctaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'altText', type: CommonFieldTypes.SingleLineText },
    ],
    params: [{ name: 'imageLeftAlignment', type: CommonFieldTypes.Checkbox }],
    // params: [{ name: 'imageLeftAlignment', type: CommonFieldTypes.SingleLineText }]

  });
}
