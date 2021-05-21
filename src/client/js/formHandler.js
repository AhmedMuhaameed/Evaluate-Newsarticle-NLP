import axios from "axios";
import { urlValidation } from "./urlValidation";

const post = async (url = "", data = {}) => {
    try {
        const res = await axios({
            method: "POST",
            url,
            data,
            withCredentials: true,
            credentials: "include",
        });
        return res;
    } catch (err) {
        console.log(err.message);
    }
};

function handleSubmit() {
    let inputUrl = document.getElementById("article-url").value;
    if (urlValidation(inputUrl)) {
        console.log("::: Form Submitted :::");
        post("http://localhost:8081/add-url", { url: inputUrl }).then((res) => {
            document.getElementById("agreement").innerHTML = `agreement: ${res.data.agreement}`;
            document.getElementById("subjectivity").innerHTML = `subjectivity: ${res.data.subjectivity}`;
            document.getElementById("confidence").innerHTML = `confidence: ${res.data.confidence}`;
            document.getElementById("irony").innerHTML = `irony: ${res.data.irony}`;
            document.getElementById("score_tag").innerHTML = `score_tag: ${res.data.score_tag}`;
        });
    } else {
        alert("input Url Invaild");
    }
}

export { handleSubmit };
