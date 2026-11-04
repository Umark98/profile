import Head from "next/head";

export const portfolioUrl = "https://umar-khitabportfolio.netlify.app/";
const title = "Umar Orakzai | Full-Stack & Blockchain Developer";
const description = "Umar Orakzai is a full-stack and blockchain developer in Islamabad, building AI SaaS at FirstEpic and Web3 products with Next.js, TypeScript and Sui.";

const profile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${portfolioUrl}#profile`,
  url: portfolioUrl,
  name: title,
  description,
  inLanguage: "en",
  mainEntity: {
    "@type": "Person",
    "@id": `${portfolioUrl}#person`,
    name: "Umar Orakzai",
    url: portfolioUrl,
    image: `${portfolioUrl}umar-portrait.jpg`,
    jobTitle: "Full-Stack SaaS Developer",
    description: "Full-stack and blockchain developer working on AI SaaS and Web3 products.",
    worksFor: { "@type": "Organization", name: "FirstEpic" },
    address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
    sameAs: ["https://github.com/Umark98", "https://www.linkedin.com/in/umarkhan14101/"],
    knowsAbout: ["Full-stack development", "AI applications", "Next.js", "TypeScript", "Sui", "Solidity", "Web3"],
  },
};

export default function PortfolioSeo() {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Umar Orakzai" />
      <meta name="robots" content="index, follow, max-image-preview:large" key="robots" />
      <link rel="canonical" href={portfolioUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Umar Orakzai" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={portfolioUrl} />
      <meta property="og:image" content={`${portfolioUrl}og-image.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Umar Orakzai — Full-Stack and Blockchain Developer building AI SaaS and Web3 products" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${portfolioUrl}og-image.png`} />
      <meta name="twitter:image:alt" content="Umar Orakzai — Full-Stack and Blockchain Developer" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }} />
    </Head>
  );
}
