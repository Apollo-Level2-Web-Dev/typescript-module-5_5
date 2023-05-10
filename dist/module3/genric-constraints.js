"use strict";
// const newData = {...myInfo ,crush};
const addMeInMyCrushMind = (myInfo) => {
    const crush = "kate Winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "Persian",
    age: 100,
    salary: 100000000,
    other1: false,
    other2: null,
};
const result5 = addMeInMyCrushMind(myInfo);
