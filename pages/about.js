import Layout from 'components/layout'
import PageHeader from 'components/page/page-header'
import Container from 'components/ui/container'
import Hexagon from 'components/ui/hexagon'
import Member from 'components/ui/member'
import SectionFeaturedTeams from 'containers/section-featured-teams'
import IconCrosshair from 'icons/crosshair'
import IconPhone from 'icons/phone'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const DynamicMap = dynamic(
  () => import('components/map'),
  { ssr: false }
)

export default function AboutPage () {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <Layout>
        <Container className="mt-20 pt-10">
          <PageHeader
            title="Lorem ipsum dolor sit amet"
            descripiton="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl tellus, elementum quis sodales at, sagittis ut nulla. Praesent sed turpis eu diam vulputate iaculis nec ac nunc."
          />

          <div className="text-center mt-10 md:mt-14">
            <img className="inline-block" src="/assets/images/about-us.jpg" alt="" />
          </div>

          <div className="flex flex-col mt-10 lg:flex-row md:mt-14">
            <div className="w-[390px]">
              <p className="pl-9 lg:pr-9 py-4 text-white text-[24px] lg:text-[27px] leading-[34px] font-semibold border-l-[3px] border-primary-500">Here we can add some catchy subheading or quote or somekind friendly message</p>
            </div>
            <div className="mt-8 lg:mt-0 flex-1 font-roboto text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec accumsan metus. Morbi vitae nulla arcu. Suspendisse rutrum dui ultricies magna imperdiet, nec convallis eros tincidunt. Quisque turpis ipsum, dapibus non consequat ac, bibendum id tortor. Fusce at nisi tortor. Vestibulum sapien leo, auctor quis pulvinar tempus, condimentum nec nisl. Aliquam vitae justo vitae ipsum sagittis lacinia in at diam.
              <br />
              <br />
              Nunc nec nibh quis nisi hendrerit pretium in sed libero. In sed vestibulum quam, vitae ultricies mauris. In malesuada vitae turpis ac cursus. Sed egestas diam lectus, a iaculis orci rutrum molestie. Integer faucibus nunc in neque venenatis condimentum. Sed convallis enim a diam tempus, tristique porta dui aliquam. Curabitur euismod erat tellus, vitae venenatis nisi dictum bibendum. Cras ac auctor massa. Donec auctor quam erat.
            </div>
          </div>
        </Container>

        <div className="mt-10 md:mt-14 py-20 bg-dark-500 page-about__our-team">
          <Container>
            <div className="flex justify-center items-center flex-col">
              <Hexagon
                className="text-primary-500"
                size={60}
                icon={<IconCrosshair size={18} />}
              />
              <h2 className="text-white text-2xl font-semibold mt-2 md:text-3xl">Meet Our Team</h2>
              <p className="text-center mt-2 text-gray-500 max-w-[744px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisi in ligula ultrices porttitor. Vivamus eu mauris lacus. Maecenas porta dolor.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-14">
              <Member image="/demo/member-1.png" />
              <Member image="/demo/member-2.png" />
              <Member image="/demo/member-3.png" />
              <Member image="/demo/member-4.png" />
            </div>
          </Container>
        </div>

        <Container>
          <div className="flex flex-col lg:flex-row items-center py-20">
            <div className="flex-1 lg:pr-20 mb-20 lg:mb-0">
              <div className="text-[34px] font-semibold text-white">Contact us</div>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec accumsan metus. Morbi vitae nulla arcu. Suspendisse rutrum dui ultricies magna imperdiet, nec convallis tincidunt.</p>

              <div className="mt-7 space-y-2">
                <div className="flex items-center">
                  <Hexagon
                    className="text-primary-500 mr-1"
                    size={40}
                    icon={<IconPhone size={14} />}
                  />
                  <span className="text-lg text-white font-semibold">+1 234 567 890</span>
                </div>
                <div className="flex items-center">
                  <Hexagon
                    className="text-primary-500 mr-1"
                    size={40}
                    icon={<IconPhone size={14} />}
                  />
                  <span className="text-lg text-white font-semibold">office@esportsagent.com</span>
                </div>
                <div className="flex items-center">
                  <Hexagon
                    className="text-primary-500 mr-1"
                    size={40}
                    icon={<IconPhone size={14} />}
                  />
                  <span className="text-lg text-white font-semibold">Madison Ave 68, New York</span>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full lg:w-auto">
              {/* <img className="inline-block" src="/assets/images/about-us-map.jpg" alt="" /> */}
              <DynamicMap />
            </div>
          </div>
          <SectionFeaturedTeams className="mt-6" />
        </Container>
      </Layout>
    </>
  )
}
