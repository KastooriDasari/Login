import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Music</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Built with Ionic React</h2>
        <p>
          <b>Disclaimer: this app does not actually play audio (due to licensing and lack of public APIs reasons)</b>
        </p>
        <p>
          This is a demo built with <a target="_blank" href="http://ionicframework.com/docs/react" rel="noreferrer">Ionic React</a>, JavaScript (rather than TS).
        </p>
        <p>
          This app follows many Ionic React best practices and is a great starting point or reference for building a complex app with tabs and authentication pages.
        </p>
        <p>
          This app will run on iOS, Android, or the Web (as a Progressive Web App) using the power of <a target="_blank"  href="http://capacitor.ionicframework.com/" rel="noreferrer">Capacitor</a> to access Native and Web APIs.
        </p>
        <p>
          <i>
          Note: if you notice any CSS weirdness refresh the stackblitz
        editor as hot reload can sometimes get out of sync
        </i>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;