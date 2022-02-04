import axios from "axios";
import React from "react";
import useSWR from "swr";

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Page() {
  return (
    <div>
      <Profile id={124} />
      <Avatar id={123} />
    </div>
  );
}

function Profile({ id }) {
  //   const { data, error } = useSWR("/api/user/123", fetcher);
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>Failed to Load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>Hello, {user.name}</div>
      <Avatar id={123} />
    </>
  );
}

export function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>Failed to Load (Avatar)</div>;
  if (isLoading) return <div>Loading...(Avatar)</div>;

  return <div>Hello, {user.name}! (Avatar)</div>;
}
