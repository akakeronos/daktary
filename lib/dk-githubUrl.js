/**
   * An object to manage Github url.
   *
   * @param {String} An HTML string reprsenting a github Url.
   *
   */
class GithubUrl {
  constructor({owner, repo, branch, path}) {
    this.ghData = {
      keys: {
        secret: atob(GH_SECRET),
        id: atob(GH_ID )
      },
      owner: owner,
      repo: repo,
      branch: branch,
      path: path ? `/${path}` : ''
    }
  }
  toGhApiSearch(query) {
    const {keys, owner, repo} = this.ghData
    return `https://api.github.com/search/code` +
           `?q=${query}+language:Markdown+repo:${owner}/${repo}`
  }
  toGhApiUrl() {
    const {keys, owner, repo, branch, path} = this.ghData
    return `https://api.github.com` +
           `/repos/${owner}/${repo}/contents${path}` +
           `?ref=${branch}&client_id=${keys.id}&client_secret=${keys.secret}`
  }
}