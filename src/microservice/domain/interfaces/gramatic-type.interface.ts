export interface GramaticTypeKey {
    name: string;
}

export interface GramaticType extends GramaticTypeKey {
    description?: string;
    root: string;
    active: boolean;
}

export interface GramaticTypeFilter extends Object {
    root: string;
    active?: boolean;
}
