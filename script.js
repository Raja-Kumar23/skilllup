document.getElementById("c-lang").addEventListener("click", function() {
    loadQuestions('C');
});

document.getElementById("java-lang").addEventListener("click", function() {
    loadQuestions('Java');
});

function loadQuestions(language) {
    fetch('data.json') // Fetch data from the JSON file
        .then(response => response.json())
        .then(jsonData => {
            const languageData = jsonData[language];
            const topics = Object.keys(languageData);

            let topicList = document.getElementById('topic-list');
            topicList.innerHTML = ''; // Clear previous topics

            topics.forEach(topic => {
                let listItem = document.createElement('li');
                listItem.textContent = topic;
                listItem.addEventListener("click", function() {
                    loadTopicQuestions(languageData[topic]);
                });
                topicList.appendChild(listItem);
            });
        })
        .catch(error => console.log(error));
}

function loadTopicQuestions(questions) {
    let questionList = document.getElementById('question-list');
    questionList.innerHTML = ''; // Clear previous questions

    questions.forEach(question => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <h4>${question.question} (${question.difficulty})</h4>
            <button onclick="showAlgorithm('${question.algorithm}')">Algorithm</button>
            <button onclick="showCode('${question.code}')">Code</button>
        `;
        questionList.appendChild(listItem);
    });
}

function showAlgorithm(algorithm) {
    alert("Algorithm: " + algorithm);
}

function showCode(code) {
    alert("Code: " + code);
}
