import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle } = useAuth();
    const [setIsLoading] = useState(true);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            {/* login form  */}
            <main className="container my-5">
                <div className="row">
                    <section className="col-md-6 my-5 offset-md-3">

                        <div className="card shadow p-5">
                            <form>

                                <h3 className="text-center text-uppercase mb-4">Registration Please</h3>
                                <hr />

                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Full Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>

                                <label htmlFor="Password">Password</label>
                                <div className="input-group mb-3">
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                    </div>
                                </div>

                                <button className="btn btn-block btn-danger rounded-pill mt-3">Login</button>

                                <p className="mt-3 text-white">Don't have an Account ? <Link to="/login" className="text-white"> Create Here</Link></p>

                                <button onClick={handleGoogleLogin} className="btn btn-danger">Google Login</button>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
            {/* login form  */}

        </div>
    );
};

export default Registration;