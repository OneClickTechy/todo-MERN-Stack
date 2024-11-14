import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/auth",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: `/register`,
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: `/login`,
        method: "POST",
        body: userInfo,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/logout`,
        method: "POST",
        credentials: "include",
      }),
    }),
    getme: builder.query({
      query: () => ({
        url: `/getme`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useGetmeQuery } =
  userApi;
