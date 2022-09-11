import React, { useState } from 'react';
import './Sform.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
// import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';


export const Sform = props => {

    const [programOfChoise, setprogramOfChoise] = useState('');
    const [province, setprovince] = useState('');
    const [keyword, setkeyword] = useState('');
    const [benefitCode, setbenefitCode] = useState('');
    const [fromDate, setfromDate] = useState(null);
    const [toDate, settoDate] = useState(null);
    
    const handleChangeProgramOfChoise = (event) => setprogramOfChoise(event.target.value);
    const handleChangeProvince = (event) => setprovince(event.target.value);
    

    return (
      <div>
        <div className='head1'> Find benefit rate history </div>
        <div>
          <Box component="form" className='separator'>
            <div className='separator'>
                <FormControl fullWidth>
                    <InputLabel>Program of choise</InputLabel>
                    <Select
                        value={programOfChoise}
                        label="Program of choise"
                        id="form-program-of-choise"
                        onChange={handleChangeProgramOfChoise}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
            </div>
            <div className='separator'>
                <FormControl fullWidth>
                <InputLabel>Province</InputLabel>
                    <Select
                        value={province}
                        label="Province"
                        id="form-province"
                        onChange={handleChangeProvince}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
            </div>
            <div className='separator'>
                <FormControl fullWidth>
                    <TextField 
                        label="Search keyword(s)"
                        id="form-keyword"
                        value={keyword}
                        onChange = {(event) => setkeyword(event.target.value)}
                    ></TextField>
                </FormControl>
            </div>
            <div className='separator'>
                <FormControl fullWidth>
                    <TextField 
                        label="Search benefit code (eg. 101450)" 
                        id="form-benefit-code"
                        value={benefitCode}
                        onChange = {(event) => setbenefitCode(event.target.value)}
                    ></TextField>
                </FormControl>
            </div>
            <div className='separator'>
                <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="From date"
                            id="form-start-date"
                            value={fromDate}
                            onChange={(newValue) => setfromDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
            </div>
            <div className='separator'>
                <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="To date"
                            id="form-to-date"
                            value={toDate}
                            onChange={(newValue) => settoDate(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
            </div>
            <div className='separator'>
                <FormControl fullWidth>
                    <Button variant="contained" size="large">Search</Button>
                </FormControl>
            </div>
          </Box>
        </div>
      </div>
    );
  };