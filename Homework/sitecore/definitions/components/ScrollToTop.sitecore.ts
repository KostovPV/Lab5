// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the ScrollToTop component to the disconnected manifest.
 * This function is invoked when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function ScrollToTop(manifest: Manifest): void {
  manifest.addComponent({
    name: 'ScrollToTop',
    icon: SitecoreIcon.ArrowUp,
    // No fields needed since this is a functional component
  });
}
