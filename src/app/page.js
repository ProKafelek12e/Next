import Image from "next/image";
import styles from "./page.module.css";
import ItemList from "./components/ItemList";
import TextBlock from "./components/Textblock";
import ImageWithText from "./components/ImageWithText";
import SimpleForm from "./components/SimpleForm";
import ConditionalDisplay from "./components/ConditionalDisplay";
import ListWithObjects from "./components/ListWithObjects";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header><h1><Link href="/about">O NAS</Link></h1></header>
      <main className={styles.main}>
        <ImageWithText imageUrl={'http://www.zs1mm.home.pl/strona/wp-content/uploads/2022/03/cropped-korona.png'} text={'Zespół szkól nr. 1'}/>
        <TextBlock heading={"Karol Kędziora"} content={"Technik Programista"}/>
        <ItemList items={['test','test2']}/>
        <SimpleForm/>
        <ConditionalDisplay isVisible={true}/>
        <ListWithObjects items={[{name:'nazwa',value:'wartośc'},{name:'nazwa2',value:'wartośc2'}]}/>
      </main>
    </div>
  );
}
