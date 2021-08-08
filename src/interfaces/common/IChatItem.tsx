export interface IChatItem {
    id: number,
    key: string,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: number | null,
    profile_info?: {
        profile_url?: string,
        description?: string
    }
}