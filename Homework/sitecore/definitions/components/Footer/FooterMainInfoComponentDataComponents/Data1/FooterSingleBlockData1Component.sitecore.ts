// eslint-disable-next-line no-unused-vars
import { Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FooterSingleBlockData1Component component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function FooterSingleBlockData1Component(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FooterSingleBlockData1Component',
    displayName: 'Footer Single Block Data 1 Component',
    fields: [
      { name: 'description', type: 'Rich Text' },
      { name: 'socialIcon1', type: 'Single-Line Text' },
      { name: 'socialIcon2', type: 'Single-Line Text' },
      { name: 'socialIcon3', type: 'Single-Line Text' },
      { name: 'socialIcon4', type: 'Single-Line Text' },
      { name: 'socialIcon5', type: 'Single-Line Text' }
    ]
  });
}