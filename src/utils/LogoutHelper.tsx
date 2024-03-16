export function LogoutClient(nextUrl: string = "/") {
    console.log("Logging out....");
    localStorage.clear();
    window.location.href = nextUrl;
}