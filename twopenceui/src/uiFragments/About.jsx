import { divider } from "../assets";
import { PiSelectionPlus } from "react-icons/pi";
import { GrSelect } from "react-icons/gr";

const About = () => {
    return (
        <section className="about-us-container">
            <img src={divider} alt="" className="divider divider_size" />
            <div className="platform_stat  ">
                {/* wallets connected */}
                <div className="fact_contaoiner">
                    <h2 className="text-gradient fact_count">4,000+</h2>
                    <p className="text-center fnt-12 clr-light">
                        Wallets Connected
                    </p>
                </div>

                {/* colections */}

                <div className="fact_contaoiner">
                    <h2 className="text-gradient fact_count">20,000+</h2>
                    <p className="text-center fnt-12 clr-light">
                        Collections Indexed every 5 mins.
                    </p>
                </div>

                {/* floor difference */}

                <div className="fact_contaoiner">
                    <h2 className="text-gradient fact_count">2.5&times;</h2>
                    <p className="text-center fnt-12 clr-light">
                        Difference in Floor & Estimated Value
                    </p>
                </div>
            </div>

            <img src={divider} alt="" className="divider divider_size" />

            <div className="about_platform_details">
                <h2 className="main-header text-center">About the Platform</h2>

                {/* container one */}
                <section className="singular_container">
                    {/* image */}
                    <div className="row g-5custom ">
                        <div className="col-lg-6">
                            <img
                                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-03.png"
                                alt=""
                                className="icon"
                            />
                        </div>

                        {/* text */}

                        <div className="col-lg-6">
                            <div className="d-flex flex-column gap-4">
                                <header className="content_container">
                                    <p className="text-gradient">
                                        CREATE AND INVEST
                                    </p>
                                    <h2 className="main-header ">
                                        Create your
                                        <br className="d-none d-lg-inline" />
                                        own NFT
                                    </h2>
                                    <span className=" clr-light sub_text">
                                        Multiple Chains, One Home. Stack up all
                                        your NFTs{" "}
                                        <br className="d-none d-lg-inline" />
                                        from across blockchains.
                                    </span>
                                </header>

                                <div className="details content_container">
                                    <div className="d-flex  flex-column">
                                        <h2 className="main-header fnt-40">
                                            4,500+
                                        </h2>
                                        <span className="clr-light sub_text">
                                            Collections Indexed every 5mins.
                                        </span>
                                    </div>

                                    <div className="d-flex  flex-column">
                                        <h2 className="main-header fnt-40">
                                            2.5x
                                        </h2>
                                        <span className="clr-light sub_text">
                                            Difference in Floor & Estimated NFT
                                            Value.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* container two */}
                <section className="singular_container container_2">
                    <div className="row g-5custom ">
                        {/* text */}
                        <div className="col-lg-6">
                            <div className="d-flex flex-column gap-4">
                                <header className="content_container">
                                    <p className="text-gradient">
                                        SYNC AND TRACK
                                    </p>
                                    <h2 className="main-header ">
                                        Multiple Chains,
                                        <br className="d-none d-lg-inline" />
                                        One Home
                                    </h2>
                                    <span className=" clr-light sub_text">
                                        We make it easy to Discover, Invest and
                                        manage all your{" "}
                                        <br className="d-none d-lg-inline" />{" "}
                                        NFTs at one place, looked up one of the
                                        more obscure.Find
                                        <br className="d-none d-lg-inline" />
                                        the right NFT collections to buy within
                                        the platform.
                                    </span>
                                </header>

                                <div className="select content_container">
                                    <div className="sub_content">
                                        <span className="icon_container">
                                            <PiSelectionPlus
                                                style={{
                                                    width: "30px",
                                                    height: "30px",
                                                }}
                                            />
                                        </span>
                                        <span className="fnt-14 fw-semi-bold">
                                            Collections Indexed{" "}
                                            <br className="d-none d-lg-inline" />
                                            every 5mins.
                                        </span>
                                    </div>

                                    <div className="sub_content">
                                        <span className="icon_container">
                                            <GrSelect
                                                style={{
                                                    width: "30px",
                                                    height: "30px",
                                                }}
                                            />
                                        </span>
                                        <span className="fnt-14 fw-semi-bold">
                                            Difference in Floor{" "}
                                            <br className="d-none d-lg-inline" />{" "}
                                            & Estimated Value
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* image */}
                        <div className="col-lg-6">
                            <img
                                src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-02.png"
                                alt=""
                                className="icon"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;
