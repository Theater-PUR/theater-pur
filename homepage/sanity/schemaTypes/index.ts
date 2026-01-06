import { type SchemaTypeDefinition } from "sanity";

import play from "./play";
import newsPost from "./newsPost";
import teamMember from "./teamMember";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [play, newsPost, teamMember, siteSettings],
};
