import { useEffect, useState } from "react";
import type { JSON_AssetCategory } from "./artists-assets.types";
import type { ArtistAPI } from "@/app/api/artists/route";

async function fetchImages() {
    const response = await fetch('/api/artists');
    const data = await response.json() as ArtistAPI;

    return data
}

// Fetches images from public/assets/artists/
// as [artist] : 'image_name.*'[]
export function useFetchAssets() {
    const [assets, setAssets] = useState<ArtistAPI>({});

    useEffect(() => {
        fetchImages().then(data => setAssets(data))
    }, []);


    return assets
}