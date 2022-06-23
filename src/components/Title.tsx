import styles from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <h2 className={styles.title}>{children}</h2>
}