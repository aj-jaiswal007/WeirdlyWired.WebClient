export function LogoutClient(nextUrl: string = "/") {
    localStorage.clear();
    window.location.href = nextUrl;
}