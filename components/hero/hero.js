import Button from 'components/ui/button'
import IconCrosshair from 'icons/crosshair'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero__cover" src="/assets/images/hero.png" alt="" />
      <div className="hero__content space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">WELCOME TO EsportsAgent</h1>
        <p className="font-semibold text-xl">Your competitive journey starts here. Compete in tournaments and scrims to improve your skill daily!</p>
        <Link href="/scrim-finder">
          <a>
            <Button
              size="large"
              iconRight={<IconCrosshair size={18} />}
              className="px-11 w-full sm:w-auto"
              shined
            >
              Find Scrim Now
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Hero
