import type { Metadata } from 'next'; import './globals.css';
export const metadata:Metadata={title:'Sahil Zambre | Software Engineer',description:'Portfolio of Sahil Zambre — software engineer focused on backend systems, microservices, and AI-powered products.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
