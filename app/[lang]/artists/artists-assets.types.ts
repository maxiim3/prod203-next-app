import { Z_Category } from "@/lib/sanity/category";
import * as z from "zod";


export const  Z_ArtistTypeSchema = z.enum([
    "line-break",
    "text-bold",
    "text-regular",
    "link"
]);
export type T_ArtistTypeSchema = z.infer<typeof  Z_ArtistTypeSchema>;

export const Z_I18NTitle = z.object({
    "fr": z.string(),
    "en": z.string(),
});
export type T_I18NTitle = z.infer<typeof Z_I18NTitle>;

export const Z_TextNode = z.object({
    "type":  Z_ArtistTypeSchema,
    "content": Z_I18NTitle.optional(),
});
export type T_TextNode = z.infer<typeof Z_TextNode>;

export const Z_ArtistStatic = z.object({
    "artist": z.string(),
    "assetdirectory": z.string(),
    "textNodes": z.array(Z_TextNode),
});
export type T_ArtistStatic = z.infer<typeof Z_ArtistStatic>;

export const Z_CategoryArtist = z.object({
    "title": Z_I18NTitle,
    "artists": z.record(z.string(), Z_ArtistStatic),
});
export type T_CategoryArtist = z.infer<typeof Z_CategoryArtist>;

export const Z_ArtistStaticData = z.array(Z_CategoryArtist)

export type T_ArtistStaticData = z.infer<typeof Z_ArtistStaticData>

export const ArtistStaticDataFactory = (data: any) => {
  const safe  = Z_ArtistStaticData.safeParse(data)

  if (!safe.success) throw new Error('Error while parsing JSOn artist data')

  return safe.data satisfies  T_ArtistStaticData
}
