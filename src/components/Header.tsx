import styles from './Header.module.scss';

interface HeaderProps {
  type?: 'primary' | 'secondary';
}

export function Header({ type = 'primary' }: HeaderProps) {
  const headerStyle = type === 'primary' ? styles.header : `${styles.header} ${styles.secondary}`
  return (
    <header className={headerStyle}>
      <div>
        Afro<span>Tour</span>
      </div>
    </header>
  )
}