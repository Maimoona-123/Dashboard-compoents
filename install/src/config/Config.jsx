import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import SignupForm from '../Components/SignUp/SignUp'
import LoginForm from '../Components/Login/Login'
import { store } from '../Components/Store/Store';
import Dashboard from '../Components/Dashboard/Dashboard';
import NotFound from '../Components/NotFound/NotFound';
import HomePage from '../Components/Home/Home';



const Config = () => {
    const { accessToken } = useSelector(s => s.user)
    const token = localStorage.getItem('token') ?? accessToken
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route exact path="/signup" element={!token ? <SignupForm /> : <Navigate to="/user" />} />
                    <Route exact path="/login" element={!token ? <LoginForm /> : <Navigate to="/user" />} />
                    <Route exact path="*" element={token ? <ProtectedRoutes /> : <Navigate to="/login" />} />
                </Routes>
            </Router>
        </Provider>
    );
};

const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route exact path="/user" element={<Dashboard />} />
            <Route exact path="*" element={<NotFound />} />
        </Routes>

    )
}

export default Config;
