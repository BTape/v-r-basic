import vite from "/vite.svg";
import react from "/react.svg";
import redux from "/redux.png";
import redis from "/redis.svg";
import router from "/router.svg";
import sooner from "/sooner.ico";
import cblock from "/cblock.png";
import Instructions from "../pages/codeBlocks/Instructions";
import Keys from "../pages/redis/Keys";

export const modules = [
  {
    name: "react",
    icon: react,
    class: "spin",
    pages: [
      { name: "react-router-dom" },
      { name: "estoEsUnaPrueba" },
      { name: "test2" },
      { name: "testeando" },
      { name: "test4" },
      { name: "nombreLargo1" },
      { name: "otroNombreLargo2" },
      { name: "test3" },
      { name: "testDeLosTest" },
      { name: "ocupandoEspacio" },
      { name: "nombreLargo11231" },
      { name: "otroNombreLargo212312" },
      { name: "test3543" },
      { name: "testDeLosTest23983" },
    ],
  },
  {
    name: "vite",
    icon: vite,
    class: "",
    pages: [
      { name: "testDeLosTest" },
      { name: "ocupandoEspacio" },
      { name: "nombreLargo11231" },
    ],
  },
  {
    name: "redux",
    icon: redux,
    class: "",
    pages: [
      { name: "config" },
      { name: "otroNombreLargo2" },
      { name: "test3" },
      { name: "testDeLosTest" },
      { name: "ocupandoEspacio" },
    ],
  },
  {
    name: "redis",
    icon: redis,
    class: "",
    pages: [
      {
        name: "Keys",
        component: <Keys />,
      },
      { name: "Strings" },
      { name: "Set up" },
      { name: "Hashes" },
      { name: "Lists" },
      { name: "Sets" },
      { name: "Sorted Sets" },
      { name: "Live Stream" },
    ],
  },
  {
    name: "router",
    icon: router,
    class: "",
    pages: [],
  },
  {
    name: "code-blocks",
    icon: cblock,
    class: "",
    pages: [{ name: "Instructions", component: <Instructions /> }],
  },
  {
    name: "sonner",
    icon: sooner,
    class: "",
    pages: [],
  },
];
