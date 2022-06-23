import { useState, useEffect } from 'react';

import { RegionCard } from "../components/RegionCard";

import HappyPersonPng from '../assets/happy-person.png';
import WhatsAppSvg from '../assets/whatsapp-icon.svg';

import styles from './Home.module.scss';
import { Title } from "../components/Title";

import { client } from '../services/prismic';
import { NoContent } from '../components/NoContent';
import { Header } from '../components/Header';

interface Region {
  id: string;
  slug: string;
  name: string;
  description: string;
  minPrice: number;
  image: string;
}

export function Home() {
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    async function fetchData() {
      const results = await client.getAllByType('regions');

      const resultsFormatted = results.map(item => {
        return {
          id: item.id,
          slug: item.uid + '',
          name: item.data.name,
          description: item.data.description,
          minPrice: item.data.min_price,
          image: item.data.image.url,
        }
      });

      setRegions(resultsFormatted);
    }

    fetchData();
  }, [])

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.welcome}>
          <div className={styles.welcomeContent}>
            <div>
              <span>Boas vindas a AfroTour</span>
              <h1>Sua viagem dos sonhos é aqui.</h1>
              <p>Estamos empenhados em fornecer os melhores planos de viagem do Brasil para você.</p>
              <a href="https://wa.me/+5533987654321" target="_blank"><img src={WhatsAppSvg} />Agende sua viagem</a>
            </div>

            <img src={HappyPersonPng} alt="Pessoa muito feliz" />

          </div>
        </div>

        <div className={styles.regions}>
          {regions.length ? (
            <>
              <Title>Para onde vamos?</Title>

              <ul>
                {regions.map(region => (
                  <RegionCard
                    slug={region.slug}
                    title={region.name}
                    description={region.description}
                    minPrice={region.minPrice}
                    img={region.image}
                  />
                ))}
              </ul>
            </>
          ) : (
            <NoContent message="Ops! Parece que não há nenhuma região disponível no momento" />
          )}
        </div>

      </main>
    </>
  )
}