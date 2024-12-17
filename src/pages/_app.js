import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import Script from 'next/script'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
      {/*  Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E448GXQHG8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-E448GXQHG8');
      `}
      </Script>
      <Component {...pageProps} />
    </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
