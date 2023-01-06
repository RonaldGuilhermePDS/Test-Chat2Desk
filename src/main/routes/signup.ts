import { Router } from "express";

export default (router: Router): void => {
  router.post("/signup", (req, rest) => {
    rest.json({ ok: "ok" });
  });
};
