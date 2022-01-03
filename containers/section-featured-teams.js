import { useState } from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Section from 'components/section'
import Button from 'components/ui/button'

import IconCrosshair from 'icons/crosshair'
import IconArrowLeft from 'icons/arrow-left'
import IconArrowRight from 'icons/arrow-right'

import 'swiper/swiper.min.css'
import TeamCardMini from 'components/team/team-card-mini'

SwiperCore.use([Autoplay])

const SectionFeaturedTeams = (props) => {
  const [swiper, setSwiper] = useState(null)

  const handleSlidePrev = () => {
    swiper?.slidePrev()
  }

  const handleSlideNext = () => {
    swiper?.slideNext()
  }

  return (
    <Section {...props}>
      <Section.Header
        title="Featured"
        titleSecondary="Teams"
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
              slidesPerView: 4,
              slidesPerColumn: 1
            }
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          <SwiperSlide>
            <TeamCardMini
              logo="/demo/agents-logo-5.png"
              name="Los Angeles Guerillas"
              division="gold"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCardMini
              logo="/demo/agents-logo-8.png"
              name="Rogue Gaming White"
              division="iron"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCardMini
              logo="/demo/agents-logo-3.png"
              name="Codeine Cowboys"
              division="master"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCardMini
              logo="/demo/agents-logo-4.png"
              name="Anax Esports"
              division="bronze"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCardMini
              logo="/demo/agents-logo-4.png"
              name="NAME 1"
              division="bronze"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCardMini
              logo="/demo/agents-logo-4.png"
              name="NAME 2"
              division="bronze"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamCardMini
              logo="/demo/agents-logo-4.png"
              name="NAME 3"
              division="bronze"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TeamCardMini
              logo="/demo/agents-logo-4.png"
              name="NAME 4"
              division="bronze"
            />
          </SwiperSlide>
        </Swiper>
      </Section.Body>
    </Section>
  )
}

// export default SectionFeaturedTeams

export default function SectionFeaturedTeamsNull () {
  return null
}
