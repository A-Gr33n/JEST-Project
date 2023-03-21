/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore} = require("node:test");
const { game } = require("../game");


beforeAll(() => {
   game.score=42 ;
   game.playerMoves = ["button1" , "button2"] ;
   game.currentGame =  ["button1" , "button2"] ;
   document.getElementById("score").innerText = "42" ; 
   newGame();  
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
    test("should display 0 for the element with id of score" , () =>{
        expect (document.getElementById ("score").innerText).toEqual(0)
    })
});

describe("newGame works correctly," () =>
{
      expect(game.score).toEqual(0);
})