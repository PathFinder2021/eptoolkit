import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import translationFI from './locales/translation_fi.json';
import translationEN from './locales/translation_en.json';
import frontpageFI from './locales/frontpage_fi.json';
import frontpageEN from './locales/frontpage_en.json';
import navbarFI from './locales/navbar_fi.json';
import navbarEN from './locales/navbar_en.json';
import caseStudiesFI from './locales/caseStudies_fi.json';
import caseStudiesEN from './locales/caseStudies_en.json';
import rCommunityFI from './locales/retrofitCommunity_fi.json';
import rCommunityEN from './locales/retrofitCommunity_en.json';
import rEnergySupplyFI from './locales/retrofitEnergySupply_fi.json';
import rEnergySupplyEN from './locales/retrofitEnergySupply_en.json';
import rEnergyGenFI from './locales/retrofitEnergyGeneration_fi.json';
import rEnergyGenEN from './locales/retrofitEnergyGeneration_en.json';
import rEnergyStorageFI from './locales/retrofitEnergyStorage_fi.json';
import rEnergyStorageEN from './locales/retrofitEnergyStorage_en.json';
import rWindowsFI from './locales/retrofitWindows_fi.json';
import rWindowsEN from './locales/retrofitWindows_en.json';
import rWallsFI from './locales/retrofitWalls_fi.json';
import rWallsEN from './locales/retrofitWalls_en.json';
import rFloorsFI from './locales/retrofitFloors_fi.json';
import rFloorsEN from './locales/retrofitFloors_en.json';
import rRoofsFI from './locales/retrofitRoofs_fi.json';
import rDoorsEN from './locales/retrofitDoors_en.json';
import rDoorsFI from './locales/retrofitDoors_fi.json';
import rRoofsEN from './locales/retrofitRoofs_en.json';
import rMainFI from './locales/retrofitMainPage_fi.json';
import rMainEN from './locales/retrofitMainPage_en.json';
import rHeatingFI from './locales/retrofitSpaceHeating_fi.json';
import rHeatingEN from './locales/retrofitSpaceHeating_en.json';
import rHotWaterFI from './locales/retrofitVentilation_fi.json';
import rHotWaterEN from './locales/retrofitHotWater_en.json';
import rVentilationFI from './locales/retrofitVentilation_fi.json';
import rVentilationEN from './locales/retrofitVentilation_en.json';
import rLightingFI from './locales/retrofitLighting_fi.json';
import rLightingEN from './locales/retrofitLighting_en.json';
import rOptGenFI from './locales/retrofitOptionsGeneral_fi.json';
import rOptGenEN from './locales/retrofitOptionsGeneral_en.json';

const resources = {
    en: {
        // Namespaces:
        translation: translationEN,
        frontpageT: frontpageEN,
        navbarT: navbarEN,
        caseStudiesT: caseStudiesEN,
        rMain: rMainEN,
        rCommunity: rCommunityEN,
        rEnergySupply: rEnergySupplyEN,
        rEnergyGen: rEnergyGenEN,
        rEnergyStorage: rEnergyStorageEN,
        rWindows: rWindowsEN,
        rWalls: rWallsEN,
        rFloors: rFloorsEN,
        rRoofs: rRoofsEN,
        rDoors: rDoorsEN,
        rHeating: rHeatingEN,
        rHotWater: rHotWaterEN,
        rVentilation: rVentilationEN,
        rLighting: rLightingEN,
        rOptionsGen: rOptGenEN
    },
    fi: {
        // Namespaces:
        translation: translationFI,
        frontpageT: frontpageFI,
        navbarT: navbarFI,
        caseStudiesT: caseStudiesFI,
        rMain: rMainFI,
        rCommunity: rCommunityFI,
        rEnergySupply: rEnergySupplyFI,
        rEnergyGen: rEnergyGenFI,
        rEnergyStorage: rEnergyStorageFI,
        rWindows: rWindowsFI,
        rWalls: rWallsFI,
        rFloors: rFloorsFI,
        rRoofs: rRoofsFI,
        rDoors: rDoorsFI,
        rHeating: rHeatingFI,
        rHotWater: rHotWaterFI,
        rVentilation: rVentilationFI,
        rLighting: rLightingFI,
        rOptionsGen: rOptGenFI
    }
};

i18n
    .use(LanguageDetector)
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        resources,   
        supportedLngs: ['en', 'fi'],
        fallbackLng: "en",

        keySeparator: false,

        detection: {
            // order and from where user language should be detected
            order: [ 'cookie', 'localStorage', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
    });

export default i18n;