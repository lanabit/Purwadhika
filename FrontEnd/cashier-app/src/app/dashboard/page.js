'use client'
import { useZustandStores } from "~/zustand-stores";
export default function Dashboard() {
  const { users } = useZustandStores()

  return (
    <>
    <div>Hello, {users?.username}</div>
    </>
  );
}
