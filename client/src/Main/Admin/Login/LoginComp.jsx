import { useEffect, useState } from 'react';
import './LoginComp.scss';



export default function LoginComp() {


    const [userData, setUserData] = useState("");
    const [passwordData, setPasswordData] = useState("");

    const [userValue, setUserValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");


    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }


    const checkLogin = (evt) => {
        evt.preventDefault();
        console.log("Clicked in button Login");
    }



    useEffect(() => {

        fetch("/db/admin/data")
            .then((stream) => stream.json())
            .then((data) => {
                console.log(data);
                setUserData(data[0].user);
                setPasswordData(data[0].password);
            })

    }, []);

    // console.log(userData);
    // console.log(passwordData);

    console.log(userValue);
    console.log(passwordValue);


    return (
        <div className="login">

            <h3 className="login_title">Login</h3>
            <form action='/login' method='POST'>
                <div className='login_elements'>

                    <div className='input_div'>
                        <label className='label'> Username </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="login_inputs"
                            value={userValue}
                            onChange={handleChange(setUserValue)}
                        />
                        <span className='focus-border'></span>
                    </div>

                    <div className='input_div'>
                        <label className='label'> Password </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="login_inputs"
                            value={passwordValue}
                            onChange={handleChange(setPasswordValue)}
                        />
                        <span className='focus-border'></span>
                    </div>

                    <div className='button_div'>
                        <button
                            className='button'
                            onClick={checkLogin}
                        >Login</button>
                    </div>
                </div>

            </form>

        </div>
    )
}