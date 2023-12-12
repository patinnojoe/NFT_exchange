import { tigerNft } from "../assets";

const NftCard = (props) => {
    return (
        <div className="nft-card position-relative">
            <div className="card-overlay"></div>
            <img src={tigerNft} alt="" className="nft-img" />
            <p className="nft-author">{props.nftAuthor}</p>
            <div className="nft-head-details">
                <p className="nft-name">{props.nftName}</p>
                <p className="nft-pub-date">{props.nftPubDate}</p>
            </div>
        </div>
    );
};

// prop validation

export default NftCard;
