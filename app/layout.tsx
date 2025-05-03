// app/layout.tsx
// app/layout.tsx
import Navbar from '../components/Navbar';  // Corrected import path
 // Ensure this path is correct
import './globals.css'; // Import global styles, including Tailwind CSS
import {Providers} from "./providers"

export const metadata = {
  title: 'SafeReport - Anonymous Crime Reporting App',
  description: 'Securely and anonymously report crimes to law enforcement',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add metadata and other head elements if necessary */}
      </head>
      <body className="min-h-screen bg-gray-900 text-white">
        <Navbar /> {/* Ensure this renders the Navbar component */}
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20">
          {/* Background gradients */}
          <div className="fixed inset-0 -z-10 min-h-screen">
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_70%)]" />
          </div>
          {/* Main content goes here */}
          <main className="pt-16">
            <Providers>

          
            {children}  </Providers>
            </main>
        </div>
      </body>
    </html>
  );
}
