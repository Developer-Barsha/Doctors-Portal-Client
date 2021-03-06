import {useState, useEffect} from 'react';

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email : email};

        if(email){
            fetch('https://doctors-portal-server-barsha.herokuapp.com/user/'+email, {
                method:'PUT',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

        console.log('user inside useToken', email);
    } ,[user]);

    return [token];
}

export default useToken;