import { useEffect, useState } from 'react'
import './LoginComp.scss'



export default function LoginComp({ regBool, setRegBool }) {

    const [userData, setUserData] = useState("");
    const [passwordData, setPasswordData] = useState("");

    useEffect(() => {

        fetch("/db/admin/data")
            .then((stream) => stream.json())
            .then((data) => {
                console.log(data);
                setUserData(data[0].user);
                setPasswordData(data[0].password);
            })

    }, [])

    console.log(userData);
    console.log(passwordData);


    return (
        <div className="login">

            <h3 className="login_title">Login</h3>
            <form>
                <div className='login_elements'>

                    <div className='input_div'>
                        <label className='label'> Username </label>
                        <input type="text" name="username" placeholder="Username" className="login_inputs" />
                        <span className='focus-border'></span>
                    </div>

                    <div className='input_div'>
                        <label className='label'> Password </label>
                        <input type="password" name="password" placeholder="Password" className="login_inputs" />
                        <span className='focus-border'></span>
                    </div>

                    <div className='button_div'>
                        <button className='button'>Login</button>
                    </div>
                </div>

            </form>

        </div>
    )
}