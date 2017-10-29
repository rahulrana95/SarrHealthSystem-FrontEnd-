import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

import {Provider} from 'react-redux';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import Patient from './components/Patient.js';
import BookAppointment from './components/BookAppointment.js';
import MedicalHistory from './components/MedicalHistory.js';
import Emergency from './components/Emergency.js';

//
import SearchCase from './components/SearchCase.js';
import TalkToDoctor from './components/TalkToDoctor.js';
import AvailableBookings from './components/AvailableBookings';

//
import '../node_modules/antd/dist/antd.css';  // or 'antd/dist/antd.less'
import store from './Stores/index.js';
import './index.css';
import './palette.css';
import App from './App';
import TrackMedicines from './components/TrackMedicines.js';
ReactDOM.render(
  <LocaleProvider locale={enUS}>
  <Provider store={store}>
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="trackMedicines" component={TrackMedicines} />
    <Route path="bookAppointment" component={BookAppointment} />
    <Route path="medicalHistory" component={MedicalHistory} />
    <Route path="emergency" component={Emergency} />
    <Route path="availableBookings" component={AvailableBookings} />
    <Route path="searchCase" component={SearchCase} />
    <Route path="talkToDoctor" component={TalkToDoctor} />
  </Route>
</Router>
</Provider>
</LocaleProvider>, document.getElementById('root'));
//registerServiceWorker();
