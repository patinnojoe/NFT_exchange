import { Navigate } from "react-router-dom";
import { UseStateContext } from "../context/AuthContextProvider";
import { Dashboard } from "../layouts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DefaultLayout = () => {
    document.title = "Twopence - Home Page";

    // redirect to guest layout if token isn't set
    const { userToken } = UseStateContext();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const scrollPercentage =
                (scrollY / (documentHeight - windowHeight)) * 100;
            setScrollProgress(scrollPercentage);

            // Check if the scroll animation hasn't happened yet
            if (!hasScrolled && scrollPercentage > 10) {
                // Set the state to indicate that the scroll animation has happened
                setHasScrolled(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasScrolled]);

    if (!userToken) {
        return <Navigate to="/guest" />;
    }

    return (
        <Dashboard>
            <section className="app-page-inner">
                <section className="home_page_sec">
                    <div className="how_to_min_div">
                        <motion.h3
                            className="main-header"
                            initial={{ opacity: 0, translateY: 50 }}
                            animate={{
                                opacity: hasScrolled ? 1 : scrollProgress / 100,
                                translateY: hasScrolled
                                    ? 0
                                    : 20 * (1 - scrollProgress / 100),
                            }}
                            transition={{ duration: 0.7 }}
                        >
                            How To Mint
                        </motion.h3>

                        {/* how to mint card */}
                        <div className="how-to-min-card">
                            <img
                                src="https://themegenix.net/nerko/wp-content/uploads/2022/12/circle-01.png"
                                alt=""
                                className="tiny-ball-top"
                            />
                            <img
                                src="https://themegenix.net/nerko/wp-content/uploads/2022/12/circle-02.png"
                                alt=""
                                className="purple-ball-bottom"
                            />
                            <img
                                src="https://themegenix.net/nerko/wp-content/uploads/2022/12/x.png"
                                alt=""
                                className="cancel-x-right"
                            />
                            <div className="row g-3custom justify-content-center">
                                <div className="col-lg-7">
                                    <div className="row g-5custom">
                                        {/* connect wallet */}
                                        <div className="col-lg-6">
                                            <div className="mint_card">
                                                <div className="content">
                                                    <img
                                                        src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-01.png"
                                                        alt=""
                                                        className="icon"
                                                    />
                                                    <div>
                                                        <h3>
                                                            Connect your wallet
                                                        </h3>
                                                        <span className="fnt-14 clr-light">
                                                            Use Trust Wallet,
                                                            Metamask or any
                                                            wallet to connect to
                                                            the app.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* select quantity */}

                                        <div className="col-lg-6">
                                            <div className="mint_card">
                                                <div className="content">
                                                    <img
                                                        src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-02.png"
                                                        alt=""
                                                        className="icon"
                                                    />
                                                    <div>
                                                        <h3>
                                                            Select your quantity
                                                        </h3>
                                                        <span className="fnt-14 clr-light">
                                                            Use Trust Wallet,
                                                            Metamask or any
                                                            wallet to connect to
                                                            the app.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* confirm transaction */}
                                        <div className="col-lg-6">
                                            <div className="mint_card">
                                                <div className="content">
                                                    <img
                                                        src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-03.png"
                                                        alt=""
                                                        className="icon"
                                                    />
                                                    <div>
                                                        <h3>
                                                            Confirm transaction
                                                        </h3>
                                                        <span className="fnt-14 clr-light">
                                                            Earn ETH and BIT for
                                                            all your NFTs that
                                                            you sell on our
                                                            marketplace.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* recewive your NFT */}
                                        <div className="col-lg-6">
                                            <div className="mint_card">
                                                <div className="content">
                                                    <img
                                                        src="https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/mint-04.png"
                                                        alt=""
                                                        className="icon"
                                                    />
                                                    <div>
                                                        <h3>
                                                            Receive your NFTs
                                                        </h3>
                                                        <span className="fnt-14 clr-light">
                                                            Latin professor at
                                                            Hampden-Sydney
                                                            College in Virginia.
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Dashboard>
    );
};

export default DefaultLayout;
