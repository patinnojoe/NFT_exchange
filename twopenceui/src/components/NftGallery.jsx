import { NftCard } from ".";
import { nftcards } from "../data/nftcards";

const NftGallery = () => {
    return (
        <div className="nft-gallery-conatiner">
            {nftcards.map((nftcard, index) => {
                return (
                    <NftCard
                        nftAuthor={nftcard.publishedBy}
                        nftName={nftcard.nftName}
                        nftPubDate={nftcard.publishedDate}
                        imageURL={nftcard.imageURL}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default NftGallery;

// const NftGallery = () => {
//     const proxyUrl = "cors-anywhere.herokuapp.com/";
//     const originalUrl = "https://api.opensea.io/api/v1/assets";

//     const modifiedURL = proxyUrl + originalUrl;
//     const [nfts, setNfts] = useState("");
//     useEffect(() => {
//         const fetchNfts = async () => {
//             try {
//                 const response = await axios.get(modifiedURL, {
//                     params: {
//                         order_direction: "desc",
//                         offset: "0",
//                         limit: "10", // Adjust the limit as needed
//                         order_by: "sale_count",
//                         api_key: "59e6e3daaf244a45b432e428a1bcc2ee",
//                     },
//                 });

//                 setNfts(response.data.assets);

//                 console.log(nfts);
//             } catch (error) {
//                 console.error("Error fetching NFTs:", error);
//             }
//         };

//         fetchNfts();
//     }, []);
// };
