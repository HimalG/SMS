
import PaginationButtons, { dataPagination, PER_COUNT } from '../../../components/PaginationButtons';
import useSortableData from '../../../hooks/useSortableData';
import useDarkMode from '../../../hooks/useDarkMode';
import { httpGetStudentInfo } from '../../http/httpApiCall';
import studentServices from './studentServices';
import { notifyError } from '../../../components/toast/Toast';import React, { FC, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useForm } from "react-hook-form";
import dayjs from 'dayjs';
import { FormikHelpers, useFormik } from 'formik';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import { auto } from '@popperjs/core';
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
function StudentRegistration(props:any){
    const { register, handleSubmit, watch, trigger, formState: { errors }, reset, control } = useForm({
        defaultValues: useMemo(() => {
            return props.student;
        }, [props])
    })
    
    const [birthDate, setBirthDate] = useState('');
    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className="card rounded-0">
                    <div className="card-header mb-0">
                        <div className="card-title mb-0">
                            <h4>Student Registration</h4></div>
                    </div>
                    <div className="card-body">
                        <div className='col-12'><h5 className='text-center bg-warning text-dark'>Basic Student Information</h5></div>
                      
                                        <input type="hidden" defaultValue={0} className="form-control" {...register('Id')} />
                                        <div className="row clearfix">
                                            <fieldset className='row col-md-12 ml-2'>
                                                
                                            <legend>Individual Info</legend>
                                            <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>School/College Code No.: <span className='text-danger'>*</span></label>
                                                        <input type="text" className={`form-group d-block ${errors.SchoolCode ? " is-invalid" : ""}`} {...register('SchoolCode', { required: "Please Enter Member Name" })} />
                                                        {/* {errors.FirstName && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.FirstName}</span></div>} */}
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Admission Year <span className='text-danger'>*</span></label>
                                                        <input type="text" className={`form-group d-block ${errors.FirstName ? " is-invalid" : ""}`} {...register('AdmissionYear', { required: "Please Enter Member Name" })} />
                                                        {/* {errors.FirstName && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.FirstName}</span></div>} */}
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Class/Batch <span className='text-danger'>*</span></label>
                                                        <input type="text" className={`form-group d-block ${errors.FirstName ? " is-invalid" : ""}`} {...register('Class', { required: "Please Enter Member Name" })} />
                                                        {/* {errors.FirstName && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.FirstName}</span></div>} */}
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Section <span className='text-danger'>*</span></label>
                                                        <input type="text" className={`form-group d-block ${errors.FirstName ? " is-invalid" : ""}`} {...register('Section', { required: "Please Enter Member Name" })} />
                                                        {/* {errors.FirstName && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.FirstName}</span></div>} */}
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Prefix<span className='text-danger'>*</span></label>
                                                        <select id=" Prefix" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.Prefix ? " is-invalid" : ""}`} {...register('Prefix', {
                                                            validate: {
                                                                required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select Prefix";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"Select Prefix..."}</option>
                                                            <option value="Mr">Mr</option>
                                                            <option value="Mrs">Mrs</option>
                                                            <option value="Miss">Miss</option>
                                                        </select>
                                                        {/* {errors.Honorific && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.Honorific.message}</span></div>} */}
                                                    </div>
                                                </div>
                                            <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>First Name <span className='text-danger'>*</span></label>
                                                        <input type="text" className={`form-group d-block ${errors.FirstName ? " is-invalid" : ""}`} {...register('FirstName', { required: "Please Enter First Name" })} />
                                                        {/* {errors.FirstName && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.FirstName}</span></div>} */}
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Middle Name </label>
                                                        <input type="text" className={`form-group d-block ${errors.MiddleName ? " is-invalid" : ""}`} {...register('MiddleName')} />
                                                        {/* {errors.FirstName && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.FirstName}</span></div>} */}
                                                    </div>
                                                </div><div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Last Name <span className='text-danger'>*</span></label>
                                                        <input type="text" className={`form-group d-block ${errors.LastName ? " is-invalid" : ""}`} {...register('LastName', { required: "Please Enter Last Name" })} />
                                                        {/* {errors.FirstName && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.FirstName}</span></div>} */}
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <label className="col-sm-6 col-md-6"> Birth Date<span className='text-danger'>*</span></label><br />
                                                    <NepaliDatePicker  inputClassName={`form-group d-block ${errors.DOB && birthDate == '' ? " is-invalid" : ""}`}
                                                        className=""
                                                        //value={birthDate != '' ? adToBs(birthDate) : adToBs(moment(props.member.BirthDate).format('YYYY-MM-DD'))}
                                                        {...register('DOB', {
                                                            validate: {
                                                                required: (value: any) => {
                                                                    if (birthDate == '')
                                                                        return "Select Birth Date";
                                                                    return true;
                                                                }
                                                            }
                                                        })}
                                                        onChange={(value: any) => { register('DOB').onChange(value), setBirthDate(value) }}
                                                        options={{ calenderLocale: "en", valueLocale: "en" }} />
                                                    {/* {errors.BirthDate && birthDate == '' && <div className="invalid-feedback" style={{ display: "block" }}><span>{errors.BirthDate.message}</span></div>} */}
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Disability</label>
                                                        <select id=" Disability" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.Prefix ? " is-invalid" : ""}`} {...register('Disability')}>
                                                            <option key={"0"} value={"0"}>{"None"}</option>
                                                            <option value="Blind">Blindness</option>
                                                            <option value="Lowvision">Low-vision</option>
                                                            <option value="Deaf">Hearing impairment</option>
                                                            <option value="Dwarfism">Dwarfism</option>
                                                            <option value="ASD">Autism Spectrum Disorder</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Blood Group<span className='text-danger'>*</span></label>
                                                        <select id=" BloodGroup" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.BloodGroup ? " is-invalid" : ""}`} {...register('BloodGroup' ,{  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select Blood Group";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"None"}</option>
                                                            <option value="A+">A+</option>
                                                            <option value="A-">A-</option>
                                                            <option value="B+">B+</option>
                                                            <option value="B-">B-</option>
                                                            <option value="AB-">AB-</option>
                                                            <option value="AB+">AB+</option>
                                                            <option value="O+">O+</option>
                                                            <option value="O-">O-</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Gender<span className='text-danger'>*</span></label>
                                                        <select id=" Gender" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.Gender ? " is-invalid" : ""}`} {...register('Gender',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select Gender";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"None"}</option>
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                            <option value="Others">others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Nationality<span className='text-danger'>*</span></label>
                                                        <select id=" Nationality" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.Nationality ? " is-invalid" : ""}`} {...register('Nationality',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select Nationality";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"None"}</option>
                                                            <option value="Nepalese">Nepalese</option>
                                                            <option value="Indian">Indian</option>
                                                            <option value="Others">others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Caste<span className='text-danger'>*</span></label>
                                                        <select id=" Caste" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.Caste ? " is-invalid" : ""}`} {...register('Caste',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select caste";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"None"}</option>
                                                            <option value="Brahmin">Brahmin</option>
                                                            <option value="Chhetri">Chhetri</option>
                                                            <option value="Newar">Newar</option>
                                                            <option value="Tharu">Tharu</option>
                                                            <option value="Others">Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Religion<span className='text-danger'>*</span></label>
                                                        <select id=" Religion" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.Religion ? " is-invalid" : ""}`} {...register('Religion',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select Religion";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"None"}</option>
                                                            <option value="Hindu">Hindu</option>
                                                            <option value="Buddhist">Buddhist</option>
                                                            <option value="Muslim">Muslim</option>
                                                            <option value="Christian">Christian</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Mother Tongue<span className='text-danger'>*</span></label>
                                                        <select id=" MotherTongue" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.MotherTongue ? " is-invalid" : ""}`} {...register('MotherTongue',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select Mother Tongue";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option value="Nepali">Nepali</option>
                                                            <option value="Newari">Newari</option>
                                                            <option value="Magar">Magar</option>
                                                            <option value="Gurung">Gurung</option>
                                                            <option value="Maithili">Maithili</option>
                                                            <option value="Bhojpuri">Bhojpuri</option>
                                                            <option value="Awadhi">Awadhi</option>
                                                            <option value="Others">Others</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Scholarship<span className='text-danger'>*</span></label>
                                                        <select id=" Scholarship" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.Scholarship ? " is-invalid" : ""}`} {...register('Scholarship',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select Scholarship";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"None"}</option>
                                                            <option value="FullScholarship">Full Scholarship</option>
                                                            <option value="SemiScholarship">Semi-Scholarship</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Route<span className='text-danger'>*</span></label>
                                                <input type="number" value="Route"  style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('Route')} />
                                                </div>
                                                </div>
                                                <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>Is VEG<span className='text-danger'>*</span></label>
                                                        <select id=" IsVeg" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.IsVeg ? " is-invalid" : ""}`} {...register('IsVeg',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"None"}</option>
                                                            <option value="true">True</option>
                                                            <option value="false">False</option>
                                                        </select>
                                                    </div>
                                                </div> <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>ECAHouse<span className='text-danger'>*</span></label>
                                                        <select id=" IsVeg" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.ECAHouse ? " is-invalid" : ""}`} {...register('ECAHouse',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select ECAHouse";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"Select"}</option>
                                                            <option value="ECAHouse1">ECAHouse1</option>
                                                            <option value="ECAHouse2">ECAHouse2</option>
                                                        </select>
                                                    </div>
                                                </div> <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>CCAClub<span className='text-danger'>*</span></label>
                                                        <select id=" CCAClub" style={{width:"55%", height:"25px"}}className={`form-group d-block ${errors.CCAClub ? " is-invalid" : ""}`} {...register('CCAClub',  {  validate: {  required: (value: any) => {
                                                                    if (value < 1)
                                                                        return "Select CCAClub";
                                                                    return true;
                                                                }
                                                            }
                                                        })}>
                                                            <option key={"0"} value={"0"}>{"Select"}</option>
                                                            <option value="CCAClub1">CCAClub1</option>
                                                            <option value="CCAClub2">CCAClub2</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                </fieldset>
                                                <fieldset className='row col-md-12 ml-2 mt-2'>
                                                    <legend>Adddress Info</legend>
                                                    <div className="row clearfix">
                                                    <h5>Temporary Address</h5>
                                                    <div className="col-sm-4 col-md-3">
                                                    <div className="form-group">
                                                        <label>State<span className='text-danger'>*</span></label>
                                                        <input type="text"  style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('PState')} />
                                                        </div>
                                                        </div>   
                                                        <div className="col-sm-4 col-md-3">
                                                            <div className="form-group">
                                                                <label>District<span className='text-danger'>*</span></label>
                                                        <input type="text"  style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('TDistrict')} />
                                                        </div>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3">
                                                            <div className="form-group">
                                                                <label>Municipality/Rural Municipality<span className='text-danger'>*</span></label>
                                                        <input type="text"   style={{width:"62%", height:"25px"}} className="form-group d-block" {...register('TLocalLevel')} />
                                                        </div>
                                                        </div>
                                                        <div className="col-sm-4 col-md-3">
                                                            <div className="form-group">
                                                                <label>Ward no:<span className='text-danger'>*</span></label>
                                                        <input type="number"   style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('TWard')} />
                                                        </div>
                                                        </div><div className="col-sm-4 col-md-3">
                                                            <div className="form-group">
                                                                <label>Local Address<span className='text-danger'>*</span></label>
                                                        <input type="text"   style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('TLocality')} />
                                                        </div>
                                                        </div>
                                                        </div> <div className="row clearfix">
                                                        <h5>Permanent Address</h5>
                                                        <div className="col-sm-4 col-md-3">
                                                        <div className="form-group">
                                                            <label>State<span className='text-danger'>*</span></label>
                                                            <input type="text"  style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('PState')} />
                                                            </div>
                                                            </div>   
                                                            <div className="col-sm-4 col-md-3">
                                                                <div className="form-group">
                                                                    <label>District<span className='text-danger'>*</span></label>
                                                            <input type="text"  style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('PDistrict')} />
                                                            </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-3">
                                                                <div className="form-group">
                                                                    <label>Municipality/Rural Municipality<span className='text-danger'>*</span></label>
                                                            <input type="text"   style={{width:"62%", height:"25px"}} className="form-group d-block" {...register('PLocalLevel')} />
                                                            </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-3">
                                                                <div className="form-group">
                                                                    <label>Ward no:<span className='text-danger'>*</span></label>
                                                            <input type="number"   style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('PWard')} />
                                                            </div>
                                                            </div>
                                                            <div className="col-sm-4 col-md-3">
                                                            <div className="form-group">
                                                                <label>Local Address<span className='text-danger'>*</span></label>
                                                        <input type="text"   style={{width:"55%", height:"25px"}} className="form-group d-block" {...register('PLocality')} />
                                                        </div>
                                                        </div>
                                                            </div>
                                                        </fieldset>
                                                </div>
                                                </div>
                </div>
           </div>
        </div>
        </>
    )


}
export default StudentRegistration;