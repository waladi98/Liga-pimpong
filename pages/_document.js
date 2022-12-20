import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body className="antialiased font-san  bg-dark">
          <Main />
          <NextScript />
          {/* <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script> */}
          {/* <script src="./assets/vendor/preline/dist/preline.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
