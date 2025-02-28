// eslint-disable-next-line no-unused-vars
import { Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FooterMainInfoComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function FooterMainInfoComponentSitecore(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FooterMainInfoComponent',
    displayName: 'Footer Main Info Component',
    fields: [],
    placeholders: ['footer-single-block-1', 'footer-single-block-2', 'footer-single-block-3', 'footer-single-block-4']
  });
}
