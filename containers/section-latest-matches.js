import { useState } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Section from 'components/section'
import Button from 'components/ui/button'

import IconCrosshair from 'icons/crosshair'
import IconArrowLeft from 'icons/arrow-left'
import IconArrowRight from 'icons/arrow-right'

import 'swiper/swiper.min.css'
import TeamCardMatchMini from 'components/team/team-card-match-mini'
import ApiService from 'helpers/api-service'
import { useQuery } from 'react-query'

SwiperCore.use([Autoplay])

export default function SectionLatestMatches (props) {
  const [swiper, setSwiper] = useState(null)
  const { data: items = [] } = useQuery('completed-matches', ApiService.getCompletedMatches)

  const handleSlidePrev = () => {
    swiper?.slidePrev()
  }

  const handleSlideNext = () => {
    swiper?.slideNext()
  }

  if (items.length === 0) {
    return null
  }

  return (
    <Section {...props}>
      <Section.Header
        title="latest"
        titleSecondary="scrim matches"
        icon={<IconCrosshair size={14} />}
        iconClasses="text-primary-500"
        actions={
          <Button.Group>
            <Button.Icon onClick={handleSlidePrev} icon={<IconArrowLeft size={20} />} />
            <Button.Icon onClick={handleSlideNext} icon={<IconArrowRight size={20} />} />
          </Button.Group>
        }
      />

      <Section.Body>
        <Swiper
          spaceBetween={16}
          slidesPerColumnFill="row"
          slidesPerView={1}
          slidesPerColumn={2}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            700: {
              slidesPerView: 2,
              slidesPerColumn: 2
            },
            1024: {
              slidesPerView: 3,
              slidesPerColumn: 1
            }
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {items.map(item => (
            <SwiperSlide
              key={item.id}
            >
              <TeamCardMatchMini
                score={item.score}
                teamA={item.teamA}
                teamB={item.teamB}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section.Body>
    </Section>
  )
}
