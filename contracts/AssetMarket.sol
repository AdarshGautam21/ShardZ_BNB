pragma solidity ^0.8.20;

import "./Asset.sol";
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Market {

    address[] private _assets;

    function createcontent(string memory _name, string memory _symbol) public returns (address) {
        Asset asset = new Asset(_name, _symbol);
        _assets.push(address(asset));
        return address(asset);
    }

    function mintasset(address assetAddress, uint amount) public {
        Asset asset = Asset(assetAddress);
        asset.mint(msg.sender, amount);
        asset.approve(address(this), amount);
    }


    enum Listingstatus {
        Active,
        Sold,
        Cancelled
    }

    struct Listing {
        Listingstatus status;
        address seller;
        Asset asset;
        uint amount;
        uint price;
    }

    uint private _listingId = 0;
    mapping(uint => Listing) private _listings;

    function listasset(address assetAddress, uint amount, uint price) public {
        Asset asset = Asset(assetAddress);
        require(asset.transferFrom(msg.sender,address(this), amount), "Listing Failed");
        Listing memory listing = Listing(Listingstatus.Active, msg.sender, asset, amount, price);
        _listings[_listingId] = listing;
        _listingId++;
    }

    function getListing(uint listingId) public view returns (Listing memory) {
        return _listings[listingId];
    }

    function buyasset(uint listingId, uint numcoins) external payable {
        Listing storage listing = _listings[listingId];
        require(listing.status == Listingstatus.Active, "Listing is not active");
        require(msg.sender != listing.seller, "Seller can't be the buyer");
        require(listing.amount >= numcoins, "Not enough tokens available");
        require(msg.value >= listing.price * numcoins, "Insufficient payment");

        Asset asset = listing.asset;
        asset.transfer(msg.sender, numcoins);
        payable(listing.seller).transfer(listing.price * numcoins);
        listing.amount -= numcoins;

        if (listing.amount == 0) {
            listing.status = Listingstatus.Sold;
        }
        _listings[listingId] = listing;
    }

    function cancel(uint listingId) public {
        Listing storage listing = _listings[listingId];
        require(msg.sender == listing.seller, "Only seller can cancel listing");
        require(listing.status == Listingstatus.Active, "Listing is not active");
        listing.status = Listingstatus.Cancelled;
        Asset asset = listing.asset;
        asset.transfer(msg.sender, listing.amount);
    }
}
