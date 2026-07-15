export function generateArticleSchema(params: {
  headline: string;
  description: string;
  image: string[];
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherLogoUrl: string;
  ratingValue?: number;
  ratingCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    image: params.image,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: [
      {
        "@type": "Person",
        name: params.authorName,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: params.publisherName,
      logo: {
        "@type": "ImageObject",
        url: params.publisherLogoUrl,
      },
    },
    // Conditionally inject aggregate rating for Google Rich Snippets
    ...(params.ratingValue && params.ratingCount
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: params.ratingValue.toString(),
            ratingCount: params.ratingCount.toString(),
          },
        }
      : {}),
  };
}
