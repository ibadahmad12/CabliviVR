import Auth from './pages/Auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientReport from './pages/PatientReport/index';
import Treatment from './pages/Treatment/index';
import Diagnosis from './pages/Diagnosis/index';
import ConsultScreen from './pages/Consults/index';
import OrderTest from './pages/OrderTest/index';
import RootContext from './Context/RootContext';
import HeadsetForm from './Components/HeadsetForm';
import List from './Components/HeadSetList/index';

console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

const App = () => {
    return (
        <RootContext>
            <Router>
                <Routes>
                    <Route path="/" element={<Auth />} exact />
                    <Route path="/headset-form" element={<HeadsetForm />} exact />
                    <Route path="/headsets/:id" element={<List />} exact />
                    <Route path="/report" element={<PatientReport />} exact />
                    <Route path="/consults" element={<ConsultScreen />} exact />
                    <Route path="/order" element={<OrderTest />} exact />
                    <Route path="/diagnosis" element={<Diagnosis />} exact />
                    <Route path="/treatment" element={<Treatment />} exact />
                </Routes>
            </Router>
        </RootContext>
    );
};

export default App;
