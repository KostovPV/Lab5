import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ColumnSectionOneThirdComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ColumnSectionOneThirdComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'ColumnSectionOneThirdComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [],
    placeholders: ['column1', 'column2', 'column3'],
  });
}
