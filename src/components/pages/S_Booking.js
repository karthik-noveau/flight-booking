import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { RiArrowLeftRightFill } from 'react-icons/ri'

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Button from '@mui/material/Button';

import data from '../Data/S_Booking_result'
import '../css/S_Booking.css'


import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import { useLocation } from 'react-router-dom';
import moment from 'moment';


import emailjs from '@emailjs/browser';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));



function S_Booking() {
    const location = useLocation();
    const history = useNavigate();
    const linkdata = location.state.data;


    useEffect(() => {
        setFromValue(linkdata.fromvalue)
        setToValue(linkdata.tovalue)
        setDateValue(dayjs(linkdata.datevalue))


    }, [])


    const d1 = new Date();
    const d2 = moment(d1).format("YYYY-MM-DD")

    const [fromValue, setFromValue] = useState("");
    const [toValue, setToValue] = useState("");
    const [dateValue, setDateValue] = useState((dayjs(d2)));

    // pop winddow state
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // send to the emailjs
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [phnoValue, setPhnoValue] = useState('')
    const [accomValue, setAccomValue] = useState('')

    const [sendData, setSendData] = useState(
        {
            namevalue: '',
            emailvalue: '',
            phnovalue: '',
            fromvalue: '',
            tovalue: '',
            datevalue: '',
            accomvalue: '',

        }
    )



    const buttonHandler = () => {
        setSendData({
            namevalue: nameValue,
            emailvalue: emailValue,
            phnovalue: phnoValue,
            fromvalue: linkdata.fromvalue,
            tovalue: linkdata.tovalue,
            datevalue: linkdata.datevalue,
            accomvalue: accomValue,
        })

        emailjs.send('service_jo8uwra', 'template_wmzwm2a', sendData, 'M2EVIoCzUjDt4ZcXP')
            .then(response => {
                console.log('SUCCESS!', response);

            }, error => {
                console.log('FAILED...', error);
            }).then(() => {
                history('/')
            })



    }


    const nameHandler = (e) => {
        setNameValue(e.target.value)

    }
    const emailHandler = (e) => {
        setEmailValue(e.target.value)

    }
    const phnoHandler = (e) => {
        setPhnoValue(e.target.value)

    }
    const accomHandler = (e) => {
        setAccomValue(e.target.value)
    }


    useEffect(() => {
        setSendData({
            namevalue: nameValue,
            emailvalue: emailValue,
            phnovalue: phnoValue,
            fromvalue: linkdata.fromvalue,
            tovalue: linkdata.tovalue,
            datevalue: linkdata.datevalue,
            accomvalue: accomValue,
        })

    }, [nameValue, emailValue, phnoValue, accomValue])















    return (
        <div>

            {/* main trip location */}

            <div className='form_main_cont1'>
                <form className='form_cont'>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="f_1">

                        <InputLabel id="demo-simple-select-standard-label" style={{ color: "#ff8600" }}>From</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="From"
                            // onChange={fromStateHandler}
                            value={fromValue}
                        >
                            <MenuItem value={fromValue}>{fromValue}</MenuItem>
                        </Select>
                    </FormControl>


                    <RiArrowLeftRightFill />

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="f_1">

                        <InputLabel id="demo-simple-select-standard-label" style={{ color: "#ff8600" }}>To</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="From"
                            // onChange={fromStateHandler}
                            value={toValue}
                        >
                            <MenuItem value={toValue}>{toValue}</MenuItem>
                        </Select>
                    </FormControl>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3} className="f_2">
                            <DesktopDatePicker
                                label="Selected date"
                                value={dateValue}
                                minDate={dayjs('2017-01-01')}
                                style={{ color: "#ff8600" }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>

                    <Stack spacing={2} direction="row" className='f_bb'>
                        <Button variant="contained" className='f_b_1'>You Searched</Button>
                    </Stack>

                </form>
            </div>

            <hr></hr>

            {/* heading */}

            {/* search booking result */}

            <div className="result_main_cont">
                {/* travel details */}
                <div className="result_cont">
                    <table>
                        <tr className="data_heading">
                            <td>Airlines</td>
                            <td>Departure</td>
                            <td>Duration</td>
                            <td>Arrival</td>
                            <td>Price</td>
                            <td></td>
                        </tr>
                   
                    {
                        data.map((item) => {
                            return (
                                
                                    <tr>

                                        <td>
                                            <div className='r_d1'>
                                                <div className='r_d2'>
                                                    <img src='https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/SG_2x.png?alt=media&token=754f59b8-35f7-4f69-ab78-cf1885b68d30' />
                                                    <div className='r_d3'>
                                                        <p>{item.flight}</p>
                                                        <p>SG-123</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td><p className='r_t1'>23:55</p></td>

                                        <td> <p>9h 40m</p></td>

                                        <td>  <p>09:35</p></td>

                                        <td> <h3>{item.price}</h3></td>

                                        <td>    <div className='f_b2'>
                                            <Stack spacing={2} direction="row" >
                                                <Button variant="contained" onClick={handleClickOpen}>Book here</Button>
                                            </Stack>
                                            <p className='r_d1_p'>Flight Details</p>
                                        </div></td>
                                    </tr>
                             

                            )
                        })
                    }
                    </table>

                </div>
            </div>
            {/* {data.map((item) => {
                    return (
                        <div className="result_cont">
                            <p className='r_d1p1'><span>{item.top_off_bold}</span> Get FLAT 25% off on SEATS!</p>
                            <div className='r_d1'>
                                <div className='r_d2'>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/SG_2x.png?alt=media&token=754f59b8-35f7-4f69-ab78-cf1885b68d30' />
                                    <div className='r_d3'>
                                        <p>{item.flight}</p>
                                        <p>SG-123</p>
                                    </div>
                                </div>
                            </div>
                            <p className='r_t1'>23:55</p>
                            <p>9h 40m</p>
                            <p>09:35</p>
                            <h3>{item.price}</h3>
                            <div className='f_b2'>
                                <Stack spacing={2} direction="row" >
                                    <Button variant="contained" onClick={handleClickOpen}>Book here</Button>
                                </Stack>
                                <p className='r_d1_p'>Flight Details</p>
                            </div>
                            <p className='off1'>Upto 35% off with Axis/ICICI cards (BBDCC)</p>
                        </div>
                    )
                })

                } */}




            {/* pop up window */}

            <div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <form>

                        <DialogContent>
                            <DialogContentText className="p_txt">
                                Enter your details
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                className='tt1'
                                onChange={nameHandler}
                                required
                            />
                        </DialogContent>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                                className='tt1'
                                onChange={emailHandler}
                            />
                        </DialogContent>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="phone number"
                                type="number"
                                fullWidth
                                variant="standard"
                                className='tt1'
                                onChange={phnoHandler}
                            />

                        </DialogContent>

                        <FormControl style={{ marginLeft: "15px", marginTop: "27px" }}>
                            <FormLabel id="demo-radio-buttons-group-label">Accomodation</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"

                                name="radio-buttons-group"
                                style={{ color: "black" }}
                                onChange={accomHandler}
                            >
                                <FormControlLabel value="Hotel" control={<Radio style={{ color: "black" }} />} label="Hotel" />
                                <FormControlLabel value="Hostel" control={<Radio style={{ color: "black" }} />} label="Hostel" />
                                <FormControlLabel value="No need" control={<Radio style={{ color: "black" }} />} label="No need" />

                            </RadioGroup>
                        </FormControl>

                        <DialogContent>

                            <Stack spacing={2} direction="row" className='f_b'>
                                <Button variant="contained" className="f_bbb" onClick={buttonHandler}>Book now</Button>
                            </Stack>
                        </DialogContent>

                    </form>

                </BootstrapDialog>
            </div>




        </div>
    )
}

export default S_Booking