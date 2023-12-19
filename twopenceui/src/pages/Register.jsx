import { orangeBallBlur } from "../assets";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <section className="register-container glassmorphic-container">
            <img src={orangeBallBlur} alt="" className="blur-orange-ball" />

            <div className="inner-container">
                <div className="display-image-container">
                    <img
                        src="https://nft-cdn.alchemy.com/eth-mainnet/7124b9738f8d18e9c0775c9e107b1c52"
                        alt=""
                    />
                </div>

                <div className="user-input-container">
                    {/* sign up with google */}
                    <section className="d-flex flex-column">
                        <h3>Register An Account</h3>
                        <div className="sign-in-with-google">
                            <FcGoogle
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Register;
