import Layout from '../components/layout/layout'
import Button from '../components/ui/button/button'
import IconDownload from 'icons/crosshair'
import Container from 'components/ui/container'

export default function DesignSystem () {
  return (
    <Layout>
      <Container className="mt-20">
        <div className="mt-10 text-2xl text-white">Primary</div>
        <div className="my-10 space-y-3 flex flex-col">
          <div className="space-x-3">
            <Button>Default</Button>
            <Button icon={<IconDownload />}>Default</Button>
            <Button outlined>Outlined</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button icon={<IconDownload />} size="large">Large button</Button>
            <Button iconRight={<IconDownload />} size="large" outlined>Outlined</Button>
            <Button icon={<IconDownload />} size="large" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button size="small">Small button</Button>
            <Button icon={<IconDownload />} size="small">Small button</Button>
            <Button size="small" outlined>Outlined</Button>
            <Button size="small" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button size="x-small">X-Small button</Button>
            <Button icon={<IconDownload />} size="x-small">X-Small button</Button>
            <Button size="x-small" outlined>Outlined</Button>
            <Button size="x-small" disabled>Disabled</Button>
          </div>
        </div>

        <div className="text-2xl text-white">Primary Shine</div>
        <div className="my-10 space-y-3 flex flex-col">
          <div className="space-x-3">
            <Button shined>Default</Button>
            <Button shined icon={<IconDownload />}>Default</Button>
            <Button shined outlined>Outlined</Button>
            <Button shined disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined icon={<IconDownload />} size="large">Large button</Button>
            <Button shined iconRight={<IconDownload />} size="large" outlined>Outlined</Button>
            <Button shined icon={<IconDownload />} size="large" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined size="small">Small button</Button>
            <Button shined icon={<IconDownload />} size="small">Small button</Button>
            <Button shined size="small" outlined>Outlined</Button>
            <Button shined size="small" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined size="x-small">X-Small button</Button>
            <Button shined icon={<IconDownload />} size="x-small">X-Small button</Button>
            <Button shined size="x-small" outlined>Outlined</Button>
            <Button shined size="x-small" disabled>Disabled</Button>
          </div>
        </div>

        <div className="text-2xl text-white">Secondary</div>
        <div className="my-10 space-y-3 flex flex-col">
          <div className="space-x-3">
            <Button type="secondary">Default</Button>
            <Button type="secondary" outlined>Outlined</Button>
            <Button type="secondary" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button type="secondary" size="large">Large button</Button>
            <Button type="secondary" size="large" outlined>Outlined</Button>
            <Button type="secondary" size="large" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button type="secondary" size="small">Small button</Button>
            <Button type="secondary" size="small" outlined>Outlined</Button>
            <Button type="secondary" size="small" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button type="secondary" size="x-small">X-Small button</Button>
            <Button type="secondary" size="x-small" outlined>Outlined</Button>
            <Button type="secondary" size="x-small" disabled>Disabled</Button>
          </div>
        </div>

        <div className="text-2xl text-white">Secondary Shine</div>
        <div className="my-10 space-y-3 flex flex-col">
          <div className="space-x-3">
            <Button shined type="secondary">Default</Button>
            <Button shined type="secondary" outlined>Outlined</Button>
            <Button shined type="secondary" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined type="secondary" size="large">Large button</Button>
            <Button shined type="secondary" size="large" outlined>Outlined</Button>
            <Button shined type="secondary" size="large" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined type="secondary" size="small">Small button</Button>
            <Button shined type="secondary" size="small" outlined>Outlined</Button>
            <Button shined type="secondary" size="small" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined type="secondary" size="x-small">X-Small button</Button>
            <Button shined type="secondary" size="x-small" outlined>Outlined</Button>
            <Button shined type="secondary" size="x-small" disabled>Disabled</Button>
          </div>
        </div>

        <div className="text-2xl text-white">Accent</div>
        <div className="my-10 space-y-3 flex flex-col">
          <div className="space-x-3">
            <Button type="accent">Default</Button>
            <Button type="accent" outlined>Outlined</Button>
            <Button type="accent" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button type="accent" size="large">Large button</Button>
            <Button type="accent" size="large" outlined>Outlined</Button>
            <Button type="accent" size="large" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button type="accent" size="small">Small button</Button>
            <Button type="accent" size="small" outlined>Outlined</Button>
            <Button type="accent" size="small" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button type="accent" size="x-small">X-Small button</Button>
            <Button type="accent" size="x-small" outlined>Outlined</Button>
            <Button type="accent" size="x-small" disabled>Disabled</Button>
          </div>
        </div>

        <div className="text-2xl text-white">Accent Shine</div>
        <div className="my-10 space-y-3 flex flex-col">
          <div className="space-x-3">
            <Button shined type="accent">Default</Button>
            <Button shined type="accent" outlined>Outlined</Button>
            <Button shined type="accent" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined type="accent" size="large">Large button</Button>
            <Button shined type="accent" size="large" outlined>Outlined</Button>
            <Button shined type="accent" size="large" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined type="accent" size="small">Small button</Button>
            <Button shined type="accent" size="small" outlined>Outlined</Button>
            <Button shined type="accent" size="small" disabled>Disabled</Button>
          </div>
          <div className="space-x-3">
            <Button shined type="accent" size="x-small">X-Small button</Button>
            <Button shined type="accent" size="x-small" outlined>Outlined</Button>
            <Button shined type="accent" size="x-small" disabled>Disabled</Button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
