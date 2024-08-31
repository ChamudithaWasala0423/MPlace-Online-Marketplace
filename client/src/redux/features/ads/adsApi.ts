import { apiSlice } from "../api/apiSlice";

export const adsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAds: builder.mutation({
      query: ({ name, description, price, estimatedPrice, tags,  level, ImageOne, address }) => ({
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
          address,
        },  
        credentials: "include" as const,
      }),
    }),
    getAllAds : builder.query({
      query: () => ({
        url: "get-ads",
        method: "GET",
        credentials: "include" as const,
      })
    }),
    getAdDetails : builder.query({
      query: (id) => ({
        url: `get-ad/${id}`,
        method: "GET",
        credentials: "include" as const,
      })
    }),
    getUserAdDetails : builder.query({
      query: (id) => ({
        url: `get-single-ad/${id}`,
        method: "GET",
        credentials: "include" as const,
      })
    }),
    editAdd: builder.mutation({
      query: ({ id, name, description, price, estimatedPrice, tags,  level, ImageOne, address }) => ({
        url: `edit-ad/${id}`,
        method: "PUT",
        body: {
          name,
          description,
          price,
          estimatedPrice,
          tags,
          level,
          ImageOne,
          address,
        },  
        credentials: "include" as const,
      }),
    }),
    deleteAd : builder.mutation({
      query: (id) => ({
        url: `delete-ad/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      })
    }),
  }),
  
});

export const { useCreateAdsMutation, useGetAllAdsQuery, useGetAdDetailsQuery, useGetUserAdDetailsQuery, useEditAddMutation, useDeleteAdMutation } = adsApi;

