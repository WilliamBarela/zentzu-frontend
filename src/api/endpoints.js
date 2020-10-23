const ROOT = (window.location.hostname === "williambarela.com") ? "https://zentzu.herokuapp.com/api/v1" : "http://localhost:3001/api/v1";

export const URI = (endpoint) => ROOT + endpoint;

export const LOGIN = "/login";
export const PROFILE = "/profile";
export const SIGNUP = "/signup";
export const DASHBOARD = "/dashboard";
export const TASKS = '/tasks';
