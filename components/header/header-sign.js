import Button from 'components/ui/button'
import Link from 'next/link'

const HeaderSign = () => {
  return (
    <div>
      <Button.Group className="whitespace-nowrap">
        <Link href="/signup">
          <a>
            <Button size="small" className="md:text-base md:px-5 md:h-11" outlined>Sign Up</Button>
          </a>
        </Link>
        <Link href="/signin">
          <a>
            <Button size="small" className="md:text-base md:px-5 md:h-11">Sign In</Button>
          </a>
        </Link>
      </Button.Group>
    </div>
  )
}

export default HeaderSign
