import PropTypes from "prop-types";
import { IoLogoTwitter } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";

const Dashboard = (props) => {
    return (
        <main className="position-relative">
            {/* header area */}
            <section className="app-main-hero-container">
                {/* background effect left */}
                <img
                    src="https://themegenix.net/nerko/wp-content/uploads/2022/12/gradient_bg01.png"
                    alt=""
                    className="background-effect-left"
                />

                <img
                    src="https://themegenix.net/nerko/wp-content/uploads/2022/12/gradient_bg01.png"
                    alt=""
                    className="background-effect-right"
                />
                <header className="app-main-header">
                    <img
                        className="app-header-logo"
                        src="https://themegenix.net/wp/nerko-preview/assets/images/nerko-icon.svg"
                        alt="twopince logo"
                    />
                    <ul className="header-link-container">
                        {/* for home */}
                        <li>
                            <Link className="header-link" to="">
                                Home
                            </Link>
                        </li>
                        {/* for minting */}
                        <li>
                            <Link className="header-link" to="">
                                Minting
                            </Link>
                        </li>

                        {/* for About */}

                        <li>
                            <Link className="header-link" to="">
                                About
                            </Link>
                        </li>

                        {/* for collection */}
                        <li>
                            <Link className="header-link" to="">
                                Collection
                            </Link>
                        </li>

                        {/* for road map */}
                        <li>
                            <Link className="header-link" to="">
                                Road Map
                            </Link>
                        </li>
                        {/* for blog */}
                        <li>
                            <Link className="header-link" to="">
                                Blog
                            </Link>
                        </li>

                        {/* for twitter */}
                        <li>
                            <Link className="header-link header-icon" to="">
                                <IoLogoTwitter className="icon" />
                            </Link>
                        </li>
                        {/* for discord */}
                        <li>
                            <Link className="header-link header-icon" to="">
                                <SiDiscord className="icon" />
                            </Link>
                        </li>

                        {/* for connect wallet */}
                        <li>
                            <Link className="header-link" to="">
                                <button className="gradient-hover-btn connect-wallet-btn">
                                    Connect wallet
                                </button>
                            </Link>
                        </li>
                    </ul>
                </header>

                {/* banner text */}
                <section className=" hero-banner-text-contanier">
                    {/* eth img */}
                    <img
                        className="eth-img"
                        src="https://themegenix.net/nerko/wp-content/uploads/2022/12/ethereum-01.png"
                        alt=""
                    />
                    {/* btc img */}
                    <img
                        src="https://themegenix.net/nerko/wp-content/uploads/2022/12/bitcoin-01.png"
                        alt=""
                        className="btc-img"
                    />

                    {/* orange ball */}
                    <img
                        src="https://themegenix.net/nerko/wp-content/uploads/2022/12/circle-03.png"
                        alt=""
                        className="orange_ball"
                    />

                    {/* open sea link */}
                    <span className="view_opensea_span">
                        <a href="" className="open-in-opeansea_link">
                            <svg
                                className="tg-circle-text-path tg-animation-spin"
                                viewBox="0 0 100 100"
                                width="100"
                                height="100"
                            >
                                <defs>
                                    <path
                                        id="circle"
                                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                    ></path>
                                </defs>
                                <text fontSize="11.75">
                                    <textPath href="#circle">
                                        view in opensea • view in opensea •
                                    </textPath>
                                </text>
                            </svg>

                            <GoArrowUpRight className="view_icon" />
                        </a>
                    </span>

                    <div className="d-flex justify-content-between flex-wrap">
                        <div className="d-flex flex-column gap-3 align-items-center">
                            <h1 className="hero-text_header">
                                Supercharge your <br /> NFT Adventure
                            </h1>
                            <p>
                                Find the right NFT collections to buy within the
                                platform.
                            </p>
                            <button className="gradient-filled-btn view-in-opensea-btn">
                                <span>View in OPENSEA</span>
                                <GrLinkNext className="icon" />
                            </button>
                        </div>
                    </div>

                    <div className="nft-img-container">
                        <svg
                            style={{
                                top: "-17%",
                                position: "relative",
                                zIndex: "1",
                                width: "400px",
                                height: "400px",
                            }}
                            className="shape"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="#d000ed"
                                d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.7,-20.1C60.2,-2.3,69.9,11.8,70.8,27.3C71.7,42.9,63.8,59.9,50.6,64.4C37.3,68.9,18.6,60.8,-0.3,61.2C-19.3,61.6,-38.6,70.7,-53.5,66.7C-68.4,62.8,-78.9,45.9,-78.8,29.5C-78.7,13.2,-67.9,-2.7,-59.8,-16.8C-51.6,-31,-46,-43.3,-36.5,-50.9C-27,-58.4,-13.5,-61.1,3,-65.2C19.6,-69.4,39.1,-75.1,47.5,-67.2Z"
                                transform="translate(100 100)"
                            ></path>
                        </svg>

                        {/* dashed  */}
                        <img
                            src="https://themegenix.net/nerko/wp-content/themes/nerko/assets/img/others/blob-dashed-light.svg"
                            alt=""
                            className="white-dashed"
                        />

                        {/* cancel img */}
                        <img
                            src="https://themegenix.net/nerko/wp-content/uploads/2022/12/x.png"
                            alt=""
                            className="cancel-x"
                        />

                        {/* left side img */}
                        <img
                            src="https://themegenix.net/nerko/wp-content/uploads/2022/12/art_09.jpg"
                            alt=""
                            className="left-img"
                        />

                        {/* right image */}
                        <img
                            src="https://themegenix.net/nerko/wp-content/uploads/2022/12/art_06.jpg"
                            alt=""
                            className="right-img"
                        />
                    </div>
                </section>
            </section>

            {props.children}
        </main>
    );
};

export default Dashboard;

// prop validation
Dashboard.propTypes = {
    children: PropTypes.node,
};
