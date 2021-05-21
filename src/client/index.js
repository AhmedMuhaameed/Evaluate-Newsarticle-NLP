import { urlValidation } from "./js/urlValidation";
import { handleSubmit } from "./js/formHandler";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/footer.scss";
import "./styles/header.scss";

window.addEventListener("DOMContentLoaded", () => {
    const btnSubmit = document.getElementById("btn-submit");
    if (btnSubmit) {
        btnSubmit.addEventListener("click", (event) => {
            event.preventDefault();
            handleSubmit();
        });
    }
});
