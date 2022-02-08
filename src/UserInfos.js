import React, { useEffect,useState } from 'react';

var url = 'https://randomuser.me/api';


export const UserInfos = ()=>{
    const [userInfo,setUserInfo] = useState([]);

    const [counter,setCounter] = useState(1)

    const fetchUserData = (counter) =>{
        return fetch(url+`?page=${counter}`)
        .then(x=>x.json())
        .then(x=>x.results[0])
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchUserData(counter).then((data)=>{
            setUserInfo([
                ...userInfo,
                data
            ])
        });
    },[counter]);

    const IncreaseCounter = () =>{
        setCounter(counter+1);
    }

    return (
        <>
        <h1>User Infos Page</h1>
        <br/>
        <button onClick={IncreaseCounter}>Show User</button>
        <br/><br/><br/>
        
        {
            userInfo.map((data,index)=>(
                <div key={index}>
                    <img src={data.picture.thumbnail} alt="user infos"/>
                    <h3>{data.name.last}</h3>
                    <h3>{data.email}</h3>
                </div>
            ))
        }
  
        </>
    );
}
 
export default UserInfos;
