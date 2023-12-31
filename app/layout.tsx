import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActivSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import ThemeToggle from '@/components/theme-toggle'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boughazi Akram',
  description: 'Explore the creative world of Boughazi Akram. As a passionate and versatile developer, I showcase my diverse range of projects, from web development to app design. Discover how my skills and expertise can bring your digital dreams to life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        {/* <div className="bg-[#fcc5db] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#c9bffc] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
        <ThemeContextProvider>
          <ActivSectionContextProvider>
            <Header />
            {children}
            <Toaster position='top-center' />
          </ActivSectionContextProvider>
          <ThemeToggle />
        </ThemeContextProvider>
        {/* <div className="bg-[#c9bffc] absolute bottom-[6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#676394]"></div>
        <div className="bg-[#fcc5db] absolute bottom-[1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#946263]"></div> */}
      </body>
    </html>
  )
}
