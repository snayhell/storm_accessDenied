import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";

import { useRef, useState, useEffect } from "react";
import HomeHeader from "./Home/Home/HomeHeader/HomeHeader";

const data = {
  search_metadata: {
    id: "651ce3a35c1059900466321c",
    status: "Success",
    json_endpoint:
      "https://serpapi.com/searches/506c96288f51c920/651ce3a35c1059900466321c.json",
    created_at: "2023-10-04 04:01:39 UTC",
    processed_at: "2023-10-04 04:01:39 UTC",
    google_local_url:
      "https://www.google.com/search?q=maternal+home+in+khar+and+bandra&hl=en&gl=us&tbm=lcl",
    raw_html_file:
      "https://serpapi.com/searches/506c96288f51c920/651ce3a35c1059900466321c.html",
    total_time_taken: 1.02,
  },
  search_parameters: {
    engine: "google_local",
    q: "maternal home in khar and bandra",
    google_domain: "google.com",
    hl: "en",
    gl: "us",
    device: "desktop",
  },
  local_results: [
    {
      position: 1,
      rating: 5,
      reviews_original: "(38)",
      reviews: 38,
      place_id: "16024657813692464605",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=16024657813692464605&q=maternal+home+in+khar+and+bandra",
      lsig: "AB86z5X1ZLZGy-xoCbVi9o2LgsrB",
      provider_id: "/g/1xb2c0rl",
      gps_coordinates: {
        latitude: 19.0706322,
        longitude: 72.8328392,
      },
      links: {
        website: "https://www.mothercarenursinghome.com/",
        directions:
          "https://www.google.com/maps/dir//433,+Mothercare+Nursing+Home,+Saraswati,+14th+Rd,+Khar+West,+Mumbai,+Maharashtra+400052,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c92626e971d5:0xde6305611853bddd?sa=X&ved=2ahUKEwjfxJWEwduBAxXnhu4BHXgACIgQ48ADegQIARAA&hl=en&gl=us",
      },
      title: "Mothercare Nursing Home",
      type: "Obstetrician-gynecologist",
      address: "433, Saraswati, 14th Rd, Khar road ",
      phone: "+91 22 2648 2418",
      hours: "Open 24 hours",
    },
    {
      position: 2,
      place_id: "9357940154108992022",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=9357940154108992022&q=maternal+home+in+khar+and+bandra",
      lsig: "AB86z5WQ8vUH_vxAtsQHrQ1eatI8",
      provider_id: "/g/12ltqkf_s",
      gps_coordinates: {
        latitude: 19.0535951,
        longitude: 72.8244564,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Shop+No.+13,+Patkar's+Maternity+%26+Surgical+Home,+Hill+Rd,+Opp.+Damien+Showroom,+Ranwar,+Bandra+West,+Mumbai,+Maharashtra+400050,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c941048b2a4f:0x81de14fd5b07da16?sa=X&ved=2ahUKEwjfxJWEwduBAxXnhu4BHXgACIgQ48ADegQIAhAA&hl=en&gl=us",
      },
      title: "Patkar's Maternity & Surgical Home",
      reviews_original: "No reviews",
      type: "Women's health clinic",
      address: "Shop No. 13, Hill Rd, Opp. Damien Showroom,Khar road ",
      phone: "+91 22 2642 7810",
      hours: "Opens soon ⋅ 10 AM",
    },
    {
      position: 3,
      rating: 4.5,
      reviews_original: "(20)",
      reviews: 20,
      place_id: "14148635815468017105",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=14148635815468017105&q=maternal+home+in+khar+and+bandra",
      lsig: "AB86z5V2aWhXvzrCbMGNCiOpfMmV",
      provider_id: "/g/11g9gsdkgd",
      gps_coordinates: {
        latitude: 19.0608914,
        longitude: 72.84705919999999,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Prathamesh+Maternity+%26+Nursing+Home,+341,+Yashwant+Nagar+Near+Kherwadi+Signal,+Gandhi+Nagar,+Bandra+East,+Mumbai,+Maharashtra+400051,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c91f3e165555:0xc45a0d4fbd5725d1?sa=X&ved=2ahUKEwjfxJWEwduBAxXnhu4BHXgACIgQ48ADegQIBRAA&hl=en&gl=us",
      },
      title: "Prathamesh Maternity & Nursing Home",
      type: "Maternity hospital",
      address: "341, Yashwant Nagar Near Kherwadi Signal,Bandra East ",
      phone: "+91 98201 20668",
    },
    {
      position: 4,
      rating: 4.8,
      reviews_original: "(88)",
      reviews: 88,
      description:
        '"... and memorable experience with Ashwin Maternity Nursing Home."',
      place_id: "4685168210972671870",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=4685168210972671870&q=maternal+home+in+khar+and+bandra",
      lsig: "AB86z5WTw7_1FrMcr1GM_yWWtdYg",
      provider_id: "/g/1tm8j0y7",
      gps_coordinates: {
        latitude: 19.0768989,
        longitude: 72.8429827,
      },
      links: {
        website:
          "https://ashwin-maternity-surgical-nursing-home-dr-rashmi-v.business.site/?utm_source=gmb&utm_medium=referral",
        directions:
          "https://www.google.com/maps/dir//Ashwin+Maternity+%26+Surgical+Nursing+Home+-+Dr.+Rashmi+V.+Sequeira+MBBS+MD+DNB+DGO,+101,+MaryAnne+Heights+3rd.+Road,+opp.+Union+Bank,+near+Khar+Subway,+TPS+III,+Sen+Nagar,+Santacruz+East,+Mumbai,+Maharashtra+400055,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9068ed33243:0x41050faa2ffa7f7e?sa=X&ved=2ahUKEwjfxJWEwduBAxXnhu4BHXgACIgQ48ADegQIAxAA&hl=en&gl=us",
      },
      title:
        "Ashwin Maternity & Surgical Nursing Home - Dr. Rashmi V. Sequeira MBBS MD DNB DGO",
      type: "Nursing home",
      address:
        "101, MaryAnne Heights 3rd. Road, opp. Union Bank, near Khar Subway,Khar road ",
      phone: "+91 87798 71104",
      hours: "Closed ⋅ Opens 12 PM",
    },
    {
      position: 5,
      rating: 3.2,
      reviews_original: "(117)",
      reviews: 117,
      description:
        '"Mother\'s touch with love and nursing staff is also good."',
      place_id: "6646103433624825896",
      place_id_search:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=6646103433624825896&q=maternal+home+in+khar+and+bandra",
      lsig: "AB86z5U0e8tDvZqEdBpGKBHvrWXq",
      provider_id: "/g/1tf56bm3",
      gps_coordinates: {
        latitude: 19.062194299999998,
        longitude: 72.83221309999999,
      },
      links: {
        directions:
          "https://www.google.com/maps/dir//Agarwal+Nursing+Home,+74,+Ann+Ville,+Junction+of+14th+%26+30th+Road,+Near:+Eat+Around+the+Restaurant,+Bandra+West,+Mumbai,+Maharashtra+400050,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c93faccf388f:0x5c3bb3dc3db63028?sa=X&ved=2ahUKEwjfxJWEwduBAxXnhu4BHXgACIgQ48ADegQIBBAA&hl=en&gl=us",
      },
      title: "Agarwal Nursing Home",
      type: "Nursing home",
      address:
        "74, Ann Ville, Junction of 14th & 30th Road, Near: Eat Around the Restaurant,Khar Road",
      phone: "+91 22 2645 5125",
      hours: "Open 24 hours",
    },
  ],
  pagination: {
    current: 1,
    next: "https://www.google.com/search?q=maternal+home+in+khar+and+bandra&hl=en&gl=us&start=20&tbm=lcl",
    other_pages: {
      2: "https://www.google.com/search?q=maternal+home+in+khar+and+bandra&hl=en&gl=us&start=20&tbm=lcl",
      3: "https://www.google.com/search?q=maternal+home+in+khar+and+bandra&hl=en&gl=us&start=40&tbm=lcl",
      4: "https://www.google.com/search?q=maternal+home+in+khar+and+bandra&hl=en&gl=us&start=60&tbm=lcl",
      5: "https://www.google.com/search?q=maternal+home+in+khar+and+bandra&hl=en&gl=us&start=80&tbm=lcl",
    },
  },
  serpapi_pagination: {
    current: 1,
    next_link:
      "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=maternal+home+in+khar+and+bandra&start=20",
    next: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=maternal+home+in+khar+and+bandra&start=20",
    other_pages: {
      2: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=maternal+home+in+khar+and+bandra&start=20",
      3: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=maternal+home+in+khar+and+bandra&start=40",
      4: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=maternal+home+in+khar+and+bandra&start=60",
      5: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=maternal+home+in+khar+and+bandra&start=80",
    },
  },
};

