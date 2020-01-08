import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

export const Signup = () => {
	return (
		<div>
			<div class="card signup-box">
				<div class="card-body">
                    <div>
                        <h3 className="text-center">Klever</h3>
                    </div>
                    <div>
                        <p className="text-center"><b><small>Create your free account <br /> to start working with top talent today!</small></b></p>
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Company Name" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-info signup-btn-width signup-btn-color">Join Us</button>
                    </div>
                    <div className="text-center">
                        <p><b>By joing, you agree to</b> <Link to=""> Klever's Terms of Service</Link></p>
                        <small>Do you already have an account? <Link to="">Proceed to login</Link></small>
                    </div>
                </div>
			</div>
		</div>
	);
};
