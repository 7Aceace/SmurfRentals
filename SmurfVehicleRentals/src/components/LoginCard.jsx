import React from 'react';
import '../components/LoginCard.css'
class LoginPage extends React.Component {
    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background: '#103cbe'}}>
                        <div className="featured-image mb-3">
                            <img src="images/1.png" className="img-fluid" style={{width: '250px'}} />
                        </div>
                        <p className="text-white fs-2" style={{fontFamily: "'Courier New', Courier, monospace", fontWeight: 600}}>Be Verified</p>
                        <small className="text-white text-wrap text-center" style={{width: '17rem', fontFamily: "'Courier New', Courier, monospace"}}>Rent and Tour da da da da.</small>
                    </div>
                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4">
                                <h2>Rent with Ease!</h2>
                                <p>We are happy to have you back.</p>
                            </div>
                            <form className='needs-validation'>
                                
                                <div className='form-group was-validated mb-2'> 
                                    <label htmlFor='email' className='form-label'>Email Address</label>
                                    <input type="email" className='form-control' required></input>
                                    <div className="invalid-feedback">
                                    Please Enter your email
                                    </div>
                                </div>

                                <div className='form-group was-validated mb-2'> 
                                    <label htmlFor='password'className='form-label'>Password</label>
                                    <input type="password"className='form-control' required></input>
                                    <div className="invalid-feedback">
                                    Please Enter your password
                                    </div>

                                 </div>
                            <div className="input-group mb-5 d-flex justify-content-between">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="formCheck" />
                                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                                </div>
                                <div className="forgot">
                                    <small><a href="#">Forgot Password?</a></small>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                            </div>
                            <div className="input-group mb-3">
                                <button className="form-group was-validated mb-2 btn btn-lg btn-light w-100 fs-6">
                                    <img src="images/google.png" style={{width:'20px'}} className="me-2" />
                                    <small>Sign In with Google</small>
                                </button>
                            </div>
                            <div className="row">
                                <small>Don't have account? <a href="#">Sign Up</a></small>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;