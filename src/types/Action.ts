import { Response } from "./Response";

export interface Action {
    type: string,
    payload: Response[],
}