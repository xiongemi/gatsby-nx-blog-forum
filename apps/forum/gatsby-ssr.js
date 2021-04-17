/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import 'firebase/firestore';

import WrapWithProvider from './src/components/wrap-with-provider';
export const wrapRootElement = WrapWithProvider;
