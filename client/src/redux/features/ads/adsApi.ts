import { apiSlice } from "../api/apiSlice";

export const adsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAds: builder.mutation({
      query: ({ name, description, price, estimatedPrice, tags,  level, ImageOne }) => ({
        url: "upload-ad",
        method: "POST",
        body: {
          name,
          description,
          price,
          estimatedPrice,
          tags,
          level,
          ImageOne,
        },  
        credentials: "include" as const,
      }),
    }),
  }),
  
});

export const { useCreateAdsMutation } = adsApi;

