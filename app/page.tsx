import Image from "next/image";
import Game from "./components/game";
import test from "../data/test.json";
import lol from "../data/lol.json";

export default function Home() {

  return (
    <>
        <p>oe pas mal</p>
        <Game data={lol} />
    </>
  );
}
