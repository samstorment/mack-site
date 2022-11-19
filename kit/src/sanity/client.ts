import { SANITY_PROJECT_ID, SANITY_DATA_SET } from "$env/static/private";
import sanityClient from "@sanity/client";


function createClient() {
    return sanityClient({
        projectId: SANITY_PROJECT_ID,
        dataset: SANITY_DATA_SET,
        apiVersion: "2022-11-14",
        useCdn: false
    });
}

export default createClient();