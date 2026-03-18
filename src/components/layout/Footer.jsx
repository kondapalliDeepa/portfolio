import { Separator } from '../ui/separator'

function Footer() {
  return (
    <footer className="border-t border-border/70 py-6">
      <div className="container-width">
        <Separator className="mb-6" />
        <p className="text-center text-sm text-muted-foreground">© 2026 Deepa Kondapalli. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
