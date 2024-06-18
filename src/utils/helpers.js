import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { v4 as uuidv4 } from "uuid";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// the redirect function of google
export const signINWithGoogle = async () => {
  await signInWithRedirect(auth, googleProvider).then((userCred) => {
    window.location.reload();
  });
};

// the redirect function of github
export const signINWithGitHub = async () => {
  await signInWithRedirect(auth, githubProvider).then((userCred) => {
    window.location.reload();
  });
};

// menu items with their respective terms
export const Menus = [
  { id: uuidv4(), name: "Projects", uri: "home/projects" },
  { id: uuidv4(), name: "Collections", uri: "home/collection" },
  { id: uuidv4(), name: "Profile", uri: "home/profile" }
];

// the signout function
export const signOutAction = async () => {
  await auth.signOut().then(()=>{
    window.location.reload();
  })
}