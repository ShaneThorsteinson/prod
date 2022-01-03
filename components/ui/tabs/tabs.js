// https://github.com/react-component/tabs
import clsx from 'clsx'
import RcTabs, { TabPane } from 'rc-tabs'

function Tabs ({ className, size = null, ...props }) {
  const classes = clsx({
    'ui-tabs--size-lg': size === 'large',
    'ui-tabs--size-sm': size === 'small'
  }, className)

  return (
    <RcTabs
      moreIcon="..."
      prefixCls="ui-tabs"
      className={classes}
      {...props}
    />
  )
}

Tabs.Item = TabPane

export default Tabs
