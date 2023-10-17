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