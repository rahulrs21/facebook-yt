import "../styles/globals.css";

//  3:42:00
import { SessionProvider } from "next-auth/react";
// IN 3:42:45, u get the error that 'next-auth/client is not export from module',
// changed 'import { Provider } from 'next-auth/client'' to 'import { SessionProvider } from 'next-auth/react''
// https://www.anycodings.com/questions/module-not-found-error-package-path-client-is-not-exported-from-package  (Answer 2)


export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
