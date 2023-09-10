import NextHead from 'next/head';
// import { WEBSITE_URL } from '~/constants';
import { useRouter } from 'next/router';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function Head({
  title = 'স্মার্ট এনায়েতপুর',
  description = 'স্মার্ট এনায়েতপুর',
  image = 'https://i.ibb.co/BtW1NFv/Screenshot-from-2023-06-32-03-14-49.png',
}: HeadProps) {
  const { asPath } = useRouter();

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="manifest" href="/manifest.json" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={asPath} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={asPath} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="স্মার্ট এনায়েতপুর" />
      <meta name="apple-mobile-web-app-title" content="স্মার্ট এনায়েতপুর" />
      <meta name="theme-color" content="#fce36c" />
      <meta name="msapplication-navbutton-color" content="#fce36c" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="msapplication-starturl" content="/" />
    </NextHead>
  );
}
