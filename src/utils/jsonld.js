export const transformConfig = (config) => ([
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: config.siteUrl + config.pathPrefix,
    name: config.siteTitle,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
  }
])

export const transformPost = (postURL, postMeta, description, blogURL, siteTitleAlt="") => {
  const { title } = postMeta;
  const image = postMeta.cover;
  return [
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name: title,
            image
          }
        }
      ]
    },
    {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url: blogURL,
      name: title,
      alternateName: siteTitleAlt,
      headline: title,
      image: {
        "@type": "ImageObject",
        url: image
      },
      description
    }
  ]
}

export default transformConfig;
