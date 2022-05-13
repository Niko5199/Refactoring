class ExplorerService {
  static filterByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission === mission);
  }
  static getAmountOfExplorersByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission === mission).length;
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    return explorers
      .map((explorer) => {
        if (explorer.mission === missions) return explorer.githubUsername;
      })
      .filter((explorer) => explorers !== undefined);
  }
}

module.exports = ExplorerService;
