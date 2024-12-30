import { SanityAsset } from "@sanity/image-url/lib/types/types";
import * as z from "zod";


export const ChildSchema = z.object({
    "_type": z.string(),
    "_key": z.string(),
    "text": z.string(),
    "marks": z.array(z.any()),
});
export type Child = z.infer<typeof ChildSchema>;

export const AssetSchema = z.object({
    "_type": z.string(),
    "_ref": z.string(),
});
export type Asset = z.infer<typeof AssetSchema>;

export const SlugSchema = z.object({
    "_type": z.string(),
    "current": z.string(),
});
export type Slug = z.infer<typeof SlugSchema>;

export const EnSchema = z.object({
    "_type": z.string(),
    "_key": z.string(),
    "style": z.string(),
    "markDefs": z.array(z.any()),
    "children": z.array(ChildSchema),
});
export type En = z.infer<typeof EnSchema>;

export const ImageSchema = z.object({
    "_type": z.string(),
    "asset": AssetSchema,
});
export type SanityImage = z.infer<typeof ImageSchema>;

export const ReferenceSchema = z.object({
    "_type": z.string(),
    "_key": z.string(),
    "name": z.string(),
    "year": z.string(),
    "image": ImageSchema,
});
export type Reference = z.infer<typeof ReferenceSchema>;

export const DescriptionSchema = z.object({
    "_type": z.string(),
    "_key": z.string(),
    "en": z.array(EnSchema),
    "fr": z.array(EnSchema),
});
export type Description = z.infer<typeof DescriptionSchema>;

export const SanityArtistSchema = z.object({
    "_createdAt": z.coerce.date(),
    "_id": z.string(),
    "_rev": z.string(),
    "_type": z.string(),
    "_updatedAt": z.coerce.date(),
    "name": z.string(),
    "slug": SlugSchema,
    "description": z.array(DescriptionSchema),
    "image": ImageSchema,
    "references": z.array(ReferenceSchema),
});
export type SanityArtist = z.infer<typeof SanityArtistSchema>;
export type T_Artist = Omit<SanityArtist, '_createdAt' & '_rev' & '_updatedAt' & '_type'>

export const ArtistFactory = (artist: SanityArtist) : T_Artist => {
  return {
     "name": artist.name,
     "slug": artist.slug,
     "description": artist.description,
     "image": artist.image,
     "references": artist.references
   }
}
