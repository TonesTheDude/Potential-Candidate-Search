// TODO: Create an interface for the Candidate objects returned by the API
export interface GitHubUser {
    name: string,
    username: string,
    location: string,
    avatar: string,
    email: string,
    html_url: string,
    company: string,
    id: number,
}