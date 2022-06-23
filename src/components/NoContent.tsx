import styles from './NoContent.module.scss';

interface NoContentProps {
  message: string;
}

export function NoContent({ message }: NoContentProps) {
  return (
    <div className={styles.noContent}>
      <span>😔</span>
      <p>{message}</p>
    </div>)
}