export interface IDataResonse<T> {
    success: boolean,
    message: string,
    data: T
}