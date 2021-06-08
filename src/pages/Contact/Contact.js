import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './Contact.scss';
const Contact = () => {
    return (
        <div className="container">
            <div className="card text-center">
                <div className="card-header">
                    Thông tin
            </div>
                <div className="row">
                    <div className="contact-img col-lg-4">
                        <img src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/157291840_1131108414029523_7933138934249135577_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=8AEJ5fkNsQ8AX9v7TWl&_nc_ht=scontent.fhan14-2.fna&oh=8ab39a553d338a72748daf6eb67e3a94&oe=60DFB2C2" alt="loading" />
                    </div>
                    <div className="contact-content col-lg-8">
                        <h2 className="contact-name m-5">TranDue</h2>
                        <p><a href="/"><i className="fa fa-envelope-square"></i>trandue@gmail.com</a></p>
                        <p><a href="https://github.com/TranDue"><i className="fa fa-github" />Thông tin qua Github</a></p>
                        <p><a href="/"><i className="fa fa-linkedin"></i>Thông tin qua Linkedin</a></p>
                        <span>TP HCM</span>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    Liện hệ với tôi
            </div>
            </div>
        </div>
    );
};
export default Contact;
