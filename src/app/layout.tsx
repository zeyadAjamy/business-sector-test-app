import "./globals.css";
import { Providers } from "@/store/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Sector| Test App",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue vel purus dignissim maximus et sed felis. Fusce porttitor leo nec ipsum venenatis rhoncus. Phasellus rhoncus luctus nibh, et aliquet ipsum elementum in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="lg:w-[70%] md:w-[80%] sm:w-full md:m-auto sm:m-0 font-[Roboto]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
