import { ReactNode } from "react";

export interface Rules {
    required?: string
}

export interface Option {
    label?: string
    value: string | number
}

export interface DefaultValues {
    [key: string]: string;
}

export interface Buttons {
    button: ReactNode
    action : string;
}

export interface ActionData {
    action: string, 
    element: any
}