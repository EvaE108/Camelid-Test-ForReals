import {Model} from "./models.js";

let bonesList = [
    "Organs/Bread_Pack",
    "Other/Puppy",
    "Organs/Placeholder"
];

export default new Model(
    "Camelid",
    bonesList,
    11,
    [0, 10, -1],
    "This is a model of Camelid",
    "/img/models/preview/camelid.png"
);
