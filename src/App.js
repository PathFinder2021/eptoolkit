import React from "react";
import { HashRouter as Router} from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import history from "./utils/history";
import FrontPage from "./sites/FrontPage/FrontPage";
import DesignPage from "./sites/DesignPage/DesignPage";
import FeedbackPage from "./sites/FeedbackPage/FeedbackPage";
import BuildingsPage from "./sites/BuildingsPage/BuildingsPage";
import CartPage from "./sites/CartPage/CartPage";
import RetrofitHelpPage from "./sites/RetrofitHelpPage/RetrofitHelpPage";
import SavedBuildingPage from "./sites/SavedBuildingPage/SavedBuildingPage";
import PublicBuildingPage from "./sites/PublicBuildingPage/PublicBuildingPage";
import CaseStudiesPage from "./sites/CaseStudiesPage/CaseStudiesPage";
import Retrofit from "./sites/RetrofittingPage/Retrofit";
import BuildingFabric from "./sites/RetrofittingPage/BuildingFabric";
import RetrofitMeasure1 from "./sites/RetrofittingPage/RetrofitMeasure1";
import RetrofittingExternalWallsOptions from "./sites/RetrofittingPage/RetrofittingExternalWallsOptions.js";
import RetrofittingDoorsOptions from "./sites/RetrofittingPage/RetrofittingDoorsOptions/RetrofittingDoorsOptions.js";
import RetrofittingDoorsDraughtProofing from "./sites/RetrofittingPage/RetrofittingDoorsOptions/RetrofittingDoorsDraughtProofing.js";
import RetrofittingDoorsReplaceDoor from "./sites/RetrofittingPage/RetrofittingDoorsOptions/RetrofittingDoorsReplaceDoor.js";
import RetrofittingDoorsInternalInsulation from "./sites/RetrofittingPage/RetrofittingDoorsOptions/RetrofittingDoorsInternalInsulation.js";
import RetrofittingDoorsDraughtCurtain from "./sites/RetrofittingPage/RetrofittingDoorsOptions/RetrofittingDoorsDraughtCurtain.js";
import RetrofittingDoorsExternalStormDoor from "./sites/RetrofittingPage/RetrofittingDoorsOptions/RetrofittingDoorsExternalStormDoor.js";
import RetrofittingDoorsDraughtLobbyExternal from "./sites/RetrofittingPage/RetrofittingDoorsOptions/RetrofittingDoorsDraughtLobbyExternal.js";
import RetrofittingDoorsDraughtLobbyInternal from "./sites/RetrofittingPage/RetrofittingDoorsOptions/RetrofittingDoorsDraughtLobbyInternal.js";
import RetrofittingWindowsOptions from "./sites/RetrofittingPage/RetrofittingWindowsOptions/RetrofittingWindowsOptions.js";
import RetrofittingWallsOptions from "./sites/RetrofittingPage/RetrofittingWallsOptions/RetrofittingWallsOptions.js";
import RetrofittingWallsStoneAddInsulation from "./sites/RetrofittingPage/RetrofittingWallsOptions/RetrofittingWallsStoneAddInsulation.js";
import RetrofittingWallsStoneAirPassage from "./sites/RetrofittingPage/RetrofittingWallsOptions/RetrofittingWallsStoneAirPassage.js";
import RetrofittingWallsWoodAddInsulationOutside from "./sites/RetrofittingPage/RetrofittingWallsOptions/RetrofittingWallsWoodAddInsulationOutside.js";
import RetrofittingWallsWoodAddInsulationInside from "./sites/RetrofittingPage/RetrofittingWallsOptions/RetrofittingWallsWoodAddInsulationInside.js";
import RetrofittingWallsWoodChangeInsulation from "./sites/RetrofittingPage/RetrofittingWallsOptions/RetrofittingWallsWoodChangeInsulation.js";
import RetrofittingWallsTape from "./sites/RetrofittingPage/RetrofittingWallsOptions/RetrofittingWallsTape.js";
import RetrofittingFloorsOptions from "./sites/RetrofittingPage/RetrofittingFloorsOptions/RetrofittingFloorsOptions.js";
import RetrofittingFloorsCrawlSpaceAddInsulation from "./sites/RetrofittingPage/RetrofittingFloorsOptions/RetrofittingFloorsCrawlSpaceAddInsulation.js";
import RetrofittingFloorsCrawlSpaceChangeInsulation from "./sites/RetrofittingPage/RetrofittingFloorsOptions/RetrofittingFloorsCrawlSpaceChangeInsulation.js";
import RetrofittingFloorsCrawlSpaceImpressedInsulation from "./sites/RetrofittingPage/RetrofittingFloorsOptions/RetrofittingFloorsCrawlSpaceImpressedInsulation.js";
import RetrofittingFloorsChangeInsulationSoG from "./sites/RetrofittingPage/RetrofittingFloorsOptions/RetrofittingFloorsChangeInsulationSoG.js";
import RetrofittingFloorsImprovingGFG from "./sites/RetrofittingPage/RetrofittingFloorsOptions/RetrofittingFloorsImprovingGFG.js";
import RetrofittingFloorsTape from "./sites/RetrofittingPage/RetrofittingFloorsOptions/RetrofittingFloorsTape.js";
import RetrofittingRoofsOptions from "./sites/RetrofittingPage/RetrofittingRoofsOptions/RetrofittingRoofsOptions.js";
import RetrofittingRoofsColdLoftBlownWool from "./sites/RetrofittingPage/RetrofittingRoofsOptions/RetrofittingRoofsColdLoftBlownWool.js";
import RetrofittingRoofsSlantedChangeInsulation from "./sites/RetrofittingPage/RetrofittingRoofsOptions/RetrofittingRoofsSlantedChangeInsulation.js";
import RetrofittingRoofsSlantedAddInsulation from "./sites/RetrofittingPage/RetrofittingRoofsOptions/RetrofittingRoofsSlantedAddInsulation.js";
import RetrofittingRoofsSlantedTape from "./sites/RetrofittingPage/RetrofittingRoofsOptions/RetrofittingRoofsSlantedTape.js";
import RetrofittingWindowsDraughtProofing1 from "./sites/RetrofittingPage/RetrofittingWindowsOptions/RetrofittingWindowsDraughtProofing1.js";
import RetrofittingWindowsDraughtProofing2 from "./sites/RetrofittingPage/RetrofittingWindowsOptions/RetrofittingWindowsDraughtProofing2.js";
import RetrofittingWindowsAdapt1 from "./sites/RetrofittingPage/RetrofittingWindowsOptions/RetrofittingWindowsAdapt1.js";
import RetrofittingSpaceHeatingOptions from "./sites/RetrofittingPage/RetrofittingSpaceHeatingOptions/RetrofittingSpaceHeatingOptions.js";
import RetrofittingSpaceHeatingAirSource from "./sites/RetrofittingPage/RetrofittingSpaceHeatingOptions/RetrofittingSpaceHeatingAirSource.js";
import RetrofittingSpaceHeatingDistrict from "./sites/RetrofittingPage/RetrofittingSpaceHeatingOptions/RetrofittingSpaceHeatingDistrict.js";
import RetrofittingSpaceHeatingRadiatorsHigh from "./sites/RetrofittingPage/RetrofittingSpaceHeatingOptions/RetrofittingSpaceHeatingRadiatorsHigh.js";
import RetrofittingSpaceHeatingRadiatorsLow from "./sites/RetrofittingPage/RetrofittingSpaceHeatingOptions/RetrofittingSpaceHeatingUnderfloor.js";
import RetrofittingSpaceHeatingWarmAir from "./sites/RetrofittingPage/RetrofittingSpaceHeatingOptions/RetrofittingSpaceHeatingWarmAir.js";
import RetrofittingSpaceHeatingUnderfloor from "./sites/RetrofittingPage/RetrofittingSpaceHeatingOptions/RetrofittingSpaceHeatingUnderfloor.js";
import RetrofittingSpaceHeatingStove from "./sites/RetrofittingPage/RetrofittingSpaceHeatingOptions/RetrofittingSpaceHeatingStove.js";
import RetrofittingEnergySupplyOptions from "./sites/RetrofittingPage/RetrofittingEnergySupplyOptions/RetrofittingEnergySupplyOptions.js";
import RetrofittingEnergySupplyPowerGrid from "./sites/RetrofittingPage/RetrofittingEnergySupplyOptions/RetrofittingEnergySupplyPowerGrid.js";
import RetrofittingEnergySupplyGenerator from "./sites/RetrofittingPage/RetrofittingEnergySupplyOptions/RetrofittingEnergySupplyGenerator.js";
import RetrofittingEnergyGenerationOptions from "./sites/RetrofittingPage/RetrofittingEnergyGenerationOptions/RetrofittingEnergyGenerationOptions.js";
import RetrofittingEnergyGenerationMicrohydro from "./sites/RetrofittingPage/RetrofittingEnergyGenerationOptions/RetrofittingEnergyGenerationMicrohydro.js";
import RetrofittingEnergyGenerationWindTurbine from "./sites/RetrofittingPage/RetrofittingEnergyGenerationOptions/RetrofittingEnergyGenerationWindTurbine.js";
import RetrofittingEnergyGenerationSolarPanels from "./sites/RetrofittingPage/RetrofittingEnergyGenerationOptions/RetrofittingEnergyGenerationSolarPanels.js";
import RetrofittingEnergyGenerationBiomassDigester from "./sites/RetrofittingPage/RetrofittingEnergyGenerationOptions/RetrofittingEnergyGenerationBiomassDigester.js";
import RetrofittingEnergyGenerationBiomassHeatGeneration from "./sites/RetrofittingPage/RetrofittingEnergyGenerationOptions/RetrofittingEnergyGenerationBiomassHeatGeneration.js";
import RetrofittingEnergyStorageOptions from "./sites/RetrofittingPage/RetrofittingEnergyStorageOptions/RetrofittingEnergyStorageOptions.js";
import RetrofittingEnergyStorageBiogas from "./sites/RetrofittingPage/RetrofittingEnergyStorageOptions/RetrofittingEnergyStorageBiogas.js";
import RetrofittingEnergyStorageHotWater from "./sites/RetrofittingPage/RetrofittingEnergyStorageOptions/RetrofittingEnergyStorageHotWater.js";
import RetrofittingEnergyStorageBatteries from "./sites/RetrofittingPage/RetrofittingEnergyStorageOptions/RetrofittingEnergyStorageBatteries.js";
import RetrofittingVentilationOptions from "./sites/RetrofittingPage/RetrofittingVentilationOptions/RetrofittingVentilationOptions.js";
import RetrofittingVentilationHeatRecovery from "./sites/RetrofittingPage/RetrofittingVentilationOptions/RetrofittingVentilationHeatRecovery.js";
import RetrofittingVentilationSensors from "./sites/RetrofittingPage/RetrofittingVentilationOptions/RetrofittingVentilationSensors.js";
import RetrofittingHotWaterOptions from "./sites/RetrofittingPage/RetrofittingHotWaterOptions/RetrofittingHotWaterOptions.js";
import RetrofittingHotWaterTankInsulation from "./sites/RetrofittingPage/RetrofittingHotWaterOptions/RetrofittingHotWaterTankInsulation.js";
import RetrofittingHotWaterLowFlow from "./sites/RetrofittingPage/RetrofittingHotWaterOptions/RetrofittingHotWaterLowFlow.js";
import RetrofittingHotWaterDistributionPipework from "./sites/RetrofittingPage/RetrofittingHotWaterOptions/RetrofittingHotWaterDistributionPipework.js";
import RetrofittingHotWaterWaste from "./sites/RetrofittingPage/RetrofittingHotWaterOptions/RetrofittingHotWaterWaste.js";
import RetrofittingLightingOptions from "./sites/RetrofittingPage/RetrofittingLightingOptions/RetrofittingLightingOptions.js";
import RetrofittingLightingHighEfficiency from "./sites/RetrofittingPage/RetrofittingLightingOptions/RetrofittingLightingHighEfficiency.js";
import RetrofittingLightingSensorsTimers from "./sites/RetrofittingPage/RetrofittingLightingOptions/RetrofittingLightingSensorsTimers.js";
import RetrofittingCommunityOptions from "./sites/RetrofittingPage/RetrofittingCommunityOptions/RetrofittingCommunityOptions.js";
import RetrofittingCodesign from "./sites/RetrofittingPage/RetrofittingCommunityOptions/RetrofittingCodesign.js";
import RetrofittingTestOptions from "./sites/RetrofittingPage/RetrofittingTestOptions/RetrofittingTestOptions.js";
import RetrofittingTest0 from "./sites/RetrofittingPage/RetrofittingTestOptions/RetrofittingTest0.js";
import RetrofittingTest1 from "./sites/RetrofittingPage/RetrofittingTestOptions/RetrofittingTest1.js";
import RetrofittingTest2 from "./sites/RetrofittingPage/RetrofittingTestOptions/RetrofittingTest2.js";
import RetrofittingTest3 from "./sites/RetrofittingPage/RetrofittingTestOptions/RetrofittingTest3.js";
import StepperForm from "./sites/DefineBuilding/StepperForm";
import RetrofitResults from "./sites/RetrofitResults/RetrofitResults.js";
import CoDesignPage from "./sites/CoDesignPage/CoDesignPage";
import AdminPage from "./sites/AdminPage/AdminPage";
import RegistrationPage from "./sites/RegistrationPage/RegistrationPage";
import AboutPage from "./sites/AboutPage/AboutPage"
import { CssBaseline } from "@material-ui/core";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <CssBaseline>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={FrontPage}></Route>
          <Route path="/design/:slug?" exact component={DesignPage}></Route>
          <Route path="/public/building/:slug" exact component={PublicBuildingPage}></Route>
          <Route path="/stepperForm" exact component={StepperForm}></Route>
          <Route path="/caseStudies" exact component={CaseStudiesPage}></Route>
          <Route path="/retrofit" exact component={Retrofit}></Route>
          <Route path="/buildingFabric" exact component={BuildingFabric}></Route>
          <Route path="/retrofitMeasure1" exact component={RetrofitMeasure1}></Route>
          <Route path="/retrofittingExternalWallsOptions" exact component={RetrofittingExternalWallsOptions}></Route>
          <Route path="/retrofittingDoorsOptions" exact component={RetrofittingDoorsOptions}></Route>
          <Route path="/retrofittingDoorsDraughtProofing" exact component={RetrofittingDoorsDraughtProofing}></Route>
          <Route path="/retrofittingDoorsReplaceDoor" exact component={RetrofittingDoorsReplaceDoor}></Route>
          <Route path="/retrofittingDoorsInternalInsulation" exact component={RetrofittingDoorsInternalInsulation}></Route>
          <Route path="/retrofittingDoorsDraughtCurtain" exact component={RetrofittingDoorsDraughtCurtain}></Route>
          <Route path="/retrofittingDoorsExternalStormDoor" exact component={RetrofittingDoorsExternalStormDoor}></Route>
          <Route path="/retrofittingDoorsDraughtLobbyExternal" exact component={RetrofittingDoorsDraughtLobbyExternal}></Route>
          <Route path="/retrofittingDoorsDraughtLobbyInternal" exact component={RetrofittingDoorsDraughtLobbyInternal}></Route>
          <Route path="/retrofittingWindowsOptions" exact component={RetrofittingWindowsOptions}></Route>
          <Route path="/retrofittingFloorsOptions" exact component={RetrofittingFloorsOptions}></Route>
          <Route path="/retrofittingFloorsCrawlSpaceAddInsulation" exact component={RetrofittingFloorsCrawlSpaceAddInsulation}></Route>
          <Route path="/retrofittingFloorsCrawlSpaceChangeInsulation" exact component={RetrofittingFloorsCrawlSpaceChangeInsulation}></Route>
          <Route path="/retrofittingFloorsCrawlSpaceImpressedInsulation" exact component={RetrofittingFloorsCrawlSpaceImpressedInsulation}></Route>
          <Route path="/retrofittingFloorsChangeInsulationSoG" exact component={RetrofittingFloorsChangeInsulationSoG}></Route>
          <Route path="/retrofittingFloorsImprovingGFG" exact component={RetrofittingFloorsImprovingGFG}></Route>
          <Route path="/retrofittingFloorsTape" exact component={RetrofittingFloorsTape}></Route>
          <Route path="/retrofittingWallsOptions" exact component={RetrofittingWallsOptions}></Route>
          <Route path="/retrofittingWallsStoneAddInsulation" exact component={RetrofittingWallsStoneAddInsulation}></Route>
          <Route path="/retrofittingWallsStoneAirPassage" exact component={RetrofittingWallsStoneAirPassage}></Route>
          <Route path="/retrofittingWallsWoodAddInsulationOutside" exact component={RetrofittingWallsWoodAddInsulationOutside}></Route>
          <Route path="/retrofittingWallsWoodAddInsulationInside" exact component={RetrofittingWallsWoodAddInsulationInside}></Route>
          <Route path="/retrofittingWallsWoodChangeInsulation" exact component={RetrofittingWallsWoodChangeInsulation}></Route>
          <Route path="/retrofittingWallsTape" exact component={RetrofittingWallsTape}></Route>
          <Route path="/retrofittingRoofsOptions" exact component={RetrofittingRoofsOptions}></Route>
          <Route path="/retrofittingRoofsColdLoftBlownWool" exact component={RetrofittingRoofsColdLoftBlownWool}></Route>
          <Route path="/retrofittingRoofsSlantedChangeInsulation" exact component={RetrofittingRoofsSlantedChangeInsulation}></Route>
          <Route path="/retrofittingRoofsSlantedAddInsulation" exact component={RetrofittingRoofsSlantedAddInsulation}></Route>
          <Route path="/retrofittingRoofsSlantedTape" exact component={RetrofittingRoofsSlantedTape}></Route>
          <Route path="/windowsDraughtProofing1" exact component={RetrofittingWindowsDraughtProofing1}></Route>
          <Route path="/windowsDraughtProofing2" exact component={RetrofittingWindowsDraughtProofing2}></Route>
          <Route path="/windowsAdapt1" exact component={RetrofittingWindowsAdapt1}></Route>
          <Route path="/retrofittingSpaceHeatingOptions" exact component={RetrofittingSpaceHeatingOptions}></Route>
          <Route path="/retrofittingSpaceHeatingAirSource" exact component={RetrofittingSpaceHeatingAirSource}></Route>
          <Route path="/retrofittingSpaceHeatingDistrict" exact component={RetrofittingSpaceHeatingDistrict}></Route>
          <Route path="/retrofittingSpaceHeatingRadiatorsHigh" exact component={RetrofittingSpaceHeatingRadiatorsHigh}></Route>
          <Route path="/retrofittingSpaceHeatingRadiatorsLow" exact component={RetrofittingSpaceHeatingRadiatorsLow}></Route>
          <Route path="/retrofittingSpaceHeatingWarmAir" exact component={RetrofittingSpaceHeatingWarmAir}></Route>
          <Route path="/retrofittingSpaceHeatingUnderfloor" exact component={RetrofittingSpaceHeatingUnderfloor}></Route>
          <Route path="/retrofittingSpaceHeatingStove" exact component={RetrofittingSpaceHeatingStove}></Route>
          <Route path="/retrofittingEnergySupplyOptions" exact component={RetrofittingEnergySupplyOptions}></Route>
          <Route path="/retrofittingEnergySupplyPowerGrid" exact component={RetrofittingEnergySupplyPowerGrid}></Route>
          <Route path="/retrofittingEnergySupplyGenerator" exact component={RetrofittingEnergySupplyGenerator}></Route>
          <Route path="/retrofittingEnergyGenerationOptions" exact component={RetrofittingEnergyGenerationOptions}></Route>
          <Route path="/retrofittingEnergyGenerationMicrohydro" exact component={RetrofittingEnergyGenerationMicrohydro}></Route>
          <Route path="/retrofittingEnergyGenerationWindTurbine" exact component={RetrofittingEnergyGenerationWindTurbine}></Route>
          <Route path="/retrofittingEnergyGenerationSolarPanels" exact component={RetrofittingEnergyGenerationSolarPanels}></Route>
          <Route path="/retrofittingEnergyGenerationBiomassDigester" exact component={RetrofittingEnergyGenerationBiomassDigester}></Route>
          <Route path="/retrofittingEnergyGenerationBiomassHeatGeneration" exact component={RetrofittingEnergyGenerationBiomassHeatGeneration}></Route>
          <Route path="/retrofittingEnergyStorageOptions" exact component={RetrofittingEnergyStorageOptions}></Route>
          <Route path="/retrofittingEnergyStorageBiogas" exact component={RetrofittingEnergyStorageBiogas}></Route>
          <Route path="/retrofittingEnergyStorageHotWater" exact component={RetrofittingEnergyStorageHotWater}></Route>
          <Route path="/retrofittingEnergyStorageBatteries" exact component={RetrofittingEnergyStorageBatteries}></Route>
          <Route path="/retrofittingHotWaterOptions" exact component={RetrofittingHotWaterOptions}></Route>
          <Route path="/retrofittingHotWaterTankInsulation" exact component={RetrofittingHotWaterTankInsulation}></Route>
          <Route path="/retrofittingHotWaterLowFlow" exact component={RetrofittingHotWaterLowFlow}></Route>
          <Route path="/retrofittingHotWaterDistributionPipework" exact component={RetrofittingHotWaterDistributionPipework}></Route>
          <Route path="/retrofittingHotWaterWaste" exact component={RetrofittingHotWaterWaste}></Route>
          <Route path="/retrofittingCommunityOptions" exact component={RetrofittingCommunityOptions}></Route>
          <Route path="/retrofittingVentilationOptions" exact component={RetrofittingVentilationOptions}></Route>
          <Route path="/retrofittingVentilationHeatRecovery" exact component={RetrofittingVentilationHeatRecovery}></Route>
          <Route path="/retrofittingVentilationSensors" exact component={RetrofittingVentilationSensors}></Route>
          <Route path="/retrofittingLightingOptions" exact component={RetrofittingLightingOptions}></Route>
          <Route path="/retrofittingLightingHighEfficiency" exact component={RetrofittingLightingHighEfficiency}></Route>
          <Route path="/retrofittingLightingSensorsTimers" exact component={RetrofittingLightingSensorsTimers}></Route>
          <Route path="/retrofittingCodesign" exact component={RetrofittingCodesign}></Route>
          <Route path="/retrofittingTestOptions" exact component={RetrofittingTestOptions}></Route>
          <Route path="/retrofittingTest0" exact component={RetrofittingTest0}></Route>
          <Route path="/retrofittingTest1" exact component={RetrofittingTest1}></Route>
          <Route path="/retrofittingTest2" exact component={RetrofittingTest2}></Route>
          <Route path="/retrofittingTest3" exact component={RetrofittingTest3}></Route>
          <Route path="/retrofitResults" exact component={RetrofitResults}></Route>
          <Route path="/co-design" exact component={CoDesignPage}></Route>
          <Route path="/about" exact component={AboutPage}></Route>
          <Route path="/registration" exact component={RegistrationPage}></Route>
          <Route path="/cart" exact component={CartPage}></Route>
          <Route path="/retrofitHelp" exact component={RetrofitHelpPage}></Route>
          <PrivateRoute path="/feedback" exact component={FeedbackPage}></PrivateRoute>
          <PrivateRoute path="/buildings" exact component={BuildingsPage}></PrivateRoute>
          <PrivateRoute
            path="/buildings/:slug"
            exact
            component={SavedBuildingPage}
          ></PrivateRoute>
          <PrivateRoute path="/admin" exact component={AdminPage}></PrivateRoute>
        </Switch>
      </Router>
    </CssBaseline>
  );
}

export default App;