function Map() {
  const [center, setCenter] = useState({ lat: 20, lng: 78.2945 });
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
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        h="90vh"
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
                      <h3>{marker.title}</h3>
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
        <Box
          p={4}
          borderRadius="lg"
          m={4}
          bgColor="white"
          shadow="base"
          minW="container.md"
          zIndex="1"
        >
          <HStack spacing={2} justifyContent="space-between">
            <Box flexGrow={1}>
              <Autocomplete>
                <Input type="text" placeholder="Origin" ref={originRef} />
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input
                  type="text"
                  placeholder="Destination"
                  ref={destiantionRef}
                />
              </Autocomplete>
            </Box>

            <ButtonGroup>
              <Button colorScheme="pink" type="submit" onClick={calculateRoute} style={{backgroundColor: "pink", borderRadius: "10px", padding:"4px", border:"none"}}>
                Calculate Route
              </Button>
              <IconButton
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
                style={{backgroundColor: "pink", borderRadius: "10px", padding:"3px", border:"none"}}
              />
            </ButtonGroup>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent="space-between">
            <Text>Distance: {distance} </Text>
            <Text>Duration: {duration} </Text>
            <IconButton
              aria-label="center back"
              icon={<FaLocationArrow />}
              style={{backgroundColor: "pink", borderRadius: "10px", padding:"5px", border:"none"}}
              isRound
              onClick={() => {
                map.panTo(center);
                map.setZoom(15);
    
              }
            }
            />
          </HStack>
        </Box>
      </Flex>
    </>
  );
}

export default Map;
