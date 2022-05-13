const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");

class ExplorerController {
    static explorers = Reader.readJsonFile("explorers.json");

    static getExplorersByMission(mission) {
        return ExplorerService.filterByMission(this.explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        return ExplorerService.getExplorersUsernamesByMission(
            this.explorers,
            mission
        );
    }

    static getExplorersAmountByMission(mission) {
        return ExplorerService.getAmountOfExplorersByMission(
            this.explorers,
            mission
        );
    }
}

module.exports = ExplorerController;
