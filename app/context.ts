import { atom } from "recoil";

export const appDataAtom = atom({
  key: "App",
  default: {
    meta: "Hello, world!",
  },
});
