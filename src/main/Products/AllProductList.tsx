export type productType = {
  [key: string]: {
    name: string
    url: string
    price?: number
    category?: string
    subCategory?:string 
    description?:string
  }[]
}

export const productObj: productType = {
  "chocolate bar": [
    {
      name: "Black & White Bar",
      url: "/images/chocolatebar/Black & White Bar.png",
      price: 5,
      category:"c-1"
      
    },
    {
      name: "Cocoa Milk Choclate Bar",
      url: "/images/chocolatebar/Cocoa Milk Choclate Bar.png",
      price: 1,
    },
    {
      name: "Coconut Bar",
      url: "/images/chocolatebar/Coconut Bar.png",
      price: 5,
    },
    {
      name: "Dairy Kiss Cocoa",
      url: "/images/chocolatebar/Dairy Kiss Cocoa.png",
      price: 5,
    },
    {
      name: "Dark Milk Choclate Bar",
      url: "/images/chocolatebar/Dark Milk Choclate Bar.png",
      price: 5,
    },
    {
      name: "HazelNut Bar",
      url: "/images/chocolatebar/HazelNut Bar.png",
      price: 5,
    },
    {
      name: "Milk Choclate Bar",
      url: "/images/chocolatebar/Milk Choclate Bar.png",
      price: 5,
    },
    {
      name: "Milkies Milk Choclate Bar",
      url: "/images/chocolatebar/Milkies Milk Choclate Bar.png",
      price: 5,
    },
    {
      name: "Safari Park",
      url: "/images/chocolatebar/Safari Park.png",
      price: 2,
    },
    {
      name: "StrawBerry Bar",
      url: "/images/chocolatebar/StrawBerry Bar.png",
      price: 5,
    },
  ],
  "centerfilled chocolate": [
    {
      name: "TRUFFINS ab",
      url: "/images/centerfilledchocolate/TRUFFINS 30 PCS 1  5RS.png",
      price: 5,
      category:"Single Twist",
      subCategory: "Truffins"
    },
    {
      name: "Truffins 30 Pcs bc",
      url: "/images/centerfilledchocolate/TRUFFINS 30 PCS 5RS.png",
      price: 5,
      category:"Single Twist",
      subCategory: "Truffins"
    },
    {
      name: "Truffins 70 Pcs cd",
      url: "/images/centerfilledchocolate/TRUFFINS 70 PCS  5RS.png",
      price: 5,
      category:"Single Twist",
      subCategory: "Truffins"
    },
    {
      name: "Truffins 701 Pcs",
      url: "/images/centerfilledchocolate/TRUFFINS 70 PCS 1  5RS.png",
      price: 5,
       category:"Single Twist",
      subCategory: "muffins"

    },
    {
      name: "Truffins Container",
      url: "/images/centerfilledchocolate/TRUFFINS CONTAINER  5RS.png",
      price: 5,
      category:"Single Twist",
      subCategory: "muffins"

    },
    {
      name: "Truffle Blueberry 70 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE BLUBERRY 70 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Blue Berry Gift Box",
      url: "/images/centerfilledchocolate/TRUFFLE BLUE BERRY GIFT BOX 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Bueberry 150 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE BUEBERRY 150 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Container",
      url: "/images/centerfilledchocolate/TRUFFLE CONTAINER 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Gift Contaier",
      url: "/images/centerfilledchocolate/TRUFFLE GIFT CONTAIER 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Milk 70 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE MILK 70 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Milk 150 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE MILK 150 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Pistachio 70 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE PISTACHIO 70 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Pistachio 150 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE PISTACHIO 150 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Rajbhog 70 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE RAJBHOG 70 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Rajbhog 150 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE RAJBHOG 150 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Rajbhog Gift Box",
      url: "/images/centerfilledchocolate/TRUFFLE RAJBHOG GIFT BOX 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Strawberry 70 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE STRAWBERRY 70 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffle Strawberry 150 Pcs",
      url: "/images/centerfilledchocolate/TRUFFLE STRAWBERRY 150 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Truffles Container 2",
      url: "/images/centerfilledchocolate/TRUFFLES CONTAINER 2 5RS.png",
      price: 5,
    },
    {
      name: "Truffles Container",
      url: "/images/centerfilledchocolate/TRUFFLES CONTAINER 5RS.png",
      price: 5,
    },
    {
      name: "Truffles Blue Pouch",
      url: "/images/centerfilledchocolate/TRUFFLES BLUE POUCH 5RS.png",
      price: 5,
    },
    {
      name: "Truffles Milk Gift Box",
      url: "/images/centerfilledchocolate/TRUFFLES MILK GIFT BOX 5RS.png",
      price: 5,
    },
    {
      name: "Truffles Red Pouch",
      url: "/images/centerfilledchocolate/TRUFFLES RED POUCH 5RS.png",
      price: 5,
    },
    {
      name: "Truffles Strawberry Gift Box",
      url: "/images/centerfilledchocolate/TRUFFLES STRAWBERRY GIFT BOX 5RS.png",
      price: 5,
    },
    {
      name: "Truffles Pistachio Gift Box",
      url: "/images/centerfilledchocolate/TRUFFLES PISTACHIO GIFT BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Pistaccio 70Pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT PISTACGIO 70PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Pistachio 150Pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT PISTACHIO 150PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Rajbhog 70Pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT RAJBHOG 70PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Rajbhog 150Pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT RAJBHOG 150PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Strawberry 70Pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT STRAWBERRY 70PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Strawberry 150Pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT STRAWBERRY150PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Dlove Gold",
      url: "/images/centerfilledchocolate/DLOVE GOLD 5RS.png",
      price: 5,
    },
    {
      name: "Dlove Gold Pouch",
      url: "/images/centerfilledchocolate/DLOVE GOLD POUCH 5RS.png",
      price: 5,
    },
    {
      name: "Dlove Green Pouh",
      url: "/images/centerfilledchocolate/DLOVE GREEN POUH 5RS.png",
      price: 5,
    },
    {
      name: "Dlove Pink Pouch",
      url: "/images/centerfilledchocolate/DLOVE PINK POUCH 5RS.png",
      price: 5,
    },
    {
      name: "Dlove Pruple",
      url: "/images/centerfilledchocolate/DLOVE PURPULE 5RS.png",
      price: 5,
    },
    {
      name: "Dlove Red",
      url: "/images/centerfilledchocolate/DLOVE RED 5RS.png",
      price: 5,
    },
    {
      name: "Dlove Container",
      url: "/images/centerfilledchocolate/DLOVE CONTAINER 5RS.png",
      price: 5,
    },
    {
      name: "Dlove Green",
      url: "/images/centerfilledchocolate/DLOVE GREEN5RS.png",
      price: 5,
    },
    {
      name: "Emporio 70Pcs Box",
      url: "/images/centerfilledchocolate/EMPORIO 70PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Emporio Pouch",
      url: "/images/centerfilledchocolate/EMPORIO POUCH  5RS.png",
      price: 5,
    },
    {
      name: "Empirio Box",
      url: "/images/centerfilledchocolate/EMPIRIO BOX 5RS.png",
      price: 5,
    },
    {
      name: "Endon Gift Box",
      url: "/images/centerfilledchocolate/ENDON GIFT BOX 2RS.png",
      price: 2,
    },
    {
      name: "Endon Gift Box",
      url: "/images/centerfilledchocolate/ENDON GOFT BOX1 2RS.png",
      price: 2,
    },
    {
      name: "Endon Box 125 Pcs",
      url: "/images/centerfilledchocolate/ENDON BOX 125 PCS 2RS.png",
      price: 2,
    },
    {
      name: "Endon Box 125",
      url: "/images/centerfilledchocolate/ENDON BOX 125 PCS2 2RS.png",
      price: 2,
    },
    {
      name: "Ferola Milk",
      url: "/images/centerfilledchocolate/FEROLA MILK  5RS.png",
      price: 5,
    },
    {
      name: "Ferola Coconut",
      url: "/images/centerfilledchocolate/FEROLA COCONUT  5RS.png",
      price: 5,
    },
    {
      name: "Ferola Mango",
      url: "/images/centerfilledchocolate/FEROLA MANGO  5RS.png",
      price: 5,
    },
    {
      name: "Ferola Pistachio",
      url: "/images/centerfilledchocolate/FEROLA PISTACHIO  5RS.png",
      price: 5,
    },
    {
      name: "Ferola Strawberry",
      url: "/images/centerfilledchocolate/FEROLA STRAWBERRY  5RS.png",
      price: 5,
    },
    {
      name: "Glorious Chocolate",
      url: "/images/centerfilledchocolate/GLORIOUS CHOCOLATE 5RS.png",
      price: 5,
    },
    {
      name: "Glorious Gift Box",
      url: "/images/centerfilledchocolate/GLORIOUS GIFT BOX 5RS.png",
      price: 5,
    },
    {
      name: "Glorious Ccashewnut",
      url: "/images/centerfilledchocolate/GLORIOUS CCASHEWNUT 5RS.png",
      price: 5,
    },
    {
      name: "Glorious Gift Container",
      url: "/images/centerfilledchocolate/GLORIOUS GIFT CONTAINER 5RS.png",
      price: 5,
    },
    {
      name: "Glorious Gift Container",
      url: "/images/centerfilledchocolate/GLORIOUS GIFT CONTAINER (2) 5RS.png",
      price: 5,
    },
    {
      name: "Glorious Gift Container ",
      url: "/images/centerfilledchocolate/GLORIOUS GIFT CONTAINER (3) 5RS.png",
      price: 5,
    },
    {
      name: "Glorious Milk",
      url: "/images/centerfilledchocolate/GLORIOUS MILK 5RS.png",
      price: 5,
    },
    {
      name: "Glorious Pistachio",
      url: "/images/centerfilledchocolate/GLORIOUS PISTACHIO5RS.png",
      price: 5,
    },
    {
      name: "Glorious Raajbhog",
      url: "/images/centerfilledchocolate/GLORIOUS RAAJBHOG 5RS.png",
      price: 5,
    },
    {
      name: "Gold Box2Rs",
      url: "/images/centerfilledchocolate/GOLD BOX2RS 2.png",
      price: 2,
    },
    {
      name: "Gold Box2Rs",
      url: "/images/centerfilledchocolate/GOLD BOX2RS.png",
      price: 2,
    },
    {
      name: "Gold Gift Box",
      url: "/images/centerfilledchocolate/GOLD GIFT BOX 2RS.png",
      price: 2,
    },
    {
      name: "Gold Gift Box",
      url: "/images/centerfilledchocolate/GOLD GIFT BOX2RS 2.png",
      price: 2,
    },
    {
      name: "Gold Giftbox",
      url: "/images/centerfilledchocolate/GOLD GIFTBOX2RS.png",
      price: 2,
    },
    {
      name: "Gold Round Jar",
      url: "/images/centerfilledchocolate/GOLD ROUND JAR 2RS.png",
      price: 2,
    },
    {
      name: "Maxic Box 125 Pcs",
      url: "/images/centerfilledchocolate/MAXIC  BOX 125 PCS 2RS.png",
      price: 2,
    },
    {
      name: "United Gift Box",
      url: "/images/centerfilledchocolate/UNITED GIFT BOX 2RS.png",
      price: 2,
    },
    {
      name: "United Jar",
      url: "/images/centerfilledchocolate/UNITED JAR 2RS.png",
      price: 2,
    },
    {
      name: "Maxic Gift Box",
      url: "/images/centerfilledchocolate/MAXIC GIFT BOX 2RS.png",
      price: 2,
    },
    {
      name: "Stacy Box 70pcs ",
      url: "/images/centerfilledchocolate/STACY BOX 70PCS 2  5RS.png",
      price: 5,
    },
    {
      name: "Stacy Gift Box ",
      url: "/images/centerfilledchocolate/STACY BOX 70PCS 1.png",
      price: 5,
    },
    {
      name: "Stacy Minis Container",
      url: "/images/centerfilledchocolate/STACY MINIS CONTAINER 2RS.png",
      price: 2,
    },
    {
      name: "Belgiam Gift Box",
      url: "/images/centerfilledchocolate/BELGIAM GIFT BOX 2RS.png",
      price: 2,
    },
    {
      name: "Bliss White",
      url: "/images/centerfilledchocolate/BLISS WHITE 1RS.png",
      price: 1,
    },
    {
      name: "Bolivia Gift Box",
      url: "/images/centerfilledchocolate/BOLIVIA GIFT BOX 5RS.png",
      price: 5,
    },
    {
      name: "Brevo Gift Box",
      url: "/images/centerfilledchocolate/BREVO GIFT BOX 2RS.png",
      price: 2,
    },
    {
      name: "Chocobon Pistachio",
      url: "/images/centerfilledchocolate/CHOCOBON PISTACHIO  5RS.png",
      price: 5,
    },
    {
      name: "D Love Gold 150 Pcs",
      url: "/images/centerfilledchocolate/D LOVE GOLD 150 PCS 5RS.png",
      price: 5,
    },
    {
      name: "Delight Cashewnuut 150pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT CASHEWNUUT 150PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Merone 125pcs",
      url: "/images/centerfilledchocolate/MERONE 125PCS  2RS.png",
      price: 2,
    },
    {
      name: "Stacy Chocolate Container",
      url: "/images/centerfilledchocolate/STACY CHOCOLATE CANTAINER  5RS.png",
      price: 5,
    },
    {
      name: "Stacy Box",
      url: "/images/centerfilledchocolate/STACY BOX 70PCS 2  5RS.png",
      price: 5,
    },
    {
      name: "Stacy Gift Container",
      url: "/images/centerfilledchocolate/STACY GIFT CONTAINER  5RS.png",
      price: 5,
    },
    {
      name: "Stacy Minis Gift Box",
      url: "/images/centerfilledchocolate/STACY MINIS GIFT BOX 2RS.png",
      price: 2,
    },
    {
      name: "Belgium 125 Pcs",
      url: "/images/centerfilledchocolate/BELGIUM 125 PCS 2RS.png",
      price: 2,
    },
    {
      name: "Boliva Container",
      url: "/images/centerfilledchocolate/BOLIVA CONTAINER 5RS.png",
      price: 5,
    },
    {
      name: "Bolivia 150 Pcs Box",
      url: "/images/centerfilledchocolate/BOLIVIA150 PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Chocobon Coconut",
      url: "/images/centerfilledchocolate/CHOCOBON COCONUT  5RS.png",
      price: 5,
    },
    {
      name: "Chocobon Strawberry",
      url: "/images/centerfilledchocolate/CHOCOBON STRAWBERRY  5RS.png",
      price: 5,
    },
    {
      name: "Delight Blueberry 70pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT BLUEBERRY 70PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Mango 70pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT MANGO 70PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Stacy Box 70pcs",
      url: "/images/centerfilledchocolate/STACY BOX 70PCS  5RS.png",
      price: 5,
    },
    {
      name: "Stacy Container",
      url: "/images/centerfilledchocolate/STACY CONTAINER  5RS.png",
      price: 5,
    },
    {
      name: "Stacy Gift Box",
      url: "/images/centerfilledchocolate/STACY GIFT BOX  5RS.png",
      price: 5,
    },
    {
      name: "Stacy Minis 125 Pcs Box",
      url: "/images/centerfilledchocolate/STACY MINIS 125 PCS BOX 2RS.png",
      price: 2,
    },
    {
      name: "Bliss Dark",
      url: "/images/centerfilledchocolate/BLISS DARK 1RS.png",
      price: 1,
    },
    {
      name: "Bolivia 70 Pcs Box",
      url: "/images/centerfilledchocolate/BOLIVIA 70 PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Brevo 125 Pcs Box",
      url: "/images/centerfilledchocolate/BREVO 125 PCS BOX 2RS.png",
      price: 2,
    },
    {
      name: "Chocobon Mango",
      url: "/images/centerfilledchocolate/CHOCOBON MANGO  5RS.png",
      price: 5,
    },
    {
      name: "Cocos Truffles Box",
      url: "/images/centerfilledchocolate/COCOS  TRUFFLES BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Blueberry 150pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT BLUEBERRY 150PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Delight Mango 150pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT MANGO150PCS BOX 5RS.png",
      price: 5,
    },
    {
      name: "Bliss Strawberry",
      url: "/images/centerfilledchocolate/BLISS STRAWBERRY 1RS.png",
      price: 1,
    },
    {
      name: "Bolivia Container",
      url: "/images/centerfilledchocolate/BOLIVIA CONTAINER 5RS.png",
      price: 5,
    },
    {
      name: "Brevo Container",
      url: "/images/centerfilledchocolate/BREVO CONTAINER 2RS.png",
      price: 2,
    },
    {
      name: "Chocobon Milk",
      url: "/images/centerfilledchocolate/CHOCOBON MILK  5RS.png",
      price: 5,
    },
    {
      name: "Cocos Truffles Pouch",
      url: "/images/centerfilledchocolate/COCOS  TRUFFLES POUCH 5RS.png",
      price: 5,
    },
    {
      name: "Delight Cahewnut 70pcs Box",
      url: "/images/centerfilledchocolate/DELIGHT CAHEWNUT 70PCS BOX 5RS.png",
      price: 5,
    },
  ],
  "decorative chocolate": [
    {
      name: "Choco COAN 5RS",
      url: "/images/decorativechocolate/CHOCO COAN 5RS.png",
      price: 5,
    },
    {
      name: "Choco Tocon 10RS",
      url: "/images/decorativechocolate/CHOCO TOCON 10RS.png",
      price: 10,
    },
    {
      name: "Dr Teddy",
      url: "/images/decorativechocolate/DR TEDDY5RS.png",
      price: 5,
    },
    {
      name: "Dr Teddy",
      url: "/images/decorativechocolate/DR TEDDY25RS.png",
      price: 25,
    },
    {
      name: "King Kong",
      url: "/images/decorativechocolate/KING KONG 1 5RS.png",
      price: 5,
    },
    {
      name: "King Kong",
      url: "/images/decorativechocolate/KING KONG 5RS.png",
      price: 5,
    },
  ],
  "Crunchy chocolate": [
    {
      name: "Caranut Box",
      url: "/images/peanut chocolate/CARANUT BOX.png",
      price: 5,
    },
    {
      name: "Chokers Box",
      url: "/images/peanut chocolate/CHOKERS BOX.png",
      price: 5,
    },
    {
      name: "Chokers Container",
      url: "/images/peanut chocolate/CHOKERS CONTAINER.png",
      price: 5,
    },
    {
      name: "Oh Wow Big Box",
      url: "/images/peanut chocolate/OH WOW BIG BOX.png",
      price: 5,
    },
    {
      name: "Oh Wow Pouch",
      url: "/images/peanut chocolate/OH WOW POUCH.png",
      price: 2,
    },
    {
      name: "Oh Wow Small Box",
      url: "/images/peanut chocolate/OH WOW SMALL BOX.png",
      price: 2,
    },
    {
      name: "Oh Wow Standy Pouch",
      url: "/images/peanut chocolate/OH WOW STANDY POUCH.png",
      price: 2,
    },
  ],
  "nought bar": [
    {
      name: "BIG STAR",
      url: "/images/nugut bar/BIG STAR.png",
      price: 5,
    },
    {
      name: "BIG STAR BOX",
      url: "/images/nugut bar/BIG STAR BOX.png",
      price: 5,
    },
    {
      name: "TORNUTTE  BAR CONTAINER",
      url: "/images/nugut bar/TORNUTTE  BAR CONTAINER.png",
      price: 5,
    },
    {
      name: "BRACKERS BOX",
      url: "/images/nugut bar/BRACKERS BOX.png",
      price: 5,
    },
    {
      name: "TORNUTTE  BAR BOX",
      url: "/images/nugut bar/TORNUTTE  BAR BOX.png",
      price: 5,
    },
  ],

  "wafer rolls": [
    {
      name: "3 Stix Chocofills",
      url: "/images/wafffer rolls/3 stix chocofills.png",
      price: 5,
    },
    {
      name: "3 Stix Kraks",
      url: "/images/wafffer rolls/3 stix kraks.png",
      price: 5,
    },
    {
      name: "3stix Milk Fills",
      url: "/images/wafffer rolls/3stix milk fills.png",
      price: 5,
    },
    {
      name: "Big Roll Chocolate",
      url: "/images/wafffer rolls/big roll chocolate.png",
      price: 5,
    },
    {
      name: "Big Roll Dark",
      url: "/images/wafffer rolls/big roll dark.png",
      price: 5,
    },
    {
      name: "Big Roll Milk",
      url: "/images/wafffer rolls/big roll milk.png",
      price: 5,
    },
    {
      name: "Choco Stix",
      url: "/images/wafffer rolls/choco stix.png",
      price: 5,
    },
    {
      name: "Dark Stix",
      url: "/images/wafffer rolls/dark stix.png",
      price: 5,
    },
    {
      name: "Krack Stix",
      url: "/images/wafffer rolls/krack stix.png",
      price: 5,
    },
    {
      name: "Rolle Stix",
      url: "/images/wafffer rolls/rolle stix.png",
      price: 5,
    },
    {
      name: "Wafeer Roll",
      url: "/images/wafffer rolls/wafeer roll.png",
      price: 5,
    },
  ],
  toffee: [
    { name: "Goa Kaju", url: "/images/toffee/GOA KAJU 2RS.png", price: 2 },
    {
      name: "Kaju Butter Pouch",
      url: "/images/toffee/KAJU BUTTER POUCH RS1.png",
      price: 1,
    },
    {
      name: "Malai Kulfi",
      url: "/images/toffee/malai kulfi 2RS.png",
      price: 2,
    },
    {
      name: "Natural Pouch",
      url: "/images/toffee/NATURAL POUCH RS1.png",
      price: 1,
    },
    {
      name: "Pista Butter Jar",
      url: "/images/toffee/PISTA BUTTER JAR 1RS.png",
      price: 1,
    },
    {
      name: "Swiss Dairy Zupadi Box",
      url: "/images/toffee/SWISS DAIRY ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Almond Zupadi Box",
      url: "/images/toffee/ALMOND ZUPADI  BOX 1RS.png",
      price: 1,
    },
    {
      name: "Butterscotch Zupadi Box",
      url: "/images/toffee/BUTTER SCOTCH ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Cocolille Zupadi Box",
      url: "/images/toffee/COCOILLE ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Dry Fruit Selection Gift Box",
      url: "/images/toffee/dry fruit selection gift box 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Coconut Cream",
      url: "/images/toffee/eclair coconut cream 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Dark Jar",
      url: "/images/toffee/eclair dark jar 1RS.png",
      price: 1,
    },
    {
      name: "Eclair Hazelnut",
      url: "/images/toffee/eclair hazelnut 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Milk",
      url: "/images/toffee/eclair milk 2RS.png",
      price: 2,
    },
    {
      name: "Eclairs Gold Pouch",
      url: "/images/toffee/ECLAIRS GOLD POUCH RS1.png",
      price: 1,
    },
    { name: "Goa Almond", url: "/images/toffee/GOA ALMOND 2RS.png", price: 2 },
    {
      name: "Jewels Pouch",
      url: "/images/toffee/JEWELS POUCH RS1.png",
      price: 1,
    },
    {
      name: "Kaju Butter Zupadi Box",
      url: "/images/toffee/KAJU BUTTER ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Malai Kulfi Coconut Jar",
      url: "/images/toffee/MALAI KULFI COCONUT JAR RS1.png",
      price: 1,
    },
    {
      name: "Natural Zupadi Box",
      url: "/images/toffee/NATURAL ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Pista Butter Pouch",
      url: "/images/toffee/PISTA BUTTER POUCH RS1.png",
      price: 1,
    },
    {
      name: "Swissdairy Pouch",
      url: "/images/toffee/SWISSDAIRY POUCH RS1.png",
      price: 1,
    },
    {
      name: "Anjeer Zupadi Box",
      url: "/images/toffee/ANJEER ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Butterscotch Pouch",
      url: "/images/toffee/BUTTERSCOTCH POUCH RS1.png",
      price: 1,
    },
    {
      name: "Coconut Butter Pouch",
      url: "/images/toffee/COCONUT BUTTER POUCH R1.png",
      price: 1,
    },
    {
      name: "Dry Fruit Selection Gift Pouch",
      url: "/images/toffee/dry fruit selection gift pouch 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Coconut Cream Gift Box",
      url: "/images/toffee/eclair coconut cream gift box 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Dark Pouch",
      url: "/images/toffee/eclair dark pouch 1RS.png",
      price: 1,
    },
    {
      name: "Eclair Hazelnut Gift Box",
      url: "/images/toffee/eclair hazelnut gif box 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Milk Gift Box",
      url: "/images/toffee/eclair milk gift box 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Milk Jar",
      url: "/images/toffee/eclairs milk jar 1RS.png",
      price: 1,
    },
    {
      name: "Jewels Zupadi Box",
      url: "/images/toffee/JEWELS ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Kasata Creme Zupadi Box",
      url: "/images/toffee/KASATA CREME  ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Malai Kulfi Kesar Kaju Jar",
      url: "/images/toffee/MALAI KULFI KESAR KAJU JAR RS1.png",
      price: 1,
    },
    {
      name: "Pan Bites Zupadi Box",
      url: "/images/toffee/PAN BITES ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Pista Harvest",
      url: "/images/toffee/pista harvest 2RS.png",
      price: 2,
    },
    { name: "Trasure", url: "/images/toffee/Trasure 2RS.png", price: 2 },
    {
      name: "Butter Feast Pouch",
      url: "/images/toffee/BUTTER FEAST POUCH RS1.png",
      price: 1,
    },
    {
      name: "Caramal Honey",
      url: "/images/toffee/CARAMAL HONEY2RS.png",
      price: 2,
    },
    {
      name: "Coconut Butter Zupadi Box",
      url: "/images/toffee/COCONUT BUTTER ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Eclair Anjeer Cream",
      url: "/images/toffee/eclair anjeer cream 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Dark Cream",
      url: "/images/toffee/eclair dark cream 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Gold",
      url: "/images/toffee/ECLAIR GOLD 1RS.png",
      price: 1,
    },
    {
      name: "Eclair Hazelnut Jar",
      url: "/images/toffee/eclair hazelnut jar 1RS.png",
      price: 1,
    },
    {
      name: "Eclair Milk Pouch",
      url: "/images/toffee/eclair milk pouch 1RS.png",
      price: 1,
    },
    {
      name: "Eclairs Pouch",
      url: "/images/toffee/ECLAIRS POUCH RS1.png",
      price: 1,
    },
    {
      name: "Kaju Butter Jar",
      url: "/images/toffee/KAJU BUTTER JAR 1RS.png",
      price: 1,
    },
    {
      name: "Kesar Cream Zupadi Box",
      url: "/images/toffee/KESAR CREAM ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Natural Jar",
      url: "/images/toffee/NATURAL JAR 1RS.png",
      price: 1,
    },
    {
      name: "Pista Butter Box",
      url: "/images/toffee/PISTA BUTTER BOX 1RS.png",
      price: 1,
    },
    { name: "Soffitti", url: "/images/toffee/soffiti 2RS.png", price: 2 },
    {
      name: "Almond Gold Pouch",
      url: "/images/toffee/ALMOND GOLD POUCH RS1.png",
      price: 1,
    },
    {
      name: "Butter Feast Zupadi Box",
      url: "/images/toffee/BUTTER FEAST ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Choco Almond Grand",
      url: "/images/toffee/CHOCO ALMOND GRAND 2RS.png",
      price: 2,
    },
    {
      name: "Dairy Way Zupadi Box",
      url: "/images/toffee/DAIRY WAY ZUPADI BOX 1RS.png",
      price: 1,
    },
    {
      name: "Eclair Anjeer Cream Gift Box",
      url: "/images/toffee/eclair anjeer cream gift box 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Dark Cream Gift Box",
      url: "/images/toffee/eclair dark cream gift box 2RS.png",
      price: 2,
    },
    {
      name: "Eclair Gold Jar",
      url: "/images/toffee/ECLAIR GOLD JAR 1RS.png",
      price: 1,
    },
    {
      name: "Eclair Hazelnut Pouch",
      url: "/images/toffee/eclair hazelnut pouch 1RS.png",
      price: 1,
    },
    {
      name: "Eclairs Carmallos",
      url: "/images/toffee/eclairs carmallos 1RS.png",
      price: 1,
    },
    {
      name: "Eclairs Zupadi Box",
      url: "/images/toffee/ECLAIRS ZUPADI BOX 1RS.png",
      price: 1,
    },
  ],
  jelly: [
    {
      name: "Jellos Guvava Jelly Jar",
      url: "/images/jelly/JELLOS GUVAVA JELLY JAR.png",
      price: 1,
    },
    {
      name: "Jellos Guvava Jelly",
      url: "/images/jelly/JELLOS GUVAVA JELLY.png",
      price: 1,
    },
    {
      name: "Jellos Jelly Jar",
      url: "/images/jelly/JELLOS JELLY JAR.png",
      price: 1,
    },
    {
      name: "Jellos Jelly Jar1",
      url: "/images/jelly/JELLOS JELLY JAR1.png",
      price: 1,
    },
    { name: "Jellos Jelly", url: "/images/jelly/JELLOS JELLY.png", price: 1 },
    {
      name: "Jellos Mango Jelly Jar",
      url: "/images/jelly/JELLOS MANGO JELLY JAR.png",
      price: 1,
    },
    {
      name: "Jellos Mango Jelly",
      url: "/images/jelly/JELLOS MANGO JELLY.png",
      price: 1,
    },
    {
      name: "Jellos Mix Fruit Jelly Jar",
      url: "/images/jelly/JELLOS MIX FRUIT JELLY JAR.png",
      price: 1,
    },
    {
      name: "Jellos Mixfruit Jelly",
      url: "/images/jelly/JELLOS MIXFRUIT JELLY.png",
      price: 1,
    },
    {
      name: "Jellos Orange Jelly Jar",
      url: "/images/jelly/JELLOS ORANGE JELLY JAR.png",
      price: 1,
    },
    {
      name: "Jellos Orange Jelly",
      url: "/images/jelly/JELLOS ORANGE JELLY.png",
      price: 1,
    },
    {
      name: "Jellos Painapple Jelly",
      url: "/images/jelly/JELLOS PAINAPPLE JELLY.png",
      price: 1,
    },
    {
      name: "Strawberry Jelly Jar",
      url: "/images/jelly/STRAWBERRY JELLY JAR.png",
      price: 1,
    },
    {
      name: "Strawberry Jelly",
      url: "/images/jelly/STRAWBERRY JELLY.png",
      price: 1,
    },
  ],
  candy: [
    {
      name: "Beating Heart",
      url: "/images/candy/BEATING HEART RS1.png",
      price: 1,
    },
    {
      name: "Double Berry",
      url: "/images/candy/DOUBLE BERRY RS1.png",
      price: 1,
    },
    {
      name: "Double Coconut",
      url: "/images/candy/DOUBLE COCONUT RS1.png",
      price: 1,
    },
    {
      name: "Double Kaccha Aam",
      url: "/images/candy/DOUBLE KACCHA AAM RS1.png",
      price: 1,
    },
    {
      name: "Double Mango",
      url: "/images/candy/DOUBLE MANGO RS1.png",
      price: 1,
    },
    {
      name: "Double Orange",
      url: "/images/candy/DOUBLE ORANGE RS1.png",
      price: 1,
    },
    {
      name: "Double Guvava",
      url: "/images/candy/DOUBLE GUVAVA RS1.png",
      price: 1,
    },
    { name: "Double Paan", url: "/images/candy/DOUBLE PAAN RS1.png", price: 1 },
    {
      name: "Fruit Bon Bon",
      url: "/images/candy/FRUIT BON BON 50 PAISA.png",
      price: 0.5,
    },
    {
      name: "Fruits Candy",
      url: "/images/candy/FRUITS CANDY 50 PAISA.png",
      price: 0.5,
    },
    {
      name: "Imli Candy",
      url: "/images/candy/IMLI CANDY 50 PAISA.png",
      price: 0.5,
    },
    {
      name: "Juzy Candy",
      url: "/images/candy/JUZY CANDY 50 PAISA.png",
      price: 0.5,
    },
    {
      name: "Kacha Aam",
      url: "/images/candy/KACHA AAM 50 PAISA.png",
      price: 0.5,
    },
    {
      name: "Kacha Aam Candy",
      url: "/images/candy/KACHA AAM CANDY 50 PAISA.png",
      price: 0.5,
    },
    {
      name: "Kisszone Dark",
      url: "/images/candy/KISSZONE DARK RS1.png",
      price: 1,
    },
    { name: "Kisszone", url: "/images/candy/KISSZONE RS1.png", price: 1 },
    { name: "Kisszone01", url: "/images/candy/KISSZONE01 1RS.png", price: 1 },
    { name: "Kisszone02", url: "/images/candy/KISSZONE02 1RS.png", price: 1 },
    { name: "Londoncow", url: "/images/candy/LONDONCOW RS1.png", price: 1 },
    {
      name: "Mango Candy",
      url: "/images/candy/MANGO CANDY 50 PAISA.png",
      price: 0.5,
    },
    {
      name: "Orange Candy",
      url: "/images/candy/ORNGE CANDY 50 PAISA.png",
      price: 0.5,
    },
    { name: "Pan Meetha", url: "/images/candy/PAN MEETHA 1RS.png", price: 1 },
    { name: "Orage", url: "/images/candy/ORAGE RS1.png", price: 1 },
    {
      name: "Pineapple Candy",
      url: "/images/candy/PINEAPPLE CANDY 50 PAISA.png",
      price: 0.5,
    },
    {
      name: "Strawberry Candy",
      url: "/images/candy/STRAWBERRY CANDY 50 PAISA.png",
      price: 0.5,
    },
    { name: "Tambley", url: "/images/candy/TAMBLEY 1RS.png", price: 1 },
  ],

  lollipop: [
    {
      name: "Fru Go Pop",
      url: "/images/lollipop/Fru Go Pop.png",
      price: 5,
    },
    {
      name: "Frudoza",
      url: "/images/lollipop/Frudoza.png",
      price: 5,
    },
    {
      name: "Frugo Pop Jar",
      url: "/images/lollipop/Frugo Pop Jar.png",
      price: 5,
    },
    {
      name: "Frugo Pop Pouch",
      url: "/images/lollipop/Frugo Pop Pouch.png",
      price: 5,
    },
    {
      name: "Frutos Lollipop Jar",
      url: "/images/lollipop/FRUTOS LOLLIPOP JAR.png",
      price: 5,
    },
    {
      name: "Lolly Lollipop Pouch",
      url: "/images/lollipop/LOLLY LOLLIPOP  POUCH.png",
      price: 5,
    },
    {
      name: "Lolly Lollipop",
      url: "/images/lollipop/LOLLY LOLLIPOP.png",
      price: 5,
    },
  ],
}

export default productObj
