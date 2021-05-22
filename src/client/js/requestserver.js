import axios from "axios";
import { urlValidation } from "./urlValidation";

const passRequestToserver = async (requestedUrl = "", data = {}) => {
    try {
        const serverResults = await axios({
            method: "POST",
            requestedUrl,
            data,
            withCredentials: true,
            credentials: "include",
        });
        return serverResults;
    } catch (err) {
        console.log(err.message);
    }
};

function getServerResponse() {
    let inputUrl = document.getElementById("article-url").value;
    if (urlValidation(inputUrl)) {
        passRequestToserver("http://127.0.0.1:8081/api-results", { url: inputUrl }).then((res) => {
            document.getElementById("agg").innerHTML = `agreement: ${res.data.agreement}`;
            document.getElementById("sub").innerHTML = `subjectivity: ${res.data.subjectivity}`;
            document.getElementById("con").innerHTML = `confidence: ${res.data.confidence}`;
            document.getElementById("ir").innerHTML = `irony: ${res.data.irony}`;
            document.getElementById("sc").innerHTML = `score: ${res.data.score_tag}`;
        });
    } else {
        alert("input Url Invaild");
    }
}

export { getServerResponse };
