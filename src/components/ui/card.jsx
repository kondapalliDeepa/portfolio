import { cn } from '../../lib/utils'

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-neutral-800 bg-neutral-900/60 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/80',
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
}

function CardTitle({ className, ...props }) {
  return <h3 className={cn('font-semibold leading-none tracking-tight text-white', className)} {...props} />
}

function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm text-neutral-400', className)} {...props} />
}

function CardContent({ className, ...props }) {
  return <div className={cn('p-6 pt-0', className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
