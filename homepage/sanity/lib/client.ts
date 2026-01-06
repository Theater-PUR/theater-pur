import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Use the API instead of CDN so ISR gets fresh content on revalidate
  useCdn: false,
});
