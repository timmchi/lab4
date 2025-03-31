import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";

const Explore = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding explore-content">
        <h2>Discover new music and artists</h2>
        <IonButton routerLink="/">Go to Main</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Explore;
