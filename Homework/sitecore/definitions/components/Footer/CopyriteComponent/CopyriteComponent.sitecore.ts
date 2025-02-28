import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the CopyriteComponent to the disconnected manifest.
 * This function is invoked when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function CopyriteComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'CopyriteComponent',
    displayName: 'Copyrite Component',
    icon: SitecoreIcon.FlagGeneric,
    fields: [
      { name: 'copyrightText', type: CommonFieldTypes.SingleLineText },
      { name: 'createdByText', type: CommonFieldTypes.SingleLineText },
      { name: 'createdByLink', type: CommonFieldTypes.GeneralLink },
      { name: 'privacyTermsText', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
