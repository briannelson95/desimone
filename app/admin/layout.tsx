export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
