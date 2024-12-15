export interface Title {
    fr: string
    en: string
}

export interface Artist {
    artist: string
    assetdirectory: string
    fr: string
    en: string
}

export interface JSON_AssetCategory {
    title: Title
    artists: Record<string, Artist>
}
