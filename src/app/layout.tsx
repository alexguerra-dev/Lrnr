import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Lrnr - Learn Typescript',
    description: 'Learn Typescript with Lrnr',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
