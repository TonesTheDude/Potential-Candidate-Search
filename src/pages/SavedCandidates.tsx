import { useEffect } from "react";
import Button from "../components/button";
import { GitHubUser } from "../interfaces/Candidate.interface";
import { useState } from "react";

const SavedCandidates = () => {
  const [refresh, setRefresh] = useState(false);
  const handleClick = (id: number) => {
    const existingLocalStorage = localStorage.getItem("GitHubUsers");
    if (existingLocalStorage) {
      const parsedLocalStorage = JSON.parse(existingLocalStorage);
      const updatedLocalStorage = parsedLocalStorage.filter((user: GitHubUser) => user.id !== id);
      localStorage.setItem("GitHubUsers", JSON.stringify(updatedLocalStorage));
      setRefresh(true);
    }
  };
  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);
  const potentialCandidates = JSON.parse(localStorage.getItem("GitHubUsers") || "[]")
  return (
    <table>  
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Location</th>
          <th>Avatar</th>
          <th>Email</th>
          <th>HTML URL</th>
          <th>Company</th>
          <th>Reject</th>
        </tr>
      </thead>
      <tbody>
      {
        potentialCandidates.map((candidate: GitHubUser) => (
          <tr key={candidate.id}>
        <td>{candidate.name}</td>
        <td>{candidate.username}</td>
        <td>{candidate.location}</td>
        <td>{candidate.avatar}</td>
        <td>{candidate.email}</td>
        <td>{candidate.html_url}</td>
        <td>{candidate.company}</td>
        <td><Button label='Reject' onClick= {() => handleClick(candidate.id)}></Button></td>
    </tr>)
     )}
      </tbody>
    </table>
  );
};

export default SavedCandidates;
