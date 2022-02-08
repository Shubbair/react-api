import React, { useState,useEffect,useRef } from 'react';

var url = 'https://randomuser.me/api';

export const NationInfo = ()=>{

    const inputRef = useRef();

    const [nationName,setNationName] = useState('');

    const [nationData,setNationData] =  useState([]);

    const fetchUserData = (code) =>{
        return fetch(url+`?nat=${code}`)
        .then(x=>x.json())
        .then(x=>x.results[0])
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchUserData('us').then((data)=>{
            setNationData(
                [
                    ...nationData,
                    data
                ]
            );
        });
    },[nationName]);

    return (
        <>
        <div>
            <hr></hr>
        <h2>Nation Information</h2>
        <input type="text" placeholder="Enter the name of the nation : " ref={inputRef}></input>
        <button onClick={(e)=>{
            setNationName(inputRef.current.value);
        }}>Search</button>
            {
            nationData.map((dat,index)=>(
                <div key={index}>
                <p>{dat.location.city}</p>
                </div>
            ))
            }
        </div>
        </>
    );
}
 
export default NationInfo;

