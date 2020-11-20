export interface urlName {
    url: string[];
    fragment: string;
    text: string;
    class?: string;
}

export interface bottomLink {
    left: urlName;
    center: urlName;
    right: urlName;
}