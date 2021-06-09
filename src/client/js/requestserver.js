import axios from "axios";
import { urlValidation } from "./urlValidation";

const passRequestToserver = async (url = "", data = {}) => {
    try {
        const serverResults = await axios({
            method: "POST",
            url,
            data,
        });
        return serverResults;
    } catch (err) {
        console.log(err.message);
    }
};

const getServerResponse =  () => {
    let inputUrl = document.getElementById("article-url").value;
    if (urlValidation(inputUrl)) {
            passRequestToserver("http://localhost:8080/api-results", { url: inputUrl }).then((res) => {
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
