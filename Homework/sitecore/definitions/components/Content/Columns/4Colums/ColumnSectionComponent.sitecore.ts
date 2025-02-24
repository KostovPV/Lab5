// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ColumnSectionComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ColumnSectionComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'ColumnSectionComponent',
    icon: SitecoreIcon.DocumentTag,
    fields: [],
    placeholders: ['column1', 'column2', 'column3', 'column4'],
  });
}
