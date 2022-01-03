import { useInterval } from 'beautiful-react-hooks'
import { useEffect, useState } from 'react'

export default function Countdown ({ date = '2021-12-31 00:00:00', onSuccess = f => f, ...props }) {
  const countDownDate = new Date(date).getTime()
  const [now, setNow] = useState(new Date().getTime())
  const distance = countDownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  const [isCleared, clearInterval] = useInterval(() => {
    setNow(Date.now())
  }, 1000)

  useEffect(() => {
    if (distance <= 0) {
      clearInterval()
      onSuccess()
    }
  }, [distance])

  return (
    <div {...props}>
      <div className="text-white max-w-[630px] mx-auto countdown">
        <div className="text-center">
          <div className="font-bold text-8xl">{isCleared ? 0 : days}</div>
          <div className="font-semibold text-lg"><span className="text-primary-500">D</span>ays</div>
        </div>
        <div className="countdown-divider" />
        <div className="text-center">
          <div className="font-bold text-8xl">{isCleared ? 0 : hours}</div>
          <div className="font-semibold text-lg"><span className="text-primary-500">H</span>ours</div>
        </div>
        <div className="countdown-divider" />
        <div className="text-center">
          <div className="font-bold text-8xl">{isCleared ? 0 : minutes}</div>
          <div className="font-semibold text-lg"><span className="text-primary-500">M</span>inutes</div>
        </div>
        <div className="countdown-divider" />
        <div className="text-center">
          <div className="font-bold text-8xl">{isCleared ? 0 : seconds}</div>
          <div className="font-semibold text-lg"><span className="text-primary-500">S</span>econds</div>
        </div>
      </div>

      <div className="text-white text-center mt-10">
        This page will <span className="text-primary-500">automatically update</span> itself to show the bracket when the tournament started.
      </div>
    </div>
  )
}
