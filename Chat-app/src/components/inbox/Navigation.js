import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/lws-logo-dark.svg";
import { userLoggedOut } from "../../features/auth/authSlice";
import { useState } from "react";

export default function Navigation() {
    const [newCount, setNewCount] = useState();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userLoggedOut());
        localStorage.clear();
    };

    // var count = 60;
    // const a = 10;



    const countHadeler = () => {
        var time = 10;
        const timer = setInterval(() => {
            setNewCount(time - 1);
            time--;
            if (time === 0) {
                clearInterval(timer);
            }
        }, 1000);
        console.log(time);
        return time;
    };

    // countHadeler();

    // console.log(countHadeler(count));
    return (
        <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/">
                        <img
                            className="h-10"
                            src={logoImage}
                            alt="Learn with Sumit"
                        />
                    </Link>
                    {/* {count === 0 && <p> Time sesh</p>} */}
                    {/* {countHadeler()} */}
                    {/* {<p>sdfd:{n}</p>} */}
                    <p>dfsdf: {newCount}</p>
                    <button className="text-white" onClick={() => countHadeler()}>
                        Start
                    </button>
                    <ul>
                        <li className="text-white">
                            <span className="cursor-pointer" onClick={logout}>
                                Logout
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
