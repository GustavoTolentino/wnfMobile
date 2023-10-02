import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";
import NextEvents from './home/next/NextEvents';
import EventPage from "./home/eventPage/EventPage";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";
import NextEventCard from "./common/cards/next/NextEventCard";
import FilterModal from './common/modals/FilterModal';

export {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  NextEvents,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
  NextEventCard,
  EventPage,
  FilterModal
};
