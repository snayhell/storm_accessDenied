// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data

// Analytics Cards Data
export const cardsData = [
  {
    title: "Calorie Intake",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    
    png: UilUsdSquare,
    series: [
      {
        name: "Calorie Intake",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Excercise Progress",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Excercise Progress",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Week of Pregnancy",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    
    png: UilClipboardAlt,
    series: [
      {
        name: "Week of Pregnacy",
        data: [10, 20, 30, 40, 50, 60, 70],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "you look healthy",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "good to see you working for your health",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "This app has helped me alot and kept me fit throughout my pregnancy.",
    time: "2 hours ago",
  },
];
