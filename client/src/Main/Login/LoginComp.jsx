import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LoginComp.scss';



export default function Login() {

    // const [loginData, setLoginData] = useState("");
    const [isAdmin, setAdminData] = useState();

    const navigate = useNavigate();


    useEffect(() => {

        fetch("/admin/data")
            .then((stream) => stream.json())
            .then((data) => {
                // console.log(data);
                setAdminData(data.isAdmin);
            })

        console.log(isAdmin);



        if (isAdmin) {
            navigate("/admin");
        } else {
            navigate("/login");
        }

        // fetch("/admin", {
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     },
        //     body: JSON.stringify({
        //         isAdmin: isAdmin
        //     })
        // });

        fetch("/admin")
            .then((stream) => stream.json())
            .then((data) => {
                // console.log(data);
                setAdminData(data.isAdmin);
            })



    }, [isAdmin]);


    // console.log("SKHBSDS", isAdmin);

    // console.log(loginData);


    // const [userData, setUserData] = useState("");
    // const [passwordData, setPasswordData] = useState("");

    // const [userValue, setUserValue] = useState("");
    // const [passwordValue, setPasswordValue] = useState("");


    // const handleChange = (setState) => (event) => {
    //     setState(event.target.value)
    // }


    // useEffect(() => {

    //     fetch("/db/admin/data")
    //         .then((stream) => stream.json())
    //         .then((data) => {
    //             console.log(data);
    //             setUserData(data[0].user);
    //             setPasswordData(data[0].password);
    //         })

    // }, []);

    // // console.log(userData);
    // // console.log(passwordData);

    // console.log(userValue);
    // console.log(passwordValue);


    return (

        <div className="login">

            <h3 className="login_title">Login</h3>
            <form action="/login" method="POST">
                <div className='login_elements'>

                    <div className='input_div'>
                        <label className='label'> Username </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="login_inputs"
                        // value={userValue}
                        // onChange={handleChange(setUserValue)}
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
                        // value={passwordValue}
                        // onChange={handleChange(setPasswordValue)}
                        />
                        <span className='focus-border'></span>
                    </div>

                    <div className='button_div'>
                        <button
                            type='submit'
                            className='button'
                        // onClick={checkLogin}
                        >Login</button>
                    </div>
                </div>

            </form>

        </div>
    )
}