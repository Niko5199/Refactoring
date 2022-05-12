const Reader = require('../utils/Reader');
const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService.js');

class ExplrerController {
  _explorers = Reader.getExplorerByMission('explorer.json');

  static getExplorersByMission(mission) {
    return ExplorerService.filterByMission(this._explorers, mission);
  }

  static getExplorersUsernamesByMission(mission) {
    return ExplorerService.getExplorersUsernamesByMission(
      this._explorers,
      mission
    );
  }

  static getExplorersAmountByMission(mission) {
    return ExplorerService.getAmountOfExplorersByMission(
      this._explorers,
      mission
    );
  }
}
