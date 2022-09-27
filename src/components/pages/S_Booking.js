import React from 'react'
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



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function S_Booking() {
    const [value, setValue] = React.useState(dayjs());
    console.log("booking result " + value);
    const dateHandler = (newValue) => {
        setValue(newValue);
        console.log(value)
    }


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };








    return (
        <div>

            {/* main trip location */}

            <div className='form_main_cont1'>
                <form className='form_cont'>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="f_1">

                        <InputLabel id="demo-simple-select-standard-label" style={{ color: "#ff8600" }}>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="From"

                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Chennai</MenuItem>
                            <MenuItem value={20}>MUmbai</MenuItem>
                            <MenuItem value={30}>Namakkal</MenuItem>
                        </Select>

                    </FormControl>


                    <RiArrowLeftRightFill />

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="f_1">
                        <InputLabel id="demo-simple-select-standard-label" style={{ color: "#ff8600" }}>Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="To"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3} className="f_2">
                            <DesktopDatePicker
                                label="For desktop"
                                value={value}
                                minDate={dayjs('2017-01-01')}
                                onChange={dateHandler}
                                style={{ color: "#ff8600" }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>

                    <Stack spacing={2} direction="row" className='f_b'>
                        <Button variant="contained">Search</Button>
                    </Stack>

                </form>
            </div>

            <hr></hr>

            {/* heading */}
            <div className='main_heading_title'>
                <div className='heading_title'>

                    <table>
                        <tr>
                            <td>Airlines</td>
                            <td>Departure</td>
                            <td>Duration</td>
                            <td>Arrival</td>
                            <td>Price</td>
                            <td></td>
                        </tr>
                    </table>


                </div>
            </div>

            {/* search booking result */}

            <div className="result_main_cont">
                {/* travel details */}
                {data.map((item) => {
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

                }
            </div>



            {/* pop up window */}

            <div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <form>

                        <DialogContent>
                            <DialogContentText>
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
                            />
                        </DialogContent>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="phone nu"
                                type="number"
                                fullWidth
                                variant="standard"
                                required
                            />

                        </DialogContent>
                        <DialogContent>

                            <Stack spacing={2} direction="row" className='f_b'>
                                <Button variant="contained">Book now</Button>
                            </Stack>
                        </DialogContent>
                    </form>

                </BootstrapDialog>
            </div>




        </div>
    )
}

export default S_Booking