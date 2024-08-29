import { apiSlice } from "../api/apiSlice";

export const adsApi =  apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAds : builder.mutation({
            query: (data) => ({
                url: "upload-ad",
                method: "POST",
                body: {data},
                credentials: "include" as const,
            }),
        }),
        })

    });


export const {useCreateAdsMutation} = adsApi;