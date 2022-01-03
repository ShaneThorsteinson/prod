import clsx from 'clsx'
import styles from './spinner.module.css'

export default function Spinner ({ className }) {
  const classes = clsx(styles.wrap, className)

  return (
    <div className={classes}>
      <div className={styles.spinner} />
    </div>
  )
}
