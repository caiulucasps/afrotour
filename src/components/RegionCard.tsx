import { useNavigate } from 'react-router-dom';

import styles from './RegionCard.module.scss';

interface RegionCardProps {
  slug: string;
  title: string;
  img: string;
  description: string;
  minPrice: number;
}

export function RegionCard({ slug, title, img, description, minPrice }: RegionCardProps) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/region/${slug}`);
  }

  return (
    <li className={styles.regionCard} onClick={handleNavigate}>
      <img src={img} />
      <div>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.pricing}>A partir de <span>R$ {minPrice}</span></p>
      </div>
    </li>
  )
}