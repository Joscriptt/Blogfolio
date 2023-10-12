import Theming from "@/Theme/Theming";
import "./globals.css";

import Headpage from "./Header/page";
import Footer from "./Footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Headpage />
          <main>{children}</main>
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
