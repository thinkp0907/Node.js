const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ 
    auth: `51067c919fbfdd510c72b53c021c7ff0da76154b` 
});

let createIssue = async(title, body, labels) => {
    await octokit.request('POST /repos/{owner}/{repo}/issues', {
        owner: 'thinkp0907',
        repo: 'Dev_dignity',
        title: '테스트 이슈',
        body : body,
        labels : labels
      });
};

createIssue('테스트 이슈', '이것은 issue 테스트입니다', ['bug']); 