import React from "react";
import Footer from "../components/Shared/Footer";
import HomeHeader from "./Home/Home/HomeHeader/HomeHeader";
import { Box, Flex } from "@chakra-ui/react";
import "../css/vaccine.css";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";

import { useRef, useState, useEffect } from "react";
const data = {
  search_metadata: {
    id: "651d47f7f55d77990754e186",
    status: "Success",
    json_endpoint:
      "https://serpapi.com/searches/86de0d039ddcdf90/651d47f7f55d77990754e186.json",
    created_at: "2023-10-04 11:09:43 UTC",
    processed_at: "2023-10-04 11:09:43 UTC",
    google_local_url:
      "https://www.google.com/search?q=infant+vaccination+center+in+khar+west&hl=en&gl=us&tbm=lcl",
    raw_html_file:
      "https://serpapi.com/searches/86de0d039ddcdf90/651d47f7f55d77990754e186.html",
    total_time_taken: 2.31,
  },
  search_parameters: {
    engine: "google_local",
    q: "infant vaccination center in khar west",
    google_domain: "google.com",
    hl: "en",
    gl: "us",
    device: "desktop",
  },
  local_results: [
    {
      position: 1,
      rating: 4.8,
      reviews_original: "(29)",
      reviews: 29,
      place_id: "12433936672895801625",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12433936672895801625&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5U05JimdUHFJyRcSaKHZ1Bo",
      provider_id: "/g/11m2bzj79f",
      gps_coordinates: {
        latitude: 19.0792973,
        longitude: 72.8529468,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Dr.+Arvind+Bhanumurthy+:+New+Born+Checkup+%7C+Child+Vaccination+Centre+%7C+Child+Specialist+%7C+Child+Doctor+%7C+Children+Specialist+%7C+Children+General+Doctor+%7C+Child+Care+Clinic+%7C+Pediatrician+in+Santacruz+East+%26+Vile+Parle+East,+Shop-12%2FA,+C-Wing,+Legend+Aprtment,+behind+Vakola+Church,+Santacruz+East,+Mumbai,+Maharashtra+400055,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c92e5808eaef:0xac8e3786b3a81919?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIAhAA&hl=en&gl=us",
      },
      title:
        "Dr. Arvind Bhanumurthy : New Born Checkup | Child Vaccination Centre | Child Specialist | Child Doctor | Children Specialist | Children General Doctor | Child Care Clinic | Pediatrician in Santacruz East & Vile Parle East",
      type: "Child health care centre",
      address: "Shop-12/A, C-Wing, Legend Aprtment, behind Vakola Church",
      phone: "+91 99306 69297",
      hours: "Closed ⋅ Opens 6 PM",
    },
    {
      position: 2,
      rating: 4.5,
      reviews_original: "(127)",
      reviews: 127,
      description: '"Very nice vaccination center it\'s my favorite"',
      place_id: "4285435523523896370",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=4285435523523896370&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5W0ft39Dk5ICEfi_Hr2L12x",
      provider_id: "/g/11qszgb3kv",
      gps_coordinates: {
        latitude: 19.067974,
        longitude: 72.8632239,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//BKC+JUMBO+VACCINATION+CENTER,+Kolivery+Village,+MMRDA+Area,+Kalina,+Santacruz+East,+Mumbai,+Maharashtra+400098,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c909deb81337:0x3b78ece7477b6432?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIFRAA&hl=en&gl=us",
      },
      title: "BKC JUMBO VACCINATION CENTER",
      type: "Health consultant",
      address: "Mumbai, Maharashtra, India",
    },
    {
      position: 3,
      rating: 5,
      reviews_original: "(1)",
      reviews: 1,
      place_id: "9426165282329857946",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=9426165282329857946&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5Xs_N5FTKkjpIwoy-oV21hy",
      provider_id: "/g/11bwymfbfh",
      gps_coordinates: {
        latitude: 19.065791,
        longitude: 72.861104,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Nurture+Child+Clinic,+Shop+No.4,+Royal+Accord+Building,Tarun,+Bharat+Nagar+Rd,+Andheri+East,+Mumbai,+Maharashtra+400099,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c8e67a720efb:0x82d07761df640f9a?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIAxAA&hl=en&gl=us",
      },
      title: "Nurture Child Clinic",
      type: "Medical clinic",
      address: "Shop No.4, Royal Accord Building,Tarun, Bharat Nagar Rd",
      phone: "+91 90040 48961",
      hours: "Open ⋅ Closes 9 PM",
    },
    {
      position: 4,
      rating: 4,
      reviews_original: "(115)",
      reviews: 115,
      description:
        '"... done by CNH team in helping organisations getting vaccinated."',
      place_id: "1023599818726725273",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=1023599818726725273&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5VYfe2Jj_BzJDNliUgjBeN6",
      provider_id: "/g/11bzt5b7bk",
      gps_coordinates: {
        latitude: 19.070304699999998,
        longitude: 72.83956529999999,
      },
      links: {
        website: "http://connectandheal.com/",
        directions:
          "https://www.google.com/maps/dir//Connect+and+Heal+Primary+Care+Pvt+Ltd,+401+Multilink+House,+Rd+Number+3,+opposite+OYO+TOWN+HOUSE+Hotel,+Ram+Krishna+Nagar,+Khar+West,+Mumbai,+Maharashtra+400052,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c90bc1a1c0b9:0xe348e9ca35c5699?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIExAA&hl=en&gl=us",
      },
      title: "Connect and Heal Primary Care Pvt Ltd",
      type: "Corporate office",
      address:
        "401 Multilink House, Rd Number 3, opposite OYO TOWN HOUSE Hotel",
      phone: "+91 22 6223 1147",
      hours: "Open ⋅ Closes 6 PM",
    },
    {
      position: 5,
      place_id: "2489874360623636860",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=2489874360623636860&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5XFJU8qJdTGkeLOO_AgOrFl",
      provider_id: "/g/11mw3m_gcx",
      gps_coordinates: {
        latitude: 19.2289545,
        longitude: 72.8521641,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Little+Angel's+Child+Care+and+Vaccination+centre,+SIDDHIVINAYAK+NURSING+HOME,+303,+VINI+ELEGANCE,+Lokmanya+Tilak+Rd,+Borivali+West,+Mumbai,+Maharashtra+400092,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7b16bbfeded15:0x228dcf8a0053217c?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIEhAA&hl=en&gl=us",
      },
      title: "Little Angel's Child Care and Vaccination centre",
      reviews_original: "No reviews",
      type: "Pediatrician",
      address:
        "SIDDHIVINAYAK NURSING HOME, 303, VINI ELEGANCE, Lokmanya Tilak Rd",
      phone: "+91 22 2833 9092",
      hours: "Closes soon ⋅ 5 PM",
    },
    {
      position: 6,
      rating: 5,
      reviews_original: "(18)",
      reviews: 18,
      place_id: "12520172742303969005",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12520172742303969005&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5W-Ghaxk7vwvOCI6YgInSgR",
      provider_id: "/g/11tcr2zbhb",
      gps_coordinates: {
        latitude: 19.0276565,
        longitude: 72.84137249999999,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Dr+Samir+%26+Dr+Nandini+Shinde%E2%80%99s+Children%E2%80%99s+Clinic+:+Child+%26+Newborn+Specialist+%7C+Child+Vaccination+%7C+Pediatrician+in+Dadar,+Shop+no.5,Parekh+Mahal,L+J+Road,+Dadar+(W,+Shivaji+Park,+Mumbai,+Maharashtra+400016,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7cfa852f27487:0xadc096c63f8e6eed?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIERAA&hl=en&gl=us",
      },
      title:
        "Dr Samir & Dr Nandini Shinde’s Children’s Clinic : Child & Newborn Specialist | Child Vaccination | Pediatrician in Dadar",
      type: "Children Policlinic",
      address: "Shop no.5,Parekh Mahal,L J Road, Dadar (W",
      phone: "+91 98201 76086",
      hours: "Closed ⋅ Opens 7 PM",
    },
    {
      position: 7,
      rating: 4.1,
      reviews_original: "(422)",
      reviews: 422,
      description: '"Good Center To Get Covid Vaccination Center Nice Work"',
      place_id: "16337451139175628821",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=16337451139175628821&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5XOIpyrEDHHSQc9CoC0IJa3",
      provider_id: "/g/11b6hnkw7p",
      gps_coordinates: {
        latitude: 19.1033069,
        longitude: 72.87687260000001,
      },
      links: {
        website: "https://www.ihpoe.mohfw.gov.in/apho_mumbai.php",
        directions:
          "https://www.google.com/maps/dir//Airport+Health+Organization,+Mumbai+Yellow+fever+vaccination+center,+Nest+to+JW+Marriott+Hotel,+Chhatrapati+Shivaji+Maharaj+Int'l+Airport+Rd,+Mumbai,+Maharashtra+400099,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c86a30a40461:0xe2ba494065dd4015?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIEBAA&hl=en&gl=us",
      },
      title:
        "Airport Health Organization, Mumbai Yellow fever vaccination center",
      type: "Travel clinic",
      address:
        "Nest to JW Marriott Hotel, Chhatrapati Shivaji Maharaj Int'l Airport Rd",
      phone: "+91 22 2839 2429",
      hours: "Closed ⋅ Opens 10 AM Fri",
    },
    {
      position: 8,
      rating: 4.6,
      reviews_original: "(49)",
      reviews: 49,
      description:
        '"doctor Aditi Shah is the best child doctor in the world , my 2 month ..."',
      place_id: "11792524516774304320",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=11792524516774304320&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5XAEyua3NwNvR8tBa-agmU-",
      provider_id: "/g/11f4vg_chz",
      gps_coordinates: {
        latitude: 19.082551600000002,
        longitude: 72.8375985,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Small+Wonders+Children's+Clinic:+Dr.+Aditi+Shah,+Shiv+Hem+Building,+Ground+floor+Tilak+Road,+Opp+Asha+Parekh+Hospital,+Santacruz+West,+Mumbai,+Maharashtra+400054,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9a79798e4a5:0xa3a776918b6ada40?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIDxAA&hl=en&gl=us",
      },
      title: "Small Wonders Children's Clinic: Dr. Aditi Shah",
      type: "Pediatrician",
      address:
        "Shiv Hem Building, Ground floor Tilak Road, Opp Asha Parekh Hospital",
      phone: "+91 98202 60136",
      hours: "Closed ⋅ Opens 6 PM",
    },
    {
      position: 9,
      place_id: "7528069229402279258",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=7528069229402279258&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5Uz0jzaNWOqZAZzpi0ioNdI",
      provider_id: "/g/1pp2tx19j",
      gps_coordinates: {
        latitude: 19.149333199999997,
        longitude: 72.84903249999999,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//People's+Clinic+%26+Vaccination+Center,+Shop+No-1-A,+Building+No-R-3,+RNA+Plaza,+MMRDA+Colony,+Oshiwara+Goregaon,+Ram+Mandir+Rd,+Somani+Gram,+Goregaon+West,+Mumbai,+Maharashtra+400104,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7b6350edb67bd:0x6879131427124d5a?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIDBAA&hl=en&gl=us",
      },
      title: "People's Clinic & Vaccination Center",
      reviews_original: "No reviews",
      type: "Medical clinic",
      address:
        "Shop No-1-A, Building No-R-3, RNA Plaza, MMRDA Colony, Oshiwara Goregaon, Ram Mandir Rd",
      phone: "+91 80978 69378",
      hours: "Open ⋅ Closes 6 PM",
    },
    {
      position: 10,
      rating: 4.3,
      reviews_original: "(118)",
      reviews: 118,
      description:
        '"He is next to God for babies. Soft spoken, handling baby like flowers ..."',
      place_id: "12023291962006052360",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12023291962006052360&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5URuVa9xZEp-QRj_OCqjvGw",
      provider_id: "/g/1th85lg2",
      gps_coordinates: {
        latitude: 19.0588452,
        longitude: 72.8364563,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Dr.+Ravindra+Chittal,+Speciality+Clinic,+Geetanjali+CHS,+Opp+Siddharth+Hotel,+Swami+Vivekananda+Rd,+Bandra+West,+Mumbai,+Maharashtra+400050,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c938b736e745:0xa6db50565a2e1e08?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIDRAA&hl=en&gl=us",
      },
      title: "Dr. Ravindra Chittal",
      type: "Pediatrician",
      address:
        "Speciality Clinic, Geetanjali CHS, Opp Siddharth Hotel, Swami Vivekananda Rd",
      phone: "+91 22 2640 8641",
      hours: "Closed ⋅ Opens 10 AM Thu",
    },
    {
      position: 11,
      rating: 4.6,
      reviews_original: "(465)",
      reviews: 465,
      description: '"Its wonder full clinic in mumbai"',
      place_id: "18117035038173273812",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=18117035038173273812&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5UjuDhlcCescj1GIiosgQzd",
      provider_id: "/g/1trswgff",
      gps_coordinates: {
        latitude: 19.067535499999998,
        longitude: 72.8371305,
      },
      links: {
        website:
          "https://clinics.drbatras.com/homeopathy-clinic-khar-pali-road-mumbai-86686/Home?utm_source=locator&utm_medium=googleplaces",
        directions:
          "https://www.google.com/maps/dir//Dr+Batra%E2%80%99s+Homeopathy+Clinic,+Office+No+3+%26+4,+1st+Flr,+Agnelo+House+Swami+Vivekananda+Road,+Khar+Pali+Rd,+opposite+Rajasthan+Hotel,+Mumbai,+Maharashtra+400052,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9103385ee4d:0xfb6ca361099f9ed4?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQICRAA&hl=en&gl=us",
      },
      title: "Dr Batra’s Homeopathy Clinic",
      type: "Homeopath",
      address:
        "Office No 3 & 4, 1st Flr, Agnelo House Swami Vivekananda Road, Khar Pali Rd, opposite Rajasthan Hotel",
      phone: "+91 70450 06060",
      hours: "Open ⋅ Closes 8 PM",
    },
    {
      position: 12,
      rating: 3,
      reviews_original: "(2)",
      reviews: 2,
      place_id: "914427876877025034",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=914427876877025034&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5U8N9OQKMNiYNsa_8V0c5JQ",
      provider_id: "/g/11g0gxgs4q",
      gps_coordinates: {
        latitude: 19.0308681,
        longitude: 73.0220409,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Child+Care+%26+Vaccination+Center,+11,+Ring+Rd+1,+Sector+21,+Nerul,+Navi+Mumbai,+Maharashtra+400706,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c39d08aa27e3:0xcb0b34f25f83f0a?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIChAA&hl=en&gl=us",
      },
      title: "Child Care & Vaccination Center",
      type: "Child health care centre",
      address: "Navi Mumbai, Maharashtra, India",
    },
    {
      position: 13,
      rating: 4,
      reviews_original: "(64)",
      reviews: 64,
      description:
        '"... down kids after vaccination, always kind and very polite, smiling."',
      place_id: "16482122793107974858",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=16482122793107974858&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5VIKx2OJle2IvKd3HKVsOpv",
      provider_id: "/g/1pp2tzkyx",
      gps_coordinates: {
        latitude: 19.0545605,
        longitude: 72.8273553,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//3R3G%2BRWH+Kiddie+Ville+Children's+Clinic,+Hill+Rd,+Opposite+Holy+Family+Hospital,+Bandra+West,+Mumbai,+Maharashtra+400050,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9407d07e81d:0xe4bc435ab391eaca?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQICxAA&hl=en&gl=us",
      },
      title: "Kiddie Ville Children's Clinic",
      type: "Walk-in clinic",
      address: "3R3G+RWH, Hill Rd, Opposite Holy Family Hospital",
      phone: "+91 22 2641 8151",
      hours: "Open ⋅ Closes 7:30 PM",
    },
    {
      position: 14,
      rating: 5,
      reviews_original: "(10)",
      reviews: 10,
      place_id: "17519056214493978147",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=17519056214493978147&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5Xx-5SccqkLtprC2JDlb8xI",
      provider_id: "/g/11pl153k71",
      gps_coordinates: {
        latitude: 19.0709275,
        longitude: 72.8981293,
      },
      links: {
        website:
          "https://dr-alpa-bhosale-pediatrician-neonatologist.business.site/?utm_source=gmb&utm_medium=referral",
        directions:
          "https://www.google.com/maps/dir//Dr+Alpa+Bhosale+Child+Care+Clinic+-+Best+Pediatrician+in+Tilak+Nagar,+Baby+Vaccination,+Child+Specialist+in+Chembur,+Mumbai,+VRUSHALI+VILLA,+Chembur+West,+Tilak+Nagar,+Kurla,+Mumbai,+Maharashtra+400089,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c7f4b35a3145:0xf32030cea1035e23?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQICBAA&hl=en&gl=us",
      },
      title:
        "Dr Alpa Bhosale Child Care Clinic - Best Pediatrician in Tilak Nagar, Baby Vaccination, Child Specialist in Chembur, Mumbai",
      type: "Pediatrician",
      address: "VRUSHALI VILLA",
      phone: "+91 70214 54519",
      hours: "Open 24 hours",
    },
    {
      position: 15,
      rating: 4.7,
      reviews_original: "(495)",
      reviews: 495,
      description:
        '"I have been taking my cherry here from start for vaccination and ..."',
      place_id: "9197933618648167557",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=9197933618648167557&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5X83vTf4nQAjocX2hUz_Pap",
      provider_id: "/g/11gfj_xdyf",
      gps_coordinates: {
        latitude: 19.0695938,
        longitude: 72.8428942,
      },
      links: {
        website:
          "https://dr-ukales-veterinary-pet-health-clinic.business.site/?utm_source=gmb&utm_medium=referral",
        directions:
          "https://www.google.com/maps/dir//Dr.+Ukale's+Veterinary+Pet+Health+Clinic,+Ajmeri+Chawl,+Golibar+Rd,+next+to+Bharat+Desi+Bar,+Jawahar+Nagar,+Khar+East,+Mumbai,+Maharashtra+400051,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9ca7b8e3fb1:0x7fa59fe4b725b485?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIFBAA&hl=en&gl=us",
      },
      title: "Dr. Ukale's Veterinary Pet Health Clinic",
      type: "Veterinarian",
      address: "Ajmeri Chawl, Golibar Rd, next to Bharat Desi Bar",
      phone: "+91 90299 38325",
      hours: "Open ⋅ Closes 11:30 PM",
    },
    {
      position: 16,
      rating: 4.8,
      reviews_original: "(6)",
      reviews: 6,
      place_id: "715552982409070186",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=715552982409070186&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5UOen8JG_GJ-q5b9gKtOyCP",
      provider_id: "/g/11rp217fxj",
      gps_coordinates: {
        latitude: 19.113995799999998,
        longitude: 72.9041462,
      },
      links: {
        website:
          "https://dr-mythilis-little-shark-clinic.business.site/?utm_source=gmb&utm_medium=referral",
        directions:
          "https://www.google.com/maps/dir//Baby+Shark+Children's+Clinic+:+Pediatrician,+Child+Specialist,+Vaccination+Centre,+New+Born+Care+In+Powai,+Crystal+centre,+Raheja+Vihar,+Mumbai,+Maharashtra+400056,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c97292ed0ebf:0x9ee27a57676c66a?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIBxAA&hl=en&gl=us",
      },
      title:
        "Baby Shark Children's Clinic : Pediatrician, Child Specialist, Vaccination Centre, New Born Care In Powai",
      type: "Pediatrician",
      address: "Crystal centre",
      phone: "+91 91674 70851",
      hours: "Opens soon ⋅ 5 PM",
    },
    {
      position: 17,
      rating: 4.9,
      reviews_original: "(15)",
      reviews: 15,
      description: '"My child vivan is safe in he\'s hands"',
      place_id: "12720650202286530946",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12720650202286530946&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5XNcMcjebz-HTAymVcvSHq4",
      provider_id: "/g/11jrn2qqfb",
      gps_coordinates: {
        latitude: 19.163419599999997,
        longitude: 72.9972384,
      },
      links: {
        website:
          "https://chaitanya-childrens-clinic-vaccination-centre.business.site/?utm_source=gmb&utm_medium=referral",
        directions:
          "https://www.google.com/maps/dir//Chaitanya+Children's+clinic+%26+vaccination+centre,+Row+house+no+20+Jhulelal+society,+Namdev+Krishna+Rd,+near+Domino%E2%80%99s+pizza,+Sector+2,+Airoli,+Navi+Mumbai,+Maharashtra+400708,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7bfe3d3774e6d:0xb088d3f64b4a2182?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIBhAA&hl=en&gl=us",
      },
      title: "Chaitanya Children's clinic & vaccination centre",
      type: "Medical clinic",
      address: "Navi Mumbai, Maharashtra, India",
      phone: "+91 86898 96888",
      hours: "Closed ⋅ Opens 6 PM",
    },
    {
      position: 18,
      rating: 4.7,
      reviews_original: "(3.2K)",
      reviews: 3200,
      description: '"Covid vaccine center amazing experience friendly staff"',
      place_id: "16484029363181141330",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=16484029363181141330&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5XcVV09Q-OeDqELfWAy1QAg",
      provider_id: "/g/1vhkh__k",
      gps_coordinates: {
        latitude: 19.0855574,
        longitude: 72.8378872,
      },
      links: {
        website: "https://suryahospitals.com/santacruz",
        directions:
          "https://www.google.com/maps/dir//Surya+Hospitals,+Mangal+Ashirwad,+101+-102,+Swami+Vivekananda+Rd,+Santacruz,+Mumbai,+W,+Mumbai,+Maharashtra+400054,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9a669e34eef:0xe4c3095ea3853d52?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIBRAA&hl=en&gl=us",
      },
      title: "Surya Hospitals",
      type: "Children's hospital",
      address: "Mangal Ashirwad, 101 -102, Swami Vivekananda Rd",
      phone: "+91 88288 28100",
      hours: "Open 24 hours",
    },
    {
      position: 19,
      rating: 4.8,
      reviews_original: "(376)",
      reviews: 376,
      description: '"first for my children & now for my grandchildren."',
      place_id: "14877384121489771204",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=14877384121489771204&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5U5MXAP1uKvFwyi9tCfrcQ-",
      provider_id: "/g/1tfdx9sn",
      gps_coordinates: {
        latitude: 19.058887,
        longitude: 72.848209,
      },
      links: {
        website: "https://agarwalchildrenhospital.wordpress.com/",
        directions:
          "https://www.google.com/maps/dir//Dr+Agarwal+Children+Hospital,+63,+Gandhi+Nagar,+Near+M+I+G+Cricket+Club,+Road+Number+8,+Bandra+East,+Mumbai,+Maharashtra+400051,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c921cc000001:0xce771608e46f4ac4?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIBBAA&hl=en&gl=us",
      },
      title: "Dr Agarwal Children Hospital",
      type: "Children's hospital",
      address:
        "63, Gandhi Nagar, Near M I G Cricket Club, Road Number 8, Bandra East",
      phone: "+91 22 2642 6846",
      hours: "Open 24 hours",
    },
    {
      position: 20,
      rating: 4.9,
      reviews_original: "(458)",
      reviews: 458,
      description:
        '"Apart, he motivates the child so his half disease is gone there itself…"',
      place_id: "11210670599568283306",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=11210670599568283306&q=infant+vaccination+center+in+khar+west",
      lsig: "AB86z5US2oi_C37pxTkdH89j5Ymw",
      provider_id: "/g/11j2g0b9jq",
      gps_coordinates: {
        latitude: 19.2135701,
        longitude: 72.8378139,
      },
      links: {
        website: "https://www.mycrd.in/little-miracles-childrens-clinic",
        directions:
          "https://www.google.com/maps/dir//Little+miracles+Children's+Clinic+and+Vaccination+center+-+Dr.+Keval+Shah,+93%2F931+Ground+Floor,+Maitree+co+op+HSG+society+(Siddhivinayak+society+M.+H.+B+colony,+near+Bharat+petrol+pump,+Mahavir+Nagar,+Kandivali+West,+Mumbai,+Maharashtra+400067,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7b73ef1aaa6a1:0x9b944d837d2ed6aa?sa=X&ved=2ahUKEwjpyd3boNyBAxUykYkEHTYHAzUQ48ADegQIARAA&hl=en&gl=us",
      },
      title:
        "Little miracles Children's Clinic and Vaccination center - Dr. Keval Shah",
      type: "Pediatrician",
      address:
        "93/931 Ground Floor, Maitree co op HSG society (Siddhivinayak society M. H. B colony, near Bharat petrol pump",
      phone: "+91 88796 52523",
      hours: "Closed ⋅ Opens 5:30 PM",
    },
  ],
  pagination: {
    current: 1,
    next: "https://www.google.com/search?q=infant+vaccination+center+in+khar+west&hl=en&gl=us&start=20&tbm=lcl",
    other_pages: {
      2: "https://www.google.com/search?q=infant+vaccination+center+in+khar+west&hl=en&gl=us&start=20&tbm=lcl",
      3: "https://www.google.com/search?q=infant+vaccination+center+in+khar+west&hl=en&gl=us&start=40&tbm=lcl",
      4: "https://www.google.com/search?q=infant+vaccination+center+in+khar+west&hl=en&gl=us&start=60&tbm=lcl",
      5: "https://www.google.com/search?q=infant+vaccination+center+in+khar+west&hl=en&gl=us&start=80&tbm=lcl",
    },
  },
  serpapi_pagination: {
    current: 1,
    next_link:
      "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=infant+vaccination+center+in+khar+west&start=20",
    next: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=infant+vaccination+center+in+khar+west&start=20",
    other_pages: {
      2: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=infant+vaccination+center+in+khar+west&start=20",
      3: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=infant+vaccination+center+in+khar+west&start=40",
      4: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=infant+vaccination+center+in+khar+west&start=60",
      5: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=infant+vaccination+center+in+khar+west&start=80",
    },
  },
};

const vaccineData = [
  {
    age: "1-2 months",
    vaccines: [
      {
        name: "Diphtheria, tetanus, and pertussis (DTaP)",
        prevents: ["Diphtheria", "Tetanus", "Pertussis"],
      },
      {
        name: "Haemophilus influenzae type b (Hib)",
        prevents: ["Haemophilus influenzae type b (Hib) disease"],
      },
      {
        name: "Polio (IPV)",
        prevents: ["Polio"],
      },
      {
        name: "Pneumococcal conjugate (PCV)",
        prevents: ["Pneumococcal disease"],
      },
      {
        name: "Rotavirus (RV)",
        prevents: ["Rotavirus infections"],
      },
    ],
  },
];

const Vaccine = () => {
  const [center, setCenter] = useState({ lat: 20, lng: 78.2945 });
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAzHTxyzCoLoxWgUbEezEHfd6eUrK9ujSs",
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const originRef = useRef();
  const destiantionRef = useRef();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const backgroundColors = [
    "#FFE4C4", // bisque
    "#D8BFD8", // thistle
    "#DDA0DD", // plum
    "#E6F0FF", // lavender
    "#AFEEEE", // paleturquoise
    "#FF7F50", // coral
    "#F5FFFA", // mint
    "#FFDAB9", // peach
  ];

  useEffect(() => {
    getLocationJs();
  }, []);

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCenter({ lat: latitude, lng: longitude });
      const apiUrl = "https://maps.googleapis.com/maps/api/geocode/json";
      const apiKey = "AIzaSyAzHTxyzCoLoxWgUbEezEHfd6eUrK9ujSs";

      const url = `${apiUrl}?latlng=${latitude},${longitude}&key=${apiKey}`;
      const city = "mumbai";
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const geocodeData = data;
          originRef.current.value = geocodeData.results[1].formatted_address;
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    });
  };

  if (!isLoaded) {
    return <div>loading</div>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }
  return (
    <>
      <HomeHeader />
      <h2
        style={{
          textAlign: "center",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        Your Child's Vaccine Tracker
      </h2>
      <h4
        style={{
          textAlign: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        Doctors Recommended
      </h4>
      <div
        style={{ display: "flex", flexWrap: "wrap", padding: "30px", gap: 30 }}
      >
        {vaccineData.map((vaccine, id) => (
          <div
            style={{
              width: "400px",
              height: "300px",
              backgroundColor: "blue",
              borderRadius: "20px",
            }}
          ></div>
        ))}
      </div>
      <h2
        style={{
          textAlign: "center",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        Vaccination Centers Near You
      </h2>
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        h="100vh"
        w="100vw"
      >
        <Box position="absolute" left={0} top={0} h="100%" w="100%">
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {data.local_results.map((marker, id) => (
              <Marker
                key={id}
                position={{
                  lat: marker.gps_coordinates.latitude,
                  lng: marker.gps_coordinates.longitude,
                }}
                onClick={() => {
                  setSelectedMarker(marker);
                  const apiUrl =
                    "https://maps.googleapis.com/maps/api/geocode/json";
                  const apiKey = "AIzaSyAzHTxyzCoLoxWgUbEezEHfd6eUrK9ujSs";

                  const url = `${apiUrl}?latlng=${marker.gps_coordinates.latitude},${marker.gps_coordinates.longitude}&key=${apiKey}`;
                  const city = "mumbai";
                  fetch(url)
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error(
                          `Network response was not ok: ${response.status}`
                        );
                      }
                      return response.json();
                    })
                    .then((data) => {
                      const geocodeData = data;
                      destiantionRef.current.value =
                        geocodeData.results[1].formatted_address;
                      calculateRoute();
                    })
                    .catch((error) => {
                      console.error(
                        "There was a problem with the fetch operation:",
                        error
                      );
                    });
                }}
              >
                {selectedMarker === marker && (
                  <InfoWindow
                    position={{
                      lat: marker.gps_coordinates.latitude,
                      lng: marker.gps_coordinates.longitude,
                    }}
                    onCloseClick={() => setSelectedMarker(null)}
                  >
                    <div style={{ width: "300px", minHeight: "100px" }}>
                      <h5>{marker.title}</h5>
                      <div>Ratings: {marker.rating}</div>
                      <div>Phone: {marker.phone}</div>
                      <div>Hours: {marker.hours}</div>
                      <div>Address: {marker.address}</div>
                      {/* <button>hello<button> */}
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default Vaccine;
