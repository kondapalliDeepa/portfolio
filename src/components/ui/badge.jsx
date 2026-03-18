import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-neutral-700 bg-neutral-900 text-neutral-200',
        secondary: 'border-neutral-800 bg-neutral-800 text-neutral-300'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
