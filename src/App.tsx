import {useState} from 'react';

import Container from "components/Container/Container";
import Header from "components/Header/Header";
import Search from "components/Search/Search";
import UserCard from "components/UserCard/UserCard";
import {defaultUser} from 'mock';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { IsGithubUser } from 'utils/typeguards';
import { extractUser } from 'utils/extract';

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError;

    if (IsGithubUser(user)) {
      setUser(extractUser(user));
    } else {
      setUser(null)
    }
  }

  return (
    <Container>
      <Header/>
      <Search hasError={!user} onSubmit={fetchUser}/>
      {user && (
        <UserCard
          {...user}
        />
      )}
    </Container>
  );
}

export default App;
