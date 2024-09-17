import styles from "../page.module.css";
import ItemList from "../components/ItemList";
import TextBlock from "../components/Textblock";
import ImageWithText from "../components/ImageWithText";
import Link from "next/link";

export default function About() {
    return (
      <div className={styles.page}>
        <header><h1><Link href="/">Główna</Link></h1></header>
        <main className={styles.main}>
          <ImageWithText imageUrl={'http://www.zs1mm.home.pl/strona/wp-content/uploads/2022/03/cropped-korona.png'} text={'Zespół szkól nr. 1'}/>
          <TextBlock heading={"Heading"} content={"Lorem"}/>
          <ItemList items={['first','second','third']}/>
        </main>
      </div>
    );
  }