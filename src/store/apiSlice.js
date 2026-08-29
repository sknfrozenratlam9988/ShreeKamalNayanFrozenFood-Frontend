import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    import.meta.env.VITE_API_URL || "https://api.shreekamalnayanfrozenfood.com",
  credentials: "include",
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    // ------- PUBLIC -------
    getProducts: builder.query({
      query: ({ category, search } = {}) => {
        const params = new URLSearchParams();
        if (category && category !== "All") params.set("category", category);
        if (search) params.set("search", search);
        const qs = params.toString();
        return `/products${qs ? `?${qs}` : ""}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Product", id: _id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    getFeaturedProducts: builder.query({
      query: () => `/products?featured=true`,
      providesTags: [{ type: "Product", id: "FEATURED" }],
    }),
    getProductBySlug: builder.query({
      query: (slug) => `/products/${slug}`,
      providesTags: (result, error, slug) => [{ type: "Product", id: slug }],
    }),

    // ------- ADMIN -------
    getAdminProducts: builder.query({
      query: () => `/products/admin/all`,
      providesTags: [{ type: "Product", id: "LIST" }],
    }),
    createProduct: builder.mutation({
      query: (body) => ({ url: `/products`, method: "POST", body }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...body }) => ({ url: `/products/${id}`, method: "PUT", body }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({ url: `/products/${id}`, method: "DELETE" }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    uploadImages: builder.mutation({
      query: (formData) => ({
        url: `/products/upload/images`,
        method: "POST",
        body: formData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: `/auth/login`,
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/auth/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetFeaturedProductsQuery,
  useGetProductBySlugQuery,
  useGetAdminProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useUploadImagesMutation,
  useLoginMutation,
  useLogoutMutation,
} = apiSlice;