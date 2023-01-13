import { atom } from "recoil";

export const LoginDetailsAtom = atom({
  key: "userDetails",
  default: {
    isLogin: false,
    isSubscribed: false,
  },
});