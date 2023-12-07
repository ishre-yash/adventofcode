import fs from "fs";

function partOne(file) {
  const lines = fs.readFileSync(file, { encoding: "utf-8" }).split("\n");
  const data = lines.map((line) => {
    let gameid = line.split(":")[0].split(" ")[1];
    let gamedata = line
      .split(":")[1]
      .split(";")
      .map((round) => {
        let data = round.split(",");
        let blue = data
          .map((d) => {
            return d.includes("blue") && d.split(" ")[1];
          })
          .filter((d) => d && d)[0];
        let green = data
          .map((d) => {
            return d.includes("green") && d.split(" ")[1];
          })
          .filter((d) => d && d)[0];
        let red = data
          .map((d) => {
            return d.includes("red") && d.split(" ")[1];
          })
          .filter((d) => d && d)[0];
        return {
          blue,
          red,
          green,
        };
      });
    return {
      gameid: gameid,
      rounds: gamedata,
    };
  });

  const RED = 12;
  const GREEN = 13;
  const BLUE = 14;

  let possiblegames = data
    .map((g) =>
      g.rounds.map(
        (round) => round.red > RED || round.green > GREEN || round.blue > BLUE
      )
    )
    .map((d) => d.includes(true));

  let sum = 0;
  possiblegames.map((d, i) => {
    if (!d) {
      sum += i + 1;
    }
  });

  console.log(sum);
}

partOne("./day2/input.txt");
