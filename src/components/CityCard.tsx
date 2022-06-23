import styles from './CityCard.module.scss';

interface CityCardProps {
  img: string;
  cityName: string;
  habitants: number;
  area: number;
}

export function CityCard({ img, cityName, habitants, area }: CityCardProps) {
  return (
    <li className={styles.cityCard}>
      <img src={img} />
      <div>
        <h4>{cityName}</h4>
        <div className={styles.cityInfo}>
          <p>{habitants} habitantes</p>
          <p>{area} km²</p>
        </div>
      </div>
    </li>
  )
}