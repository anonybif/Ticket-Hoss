import React from 'react';
import '../styles/filter.css';
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Form } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import { RiCheckboxBlankFill, RiCheckboxFill } from 'react-icons/ri';

export default function Filter({ setOpen }) {
    const styles = {
        control: (base) => ({
            ...base,
            height: '56px',
            borderRadius: '8px',
            "svg": {
                fill: "#FA4616"
            }
        }),
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const trackOptions = [
        {
            label: "All Tracks",
            value: 1
        },
        {
            label: "Track 1",
            value: 2
        },
        {
            label: "Track 2",
            value: 3
        },
    ];

    const locationOptions = [
        {
            label: "All States",
            value: 1
        },
        {
            label: "State 1",
            value: 2
        },
        {
            label: "State 2",
            value: 3
        },
    ];

    const trackTypes = ["Dirt Oval", "Paved Oval", "Drag Strip", "Off Road", "Road Course", "Other"];

    return (
        <div className="overlay"
            onClick={() => { setOpen(false); }}
        >
            <div className="filterModal">
                <div className='header'>
                    <h1 className='title'>Filter Tracks</h1>
                    <button onClick={() => { setOpen(false); }} className="closeBtn">
                        <FaTimes className='closeIcon' />
                    </button>
                </div>

                <div className="body">
                    <div className='secOne'>
                        <div className='header'>
                            <h1 className='title'>TRACK</h1>
                            <button className="dropBtn">
                                <IoIosArrowDown className='dropIcon' />
                            </button>
                        </div>
                        <div className='body'>
                            <Select styles={styles} components={{
                                IndicatorSeparator: () => null
                            }} options={trackOptions} defaultValue={trackOptions[0]} className='dropDown'>
                            </Select>

                        </div>
                    </div>

                    <div className='secOne'>
                        <div className='header'>
                            <h1 className='title'>STATE OR PROVINCE</h1>
                            <button className="dropBtn">
                                <IoIosArrowDown className='dropIcon' />
                            </button>
                        </div>
                        <div className='body'>
                            <Select styles={styles} components={{
                                IndicatorSeparator: () => null
                            }} options={locationOptions} defaultValue={locationOptions[0]} className='dropDown'>
                            </Select>

                        </div>
                    </div>

                    <div className='secTwo'>
                        <div className='header'>
                            <h1 className='title'>TYPE</h1>
                            <button className="dropBtn">
                                <IoIosArrowDown className='dropIcon' />
                            </button>
                        </div>
                        <div className='types'>
                            {trackTypes.map((item, index) => (
                                <FormGroup className='checkBorder' key={index}>
                                    <FormControlLabel control={<Checkbox sx={{
                                        color: '#fff',
                                        '&.Mui-checked': {
                                            color: '#FA4616',
                                        },
                                    }} icon={<RiCheckboxBlankFill />} checkedIcon={<RiCheckboxFill />} size="24px" className='checkBoxIcon' />} label={item} className='checkBox' />
                                </FormGroup>
                            ))}
                        </div>
                    </div>

                    <div className="footer">
                        <Button>Apply</Button>
                    </div>
                </div>


            </div>
        </div>
    )
}

// const Filter = ({ open, onClose }) => {
//     if (!open) return null;
//     return ( );
// };