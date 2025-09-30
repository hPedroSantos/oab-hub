export interface IController<TInput = any, TOutput = any> {
    handle(input: TInput): Promise<TOutput>;
}