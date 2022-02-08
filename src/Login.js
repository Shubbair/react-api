import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

var url = "https://jsonplaceholder.typicode.com"

const Login = function(){
    
    let navigate = useNavigate();
    const [success,setSuccess] = useState();
    const [data,setData] = useState('');
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');

    const getData = (pram)=>{
        return fetch(url+pram)
        .then(res => res.json())
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(localStorage.length == 0){
            localStorage.setItem('user-name',name);
            localStorage.setItem('email',email);
        }
        setSuccess('done');
    }
    
    const handleLogout = (e)=>{
        e.preventDefault();
        localStorage.clear();
    }

    useEffect(() => {
        setSuccess('done');

        if(localStorage.length > 0){
            setName(localStorage.getItem('user-name'));
            setEmail(localStorage.getItem('email'));

            console.log(localStorage.getItem('user-name'));
            console.log(localStorage.getItem('email'));

            getData(`/users?username=${name}&&email=${email}`).then(
                (result) => {
                    setData(result);
                },
                (error) => {
                  console.error(error)
                }
            )
        }

        if(name !== ''){
        getData(`/users?username=${name}&&email=${email}`).then(
            (result) => {
                setData(result[0]);
            },
            (error) => {
              console.error(error)
            }
          )
        }
      }, [success])

    return(
        <>
        <div>
            <h2>Login</h2>
            <input type='name' onChange={(e)=>setName(e.target.value )}placeholder='Enter your name please : '/>
            <br/>
            <input type='email' onChange={(e)=>setEmail(e.target.value )} placeholder='Enter your email please : '/>
            <br/>
            <button onClick={handleSubmit}>Login</button>
        </div>

        <br/><br/>
        <div>
            {
            <div>
                <p>Name : {data.name}</p>
                <p>Phone : {data.phone}</p>
                <p>Website : {data.website}</p>
            </div>
            }
        </div>
        <br/><br/><br/>
        <span>Logout : </span>
        <button onClick={handleLogout}>logout</button>
        </>
    )
}

export default Login;