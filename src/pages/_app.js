import "@/styles/globals.css";
import React from 'react';
// Import the ErrorBoundary component
import ErrorBoundary from './components/ErrorBoundary'
 
function MyApp({ Component, pageProps }) {
  return (
    // Wrap the Component prop with ErrorBoundary component
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
 
export default  MyApp