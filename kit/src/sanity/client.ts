import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATA_SET } from "$env/static/public";
import sanityClient from "@sanity/client";


function createClient() {
    return sanityClient({
        projectId: PUBLIC_SANITY_PROJECT_ID,
        dataset: PUBLIC_SANITY_DATA_SET,
        apiVersion: "2022-11-14",
        useCdn: false
    });
}

export default createClient();