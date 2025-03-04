import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the HeroComponent to the disconnected manifest.
 * This function is invoked when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function HeroComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'HeroComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'ctaLink', type: CommonFieldTypes.GeneralLink },
      { name: 'backgroundImages', type: CommonFieldTypes.ContentList, source: 'dataSource', displayName: 'Background Images' },
    ],
    params: [
      { name: 'hideHeading', type: CommonFieldTypes.Checkbox },
      { name: 'buttonStyleClass', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
