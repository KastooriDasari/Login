import { IonContent, IonHeader, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar ,} from '@ionic/react';
// import { ReactChild, ReactFragment, ReactPortal, Key } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


// type Item = {
//   src: string;
//   text: string;
// };
// const items: Item[] = [{ src: 'assets/image/pixbay.jpg', text: 'a picture of a cat' }];

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Music</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
       <IonList>
         <IonListHeader>
           <IonLabel>Hot Tracks</IonLabel>
           <IonList>
      {/* {items.map((image: { src: string | undefined; text: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }, i: Key | null | undefined) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))} */}
    </IonList>
         </IonListHeader>
       </IonList>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
