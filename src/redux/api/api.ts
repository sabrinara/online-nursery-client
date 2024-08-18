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

export const { useGetProductsQuery, useGetCategoriesQuery ,useGetOrdersQuery } = baseApi;
