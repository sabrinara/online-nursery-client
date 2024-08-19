/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://online-nursery-server-blue.vercel.app/api" }),
  tagTypes: ["products", "categories","orders"],
  endpoints: (builder) => ({
    getProducts: builder.query ({
      query: () => ({
        method : "GET",
        url : "/products"
      }),
      providesTags: ["products"],
    }),
    addProduct: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          method: "POST",
          url: "/products/create-product",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        method: "PATCH",
        url: `/products/${id}`,
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/products/${id}`,
      }),
      invalidatesTags: ["products"],
    }),
    
    
    getCategories: builder.query ({
      query: () => ({
        method : "GET",
        url : "/categories"
      }),
      providesTags: ["categories"],
    }),
    getOrders: builder.query ({
      query: () => ({
        method : "GET",
        url : "/orders"
      }),
      providesTags: ["orders"],
    }),
  }),
});

export const { useGetProductsQuery,useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation, useGetCategoriesQuery ,useGetOrdersQuery } = baseApi;
