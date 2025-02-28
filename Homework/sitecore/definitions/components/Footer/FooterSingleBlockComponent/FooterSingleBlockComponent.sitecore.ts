// eslint-disable-next-line no-unused-vars
import { SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the FooterSingleBlockComponent component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function FooterSingleBlockComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'FooterSingleBlockComponent',
    displayName: 'Footer Single Block Component',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: 'Single-Line Text' },
      { name: 'image', type: 'Image' } // ✅ Added Image Field
    ],
    placeholders: [
      { name: 'footerSingleBlockData', displayName: 'Footer Single Block Data' }
    ]
  })
}
