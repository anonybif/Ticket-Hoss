import React, { useState } from "react";
import '../styles/downloadApp.css';
import { FaTimes } from "react-icons/fa";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function DownloadApp({ setOpenDownloadApp }) {
    const [selected, setSelected] = useState("");
    const [value, setValue] = useState()
    console.log(selected);

    return (
        <div className="overlay">
            <div className="downloadModal">
                <div className='header'>
                    <button onClick={() => { setOpenDownloadApp(false); }} className="closeBtn">
                        <FaTimes className='closeIcon' />
                    </button>
                    <h1 className='title'>Download Ticket Hoss App</h1>
                </div>

                <div className="body">
                    <div className='logo'>
                        <img src={logo} alt='ticket-hoss logo' />
                    </div>
                    <div className='text'>
                        <h1 >Insert your mobile phone number and receive the link to download the app:</h1>
                    </div>
                    <div className="phoneInput">
                        <PhoneInput
                            defaultCountry="US"
                            placeholder="111 222 3344"
                            value={value}
                            onChange={setValue} />
                    </div>


                </div>
                <div className="footer">
                    <Button >Send Download Link by SMS</Button>
                </div>
            </div>
        </div>
    )
}
