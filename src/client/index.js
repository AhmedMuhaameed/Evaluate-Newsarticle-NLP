import { getServerResponse } from "./js/requestserver";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/footer.scss";
import "./styles/header.scss";

window.addEventListener("DOMContentLoaded", () => {
    const btnSubmit = document.getElementById("btn-submit");
    if (btnSubmit) {
        btnSubmit.addEventListener("click", (e) => {
            e.preventDefault();
            getServerResponse();
        });
    }
});
