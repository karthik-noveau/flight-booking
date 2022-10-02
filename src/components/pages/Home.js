import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link } from 'react-router-dom'
import { RiArrowLeftRightFill } from 'react-icons/ri'

import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Button from '@mui/material/Button';
import '../css/Home.css'

import { stateName } from '../Data/statesName';
import moment from 'moment';

function Home() {
    const settings = {
        draggable: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        fade: true,
        speed: 700,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100
    };
    // const d = new Date();
    // const dy = d.getFullYear()
    // const dm = d.getMonth() + 1
    // const dd = d.getDate()
    const d1 = new Date();
    const d2 = moment(d1).format("YYYY-MM-DD")

    const [value, setValue] = useState(dayjs(d2));
    const [fromValue, setFromValue] = useState("Not selectd");
    const [toValue, setToValue] = useState("Not selected");
    const [dateValue, setDateValue] = useState('')


    const [data, setData] = useState({
        fromvalue: '',
        tovalue: '',
        datevalue: ''
    })


    const fromStateHandler = (e) => {
        setFromValue(e.target.value)
    }
    const toStateHandler = (e) => {
        setToValue(e.target.value)
    }


    const dateStateHandler = (e) => {
        setValue(e)
        setDateValue(moment(e.$d).format('YYYY-MM-DD'))
        console.log("date clicked " + moment(e.$d).format('YYYY-MM-DD'))

    }

    useEffect(() => {
        setData({
            fromvalue: fromValue,
            tovalue: toValue,
            datevalue: dateValue
        })
    }, [fromValue, toValue, dateValue])

    const LinkHandler = () => {
        setData({
            fromvalue: fromValue,
            tovalue: toValue,
            datevalue: dateValue
        })

    }
    console.log("d1 " + data.fromvalue)
    console.log("d2 " + data.tovalue)
    // console.log("d3 " + moment(value).format('YYYY-MM-DD'))






    return (
        <div>
            {/* slider */}
            <div className='slide_cont'>
                <Slider {...settings}>

                    <div className='slide_cont1'>
                        <img src={"https://images.ixigo.com/image/upload/q_80/f_auto/banner/0c121767a9b3bafd7a5bae7901a23e32-tplyy.jpg"} className='resize_fit_center' />
                    </div>
                    <div className='slide_cont1'>
                        <img src={"https://images.ixigo.com/image/upload/f_auto/banner/c8767859f1587c6006fd3e3e6d0daf14-ontjc.jpg"} className='resize_fit_center' />
                    </div>
                    <div className='slide_cont1'>
                        <img src={"https://images.ixigo.com/image/upload/f_auto/banner/b4ba97cd0798fae290bed61810acdbd5-ohopa.jpg"} className='resize_fit_center' />
                    </div>
                </Slider>

                {/* main trip location */}
                <div className='form_main_cont'>
                    <form className='form_cont'>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="f_1">
                            <InputLabel id="demo-simple-select-standard-label" style={{ color: "#ff8600" }}>From</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="From"
                                onChange={fromStateHandler}
                            >
                                <MenuItem value="">

                                </MenuItem>
                                {
                                    stateName.map((item) => {
                                        return (
                                            <MenuItem value={item} >{item}</MenuItem>
                                        )
                                    })
                                }
                            </Select>

                        </FormControl>


                        <RiArrowLeftRightFill />

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="f_1">
                            <InputLabel id="demo-simple-select-standard-label" style={{ color: "#ff8600" }}>To</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                label="To"
                                onChange={toStateHandler}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    stateName.map((item) => {
                                        return (
                                            <MenuItem value={item}>{item}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3} className="f_2">
                                <DesktopDatePicker
                                    label="Selected date"
                                    value={value}
                                    minDate={dayjs(d2)}

                                    onChange={dateStateHandler}
                                    style={{ color: "#ff8600" }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>

                        <Stack spacing={2} direction="row" className='f_b'>
                            <Link
                                // to='/S_Booking'
                                to={{ pathname: '/S_Booking' }}
                                state={{ data: data }}
                                onClick={LinkHandler}
                            >

                                <Button variant="contained" className='f_b_1'>Search</Button>
                            </Link>

                        </Stack>

                    </form>
                </div>
            </div>


            {/* offer */}
            <div className="offer_cont">
                <img src={"https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/39ec4d2f53b0c925955331e54a84de25-updbw.png?alt=media&token=93698459-cea8-495e-a5d0-8363ce99a4e1"} />
            </div>

            {/* popular destination */}
            <div>

                <div className="img_cont">
                    <p className='txt_1'>Popular destinaions</p>
                    <div className="img_main_cont">

                        <div className="img_1">
                            <img src="https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/Goa_2000_1328.jfif?alt=media&token=f266c762-bd7b-44be-a54f-c41ef29adcb9" />
                            <div className='img_1_txt'>
                                <p >Goa</p>
                                <p>3051 Properties</p>
                            </div>
                        </div>

                        <div className="img_1">
                            <img src="https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/Delhi_2000_1328.webp?alt=media&token=00523b76-ee8f-4c17-99ad-af66eb2b48b9" />
                            <div className='img_1_txt'>
                                <p >Delhi</p>
                                <p>2436 Properties</p>
                            </div>
                        </div>

                        <div className="img_1">
                            <img src="https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/Mumbai_2000_1328.webp?alt=media&token=b6c25c3c-55af-4891-a219-d7bd806a369a" />
                            <div className='img_1_txt'>
                                <p >Mumbai</p>
                                <p>1665 Properties</p>
                            </div>
                        </div>

                        <div className="img_1">
                            <img src="https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/Jaipur_2000_1328.jfif?alt=media&token=991f5b67-3b83-4dd4-8622-dab1655807a7" />
                            <div className='img_1_txt'>
                                <p >Jaipur</p>
                                <p>777 Properties</p>
                            </div>
                        </div>
                        <div className="img_1">
                            <img src="https://firebasestorage.googleapis.com/v0/b/flight-booking-d4fcf.appspot.com/o/Dubai_2000_1328.jfif?alt=media&token=64093eb5-f8b5-4b2a-99d9-f71e1e621a35" />
                            <div className='img_1_txt'>
                                <p >Dubai</p>
                                <p>801 Properties</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* details */}

            <div>
                <div className='details_main_cont'>

                    <div className='details_cont'>
                        <p>Why book on Skytrip.com?</p>
                        <p>Skytrip.com is centered on making travel simple and has been designed to let you look for cheap flights or complete your flight booking in just a few clicks. The booking experience is seamless and fast with our features like Expressway – which allows for easy checkout, Shortlist – this lets you compare multiple itineraries across dates, Fare alert – here we inform you of price drops or hikes, and even EMI options for expensive air tickets. Our round-the-clock customer service ensures all your queries and concerns are addressed efficiently and resolved.</p>
                    </div>

                    <div className='details_cont'>
                        <p>How to search for cheap flights?</p>
                        <p>Our search is designed on the principle of best flight discovery and is very easy to use.

                            Enter from and to city/airport
                            Select the date of travel
                            Choose the number of travelers and hit enter
                            You’ll be directed to a search list of all the flights available with the cheapest ones on the top. You can further filter your search by choosing preferences and filters like time, duration, number of stops, and by airlines or even look for other dates by just clicking on the calendar visible on the right side of the page.</p>
                    </div>

                    <div className='details_cont'>
                        <p>What’s more?</p>
                        <p>Flight ticket booking or planning your travel is made simpler with our round trip and multicity options. When you hit enter, your search list page shows the results for both onward and return in a split screen format letting you choose flights in one go for a round trip. The multicity search page shows a list of complete itineraries that removes the hassle of you calculating time, transfers and layovers letting you finish your online flight booking. To ensure you get the best price we highlight offers, sales and other promotions on the checkout page. Post booking, our portal allows for easy cancellations or amendments without having to make calls to the airlines.</p>
                    </div>

                </div>
            </div>







        </div>
    )
}

export default Home