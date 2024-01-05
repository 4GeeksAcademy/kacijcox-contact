import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const UpdateContact = () => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect (()=>{
        let contact = store.contacts.find((contact)=>contact.id==id)
        setName(contact.full_name)
        setEmail(contact.email)
        setPhone(contact.phone)
        setAddress(contact.address)
        
    },[])
    const handleClick = () => {
        actions.UpdateContact(name, address, phone, email, id)
        navigate("/")
    }

    return (
        <div className="container">
            {/* Bootstrap form */}
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    name
                </label>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder={name}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    address
                </label>
                <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="address"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder={address}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    phone
                </label>
                <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="phone"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder={phone}
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    email
                </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder={email}
                />
            </div>

            {/* List group with demo items */}


            {/* Back home button */}
            <br />
            <Link to="/">
                <button className="btn btn-primary">Back home</button>
            </Link>
            <Link to="/">
                <button onClick={handleClick} className="btn btn-primary">Submit</button>
            </Link>
        </div>
    );
};


