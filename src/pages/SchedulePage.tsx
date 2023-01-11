import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonLoading,
  IonMenuButton,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonToast,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonItem,
  IonCardContent,
  IonTitle
} from '@ionic/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import SessionList from '../components/SessionList';
import SessionListFilter from '../components/SessionListFilter';
import { actions, RootState, selectors } from '../store';
import './SchedulePage.css';
import { camera, share, logoVimeo, logoGoogleplus, logoTwitter, logoFacebook, options } from 'ionicons/icons';
import './Login.css';

type Props = RouteComponentProps<{}> & typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

type State = {
  segment: string;
  isRefreshing: boolean;
  showLoading: boolean;
  showFilterModal: boolean;
  loadingMessage: string;
};

class SchedulePage extends Component<Props, State> {
  ionRefresherRef: React.RefObject<HTMLIonRefresherElement>;
  ionFabRef: React.RefObject<HTMLIonFabElement>;
  state = {
    segment: 'all',
    isRefreshing: false,
    showLoading: false,
    showFilterModal: false,
    loadingMessage: ''
  };

  constructor(props: Props) {
    super(props);
    this.ionRefresherRef = React.createRef<HTMLIonRefresherElement>();
    this.ionFabRef = React.createRef<HTMLIonFabElement>();
  }

  presentFilter = () => {
    this.setState(() => ({
      showFilterModal: true
    }));
  };

  updateSearchTerm = (e: CustomEvent) => {
    this.props.setSearchText(e.detail.value);
  };

  openSocial = (network: string) => {
    this.setState(() => ({
      loadingMessage: `Posting to ${network}`,
      showLoading: true
    }));

    setTimeout(() => {
      this.setState(() => ({ showLoading: false }));
    }, Math.random() * 1000 + 500);

    if (this.ionFabRef.current) {
      this.ionFabRef.current.close();
    }
  };

  updateSegment = (e: CustomEvent) => {
    this.setState(prevState => ({
      ...prevState,
      segment: e.detail.value
    }));
  };

  doRefresh = () => {
    setTimeout(() => {
      this.setState(() => ({ isRefreshing: true }));
      if (this.ionRefresherRef.current) {
        this.ionRefresherRef.current.complete();
      }
    }, 500);
  };

  

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>

            <IonTitle>Home</IonTitle>

          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonRefresher ref={this.ionRefresherRef} onIonRefresh={this.doRefresh}>
            <IonRefresherContent />
          </IonRefresher>
          <IonToast
            isOpen={this.state.isRefreshing}
            message="Updating content"
            showCloseButton={true}
            duration={2000}
            onDidDismiss={() => this.setState(() => ({ isRefreshing: false }))}
          />
         <br></br>
         <br></br> 
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonItem>
              <IonButton style= {{"height": "150px"}}>
                <IonIcon slot="start" name="star"  />
                <img src="assets/img/fire truck.svg" alt="ionic logo" />
                </IonButton>
              </IonItem>

              <IonCardContent>
                FIRETRUCK
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <IonItem>
              <IonButton style= {{"height": "150px"}}>
                <IonIcon slot="start" name="star"  />
                <img src="assets/img/police.svg" alt="ionic logo" />
                </IonButton>
              </IonItem>

            <IonCardContent>
            POLICE
            </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonCard>
              <IonItem>
              <IonButton style= {{"height": "150px"}}>
                <IonIcon slot="start" name="star"  />
                <img src="assets/img/rescue.svg" alt="ionic logo" />
                </IonButton>
              </IonItem>

              <IonCardContent>
                RESCUE
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <IonItem>
              <IonButton style= {{"height": "150px"}}>
                <IonIcon slot="start" name="star"  />
                <img src="assets/img/ambulance.svg" alt="ionic logo" />
                </IonButton>
              </IonItem>

            <IonCardContent>
            AMBULANCE
            </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>


        
      </IonGrid>
        </IonContent>

        <IonLoading
          isOpen={this.state.showLoading}
          message={this.state.loadingMessage}
          duration={2000}
          onDidDismiss={() => this.setState(() => ({ showLoading: false }))}
        />
      

        
      </>
    );
  }
}


const mapStateToProps = (state: RootState) => ({
  allFiltered: selectors.sessions.allFiltered(state.sessions),
  favoritesFiltered: selectors.sessions.favoritesFiltered(state.sessions),
  searchText: state.sessions.searchText,
  favoriteSessions: state.sessions.favoriteSessions,
  filteredTracks: state.sessions.trackFilters,
  allTracks: selectors.sessions.allTracks(state.sessions)
});

const mapDispatchToProps = {
  setSearchText: (searchText: string) => actions.sessions.setSearchText(searchText),
  updateTrackFilters: (trackList: string[]) => actions.sessions.updateTrackFilters(trackList)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulePage);
