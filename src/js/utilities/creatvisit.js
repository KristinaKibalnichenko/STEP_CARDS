import { createVisitBtn, root } from "./constants.js";
import VisitModal from "../src/js/classes/VisitModal.js";


export default function createModalVisit() {
  const visitForm = new VisitModal({
    id: "modalVisit",
    classes: ["modal", "visit"],
  });
  console.log("visitForm ", visitForm);
  root.append(visitForm.modal);
  createVisitBtn.addEventListener("click", function () {
    visitForm.openModal();
    // const submitBtn = document.getElementById("submit");
    // let flag = true;
    // let token, status;

    // submitBtn.addEventListener("click", signIn);
  });
}