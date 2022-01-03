import clsx from 'clsx'
import Button from 'components/ui/button'
import Link from 'next/link'

export default function PremiumFeature ({ className, ...props }) {
  const classes = clsx('flex flex-col items-center gap-4', className)
  return (
    <div className={classes} {...props}>
      <img height="65" width="70" src="/assets/images/diamond-premium.svg" alt="" />
      <div className="text-2xl text-white font-semibold text-center max-w-[450px]">This feature is allowed for Premium members only.</div>
      <div className="text-gray-500 font-roboto text-center">Please, upgrade your membership.</div>
      <Link href="/membership">
        <Button size="small" outlined>upgrade membership</Button>
      </Link>
    </div>
  )
}
