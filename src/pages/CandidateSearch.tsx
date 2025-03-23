import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import GetGitHubUserInfo from '../components/GitHubUserCard';

const CandidateSearch = () => {
const [githubuserinfo, setGitHubUserInfo] = useState({
  name: "",
  username: "",
  location: "",
  avatar: "",
  email: "",
  html_url: "",
  company: "",
  id: 0,})
const [count, setCount] = useState(0)
console.log(githubuserinfo)
useEffect(() => {
  const getGitHubUserInfo = async () => {
    const randomUserFromGitHub = await searchGithub();
    const userInformationFromGitHub = await searchGithubUser(randomUserFromGitHub [0].login);
    setGitHubUserInfo(userInformationFromGitHub)
  }
  getGitHubUserInfo()
}, [count])


  return <div><h1>CandidateSearch</h1>
  
    <GetGitHubUserInfo githubuserinfo={githubuserinfo} refresh={setCount}/>
  </div>;
};

export default CandidateSearch;
