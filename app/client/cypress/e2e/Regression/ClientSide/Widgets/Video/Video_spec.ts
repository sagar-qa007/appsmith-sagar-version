const widgetsPage = require("../../../../../locators/Widgets.json");
const testdata = require("../../../../../fixtures/testdata.json");
import {
  agHelper,
  entityExplorer,
  draggableWidgets,
  propPane,
} from "../../../../../support/Objects/ObjectsCore";

describe(
  "Video Widget Functionality",
  { tags: ["@tag.Widget", "@tag.Video", "@tag.Binding"] },
  function () {
    before(() => {
    });

    it("1. Video Widget play functionality validation", function () {
      cy.log("Play the video");
    });

    
    afterEach(() => {
      // put your clean up code if any
    });
  },
);
