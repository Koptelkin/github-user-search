import { GithubUser, LocalGithubUser } from "types";

export const IsGithubUser = (user: any): user is GithubUser => 'name' in user;

