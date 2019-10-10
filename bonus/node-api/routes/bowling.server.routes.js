import { postScore } from "../controller/bowling.server.controller";

export default app => {
  app.route("/api/post_score").post(postScore);
};
