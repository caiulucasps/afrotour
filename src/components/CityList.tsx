import { CityCard } from './CityCard';
import styles from './CityList.module.scss';

interface City {
  image: string;
  cityName: string;
  habitantsNumber: number;
  area: number;
}

interface CityListProps {
  stateName: string;
  cities: City[]
}

export function CityList({ stateName, cities }: CityListProps) {
  return (

    <div className={styles.cityList}>
      <h3>{stateName}</h3>
      <ul>
        {cities.map(city => (
          <CityCard
            key={city.cityName}
            img={city.image}
            cityName={city.cityName}
            habitants={city.habitantsNumber}
            area={city.area}
          />
        )
        )}
      </ul>
    </div>
  )
}