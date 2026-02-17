const octokit = new Octokit()

await octokit.request('GET /search/repositories', {
    headers: {
        'X-Github-Api-Version': '2022-11-28'
    }
})