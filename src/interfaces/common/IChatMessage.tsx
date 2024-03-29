export interface IChatMessage {
    sender_name: string,
    sender_id: number,
    content: number,
    receiver_id: number,
    receiver_type: number,
    is_me: boolean
}