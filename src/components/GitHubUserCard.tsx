import { GitHubUser } from "../interfaces/Candidate.interface"

interface GitHubUserProps {
    githubuserinfo: GitHubUser,
    refresh: React.Dispatch<React.SetStateAction<number>>
}
const GetGitHubUserInfo = ({githubuserinfo, refresh}: GitHubUserProps) => {

    const updateLocalStorage = () => {
        const currentLocalStorage = JSON.parse(localStorage.getItem("GitHubUsers") || "[]")
        currentLocalStorage.push(githubuserinfo)
        localStorage.setItem("GitHubUsers", JSON.stringify(currentLocalStorage))
    }
    return(<div>
        <p>{githubuserinfo.name}</p>
        <p>{githubuserinfo.username}</p>
        <p>{githubuserinfo.location}</p>
        <p>{githubuserinfo.avatar}</p>
        <p>{githubuserinfo.email}</p>
        <p>{githubuserinfo.html_url}</p>
        <p>{githubuserinfo.company}</p>
        <button onClick={() => refresh(count => count+=1)}>Next</button>
        <button onClick={updateLocalStorage}>Save</button>
    </div>)
}

export default GetGitHubUserInfo