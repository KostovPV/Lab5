import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the CourseCardComponent component to the disconnected manifest.
 * @param {Manifest} manifest - The Sitecore JSS manifest instance.
 */
export default function CourseCardComponent(manifest: Manifest): void {
  manifest.addComponent({
    name: 'CourseCardComponent',
    displayName: 'Course Card',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'image', type: CommonFieldTypes.Image },
      { name: 'authorName', type: CommonFieldTypes.SingleLineText },
      { name: 'authorImage', type: CommonFieldTypes.Image },
      { name: 'studentCount', type: CommonFieldTypes.Number },
      { name: 'likes', type: CommonFieldTypes.Number },
      { name: 'rating', type: CommonFieldTypes.Number },
    ],
  });
}
