const ExplorerController = require("./controllers/ExplorerController");


const express = require("express");
const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (_, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});

app.get("/v1/explorers/:mission", (request, response) => {
    const { mission } = request.params;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const { mission } = request.params;
    const explorersAmountByMission =
    ExplorerController.getExplorersAmountByMission(mission);

    response.json({ mission, quantity: explorersAmountByMission });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const { mission } = request.params;
    const explorerUsernamesByMission =
    ExplorerController.getExplorersUsernamesByMission(mission);

    response.json({ mission, explorers: explorerUsernamesByMission });
});

app.get("/v1/fizzbuzz/:value", (request, response) => {
    const { value } = request.params;
    const objFizzbuzz = ExplorerController.applyValidationInNumber(value);
    response.json(objFizzbuzz);
});

app.listen(port, () => {
    console.log("FizzBuzz Api in localhost:", port);
});
