import Image from "next/image";
import { carBrands } from "./utils/constants";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className="content">
        <h1>Каталог</h1>
        <ul>
          {
            carBrands.map((brand =>
            (
              <li key={brand.name}>
                <a
                  href={`/cars/${brand.name}`}
                >
                  {brand.name}
                </a>
              </li>
            )
            ))}
        </ul>
      </main>
    </div>
  );
}
