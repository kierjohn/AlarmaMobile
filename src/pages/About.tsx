import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState, selectors } from '../store';
import { IonPopover, IonIcon, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton, IonContent, IonList, IonItem, IonLabel, IonDatetime, IonTitle } from '@ionic/react';
import './About.css';
import AboutPopover from '../components/AboutPopover';

type Props = ReturnType<typeof mapStateToProps>

type State = {
  showPopover: boolean,
  showPopoverEvent: null | MouseEvent
}

class About extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showPopover: false,
      showPopoverEvent: null
    };
  }

  presentPopover = (e: MouseEvent) => {
    this.setState(() => ({
      showPopover: true,
      showPopoverEvent: e
    }));
  }

  dismissPopover = () => {
    this.setState(() => ({
      'showPopover': false,
      'showPopoverEvent': null
    }));
  }

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>About</IonTitle>
            <IonButtons slot="end">
              <IonButton icon-only onClick={this.presentPopover}>
                <IonIcon slot="icon-only" name="more"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonPopover
          isOpen={this.state.showPopover}
          event={this.state.showPopoverEvent}
          onDidDismiss={this.dismissPopover}
        >
          <AboutPopover
            dismissPopover={this.dismissPopover}
          />
        </IonPopover>

        <IonContent>
          <div className="about-header">
            <img src="assets/img/alarmalogoo.png" alt="ionic logo" />
          </div>
          <div className="ion-padding about-info">
            <h4>About ALARMA</h4>


            <p>
				ALARMA Mobile App is a well researched mobile system and conducted by
				the project proponents from STI West Negros University. Powered by
				the LDRRMO Bacolod. It is fast, Reliable and Easy to use.
				
            </p>
          </div>
        </IonContent>
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  conferenceDate: selectors.sessions.conferenceStart(state.sessions),
});

export default connect(
  mapStateToProps
)(About);
